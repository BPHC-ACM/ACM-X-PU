import { logger } from '../config/logger.config';
import { PrismaClient } from '../generated/prisma';

const prisma: PrismaClient = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'error' },
    { emit: 'event', level: 'warn' },
  ],
});

// Log database queries in development
if (process.env.NODE_ENV === 'development') {
  prisma.$on('query' as never, (e: { query: string; duration: number }) => {
    logger.debug({ query: e.query, duration: e.duration }, 'Database query executed');
  });
}

prisma.$on('error' as never, (e: { message: string }) => {
  logger.error({ message: e.message }, 'Database error');
});

prisma.$on('warn' as never, (e: { message: string }) => {
  logger.warn({ message: e.message }, 'Database warning');
});

logger.info('Prisma client initialized');

export default prisma;
