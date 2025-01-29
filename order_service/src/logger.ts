const pino = require('pino');

// Initialize Pino logger
const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
  },
});

export default logger;