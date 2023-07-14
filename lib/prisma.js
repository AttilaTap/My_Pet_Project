import { PrismaClient } from '@prisma/client';

// Check if global.prisma is not already defined, and then initialize it
if (!global.prisma) {
  global.prisma = new PrismaClient();
}

// Create a reference to prisma
const prisma = global.prisma;

// Use global.prisma in development mode
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;

