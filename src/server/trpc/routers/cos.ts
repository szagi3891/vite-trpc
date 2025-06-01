import { z } from "zod";
import { fullAccessProcedure, trpcApp } from "../routerContext";


export const cosRouter = trpcApp.router({
    runImage: fullAccessProcedure
        .input(z.object({
            where: z.enum(['local', 'ssh']),
            imageName: z.string(),
            imageId: z.string(),
        }))
        .mutation(async ({ input }) => {
            
            return {
                text: `jakaś odpowiedź ==> ${input.where} => ${input.imageName} => ${input.imageId}`
            };
        }),
});
