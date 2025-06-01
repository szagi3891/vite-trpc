import { createTRPCClient, httpLink, loggerLink, type TRPCClient } from "@trpc/client";
import type { AppRouter } from "./routers/main";
import superjson from 'superjson';
// import superjson from 'superjson';

// const isBrowser = (): boolean => {
//     return typeof window !== 'undefined';
// };

const create = (trpcUrl: string): TRPCClient<AppRouter> => {
    const trpc = createTRPCClient<AppRouter>({
    
        links: [
            loggerLink<AppRouter>(),
            httpLink<AppRouter>({
                url: trpcUrl,                    
                transformer: superjson,
                // fetch: trpcFetch.trpcFetch,
                headers: () => {
                    // const jwt = this.jwt.getValue();

                    //TODO - zrobić ciasteczkową obsługę

                    // console.info(`TRPC request, jwt ==> ${jwt}`);

                    // return {
                    //     Authorization: jwt,
                    // };

                    return {

                    };
                },
            })
        ],
    });

    return trpc;
};

export class TrpcClient {
    public readonly trpc: TRPCClient<AppRouter>;

    constructor() {
        this.trpc = create('/trpc');
    }
}

export const trpcClient = new TrpcClient();