import { z } from "zod";
import { fullAccessProcedure, trpcApp } from "../routerContext";
import { cosRouter } from "./cos";

export const appRouter = trpcApp.router({
    cosRouter: cosRouter,
    helloWorld: fullAccessProcedure
        .input(z.object({
            param: z.string(),
        }))
        .query(async ({ input }) => {
            
            return `RRR ${input.param}`;
        }),
});

export type AppRouter = typeof appRouter;

