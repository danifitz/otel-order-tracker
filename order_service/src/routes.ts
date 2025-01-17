import { Router, Request, Response } from 'express';

const router = Router();

router.post('/order', (req: Request, res: Response) => {
    res.json({ message: "Order created" });
});

router.get('/order/:id', (req: Request, res: Response) => {
    res.json({ orderId: req.params.id, status: "Order status" });
});

router.get('/orders', (req: Request, res: Response) => {
    res.json({ orders: [{ id: 1, status: "Pending" }] });
});

export default router;

