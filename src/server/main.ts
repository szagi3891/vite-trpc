import type express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/routers/main";
import type { TrpcContextType } from "./trpc/routerContext";

interface Config {
    port: number,
    callback: () => void,
}

export const configureServer = (app: express.Express): Config => {
    app.use(
        '/trpc',
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext: async (_nextContest: CreateExpressContextOptions): Promise<TrpcContextType> => {
                return {

                    //Miejsce po stronie serwera na inicjowaniee kontekstu

                    // executionContext: 'server',
                    // sessionId: nextContest.req.headers['authorization'] ?? null,
                    // config,
                };
            },
        }),
    );
    
    return {
        port: 3000,
        callback: () => {
            console.log("Server is listening on port 3000...");
        }
    };
}