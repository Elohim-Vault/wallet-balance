import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={{}}>
            <App />
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

