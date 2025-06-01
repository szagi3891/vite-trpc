import { initTRPC, /*TRPCError*/ } from '@trpc/server';
import superjson from 'superjson';

export type TrpcContextType = {
    // sessionId: string | null,
    // setCookie: (name: string, value: string) => Promise<void>,
    // getCookie: (name: string) => Promise<string | null>,
    // deleteCookie: (name: string) => Promise<void>,
}

export const trpcApp = initTRPC.context<TrpcContextType>().create({
    transformer: superjson,
});

export const fullAccessProcedure = trpcApp.procedure;

export const userProcedure = trpcApp.procedure.use(trpcApp.middleware(async (opts) => {


    //TODO - tutaj można dodać metodę atuoryzacji (np. weryfikacja czy token jwt jest poprawny i czy request może przejść dalej)


    // const { ctx } = opts;
    
    // const sessionId = ctx.sessionId;

    // if (sessionId === null) {
    //     throw new TRPCError({ code: 'UNAUTHORIZED' });
    // }

    // const userId = await ctx.config.dbService.getUserIdFromSessionId(sessionId);

    // if (userId === null) {
    //     throw new TRPCError({ code: 'UNAUTHORIZED', message: `missing session for sessionId=${sessionId}, path=${opts.path} executionContext=${opts.ctx.executionContext}`});
    // }

    //TODO ?
    // const userId = 0;

    return opts.next({
        // ctx: {
        //     userId,
        // },
    });
}));