import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import { admin, username } from 'better-auth/plugins';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  plugins: [
    admin(),
    username({
      minUsernameLength: 5,
      maxUsernameLength: 20,
      usernameValidator: (username) => {
        if (username === 'admin') {
          return false;
        }
        return true;
      },
    }),
    nextCookies(),
  ],

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    disableSignUp: false,
  },

  advanced: {
    ipAddress: {
      ipAddressHeaders: [
        'cf-connecting-ip',
        'x-forwarded-for',
        'x-real-ip',
        'x-client-ip',
      ],
      disableIpTracking: false,
    },
  },
});
