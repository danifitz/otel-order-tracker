import { Router, Request, Response } from 'express';
import axios from 'axios'; // Using axios for HTTP requests
import logger from './logger';

const router = Router();

router.post('/order', async (req: Request, res: Response) => {
    try {
        // Call user service /profile
        logger.info("Calling user service - get user /profile");
        const userResponse = await axios.get('http://user-service:5005/profile');
        const userProfile = userResponse.data;
        logger.info("Got user profile:", userResponse.data);

        // Call inventory service /inventory/1 to check stock
        logger.info("Calling inventory service - checking stock");
        const inventoryResponse = await axios.get('http://inventory-service:5002/inventory/1');
        const inventoryData = inventoryResponse.data;
        logger.info("Got inventory response:", inventoryResponse.data);

        // Check if stock is available
        if (!inventoryData || inventoryData.stock <= 0) {
            return res.status(400).json({ error: "Insufficient stock" });
        }

        // Call notification service
        logger.info("Calling notification service");
        const notificationPayload = {
            message: `Order created for user: ${userProfile.name} with product ID: 1`,
        };
        await axios.post('http://notification-service:5003/notify', notificationPayload);

        // Respond with success
        res.json({ message: "Order created successfully" });
    } catch (error: unknown) {
        // Type narrow the error to handle different cases
        if (axios.isAxiosError(error)) {
            // Handle Axios-specific errors
            logger.error("Axios error occurred:", error.message);
            logger.error("Request URL:", error.config?.url);
            logger.error("Request Method:", error.config?.method);
            logger.error("Status Code:", error.response?.status);
            res.status(500).json({ error: `Service call failed: ${error.message}` });
        } else if (error instanceof Error) {
            // Handle general JS errors
            logger.error("General error occurred:", error.message);
            res.status(500).json({ error: `An error occurred: ${error.message}` });
        } else {
            // Handle unknown errors
            logger.error("Unknown error occurred:", error);
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

router.get('/order/:id', (req: Request, res: Response) => {
    res.json({ orderId: req.params.id, status: "Order status" });
});

router.get('/orders', (req: Request, res: Response) => {
    res.json({ orders: [{ id: 1, status: "Pending" }] });
});

export default router;