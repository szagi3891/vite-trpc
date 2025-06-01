import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
// import { trpcClient } from "src/server/trpc/trpcClient";


class State {

    public counter: number = 0;
    
    constructor() {


        makeAutoObservable(this);
    }
}

export const App = observer(() => {
    const [ state ] = React.useState(() => new State());

    // React.useEffect(() => {

    //     (async () => {
    //         const response = await trpcClient.trpc.cosRouter.runImage.mutate({
    //             where: 'ssh',
    //             imageId: '443322',
    //             imageName: 'name...name'
    //         });
    //     })();
    // });

    return (
        <div className="App">
            <div>App komponent</div>
            <div>
                counter = {state.counter}
            </div>
            <button onClick={() => {
                state.counter += 1;
            }}>
                up
            </button>

            <button onClick={() => {
                state.counter += 1;
            }}>
                down
            </button>
        </div>
    )
});

