require('@opentelemetry/auto-instrumentations-node/register');
import express from 'express';
import routes from './routes';
import cors from "cors";
import logger from './logger';

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    logger.info(`Order Service running on http://localhost:${PORT}`);
});

