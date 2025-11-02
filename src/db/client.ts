import { PrismaClient } from '@/generated/prisma/client';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const prisma: PrismaClient = new PrismaClient();

export default prisma;
