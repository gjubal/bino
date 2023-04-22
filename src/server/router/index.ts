// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { authRouter } from './auth';
import { userRouter } from './user';
import { transactionRouter } from './transaction';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('users.', userRouter)
	.merge('auth.', authRouter)
	.merge('transactions.', transactionRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
