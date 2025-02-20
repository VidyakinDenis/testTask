import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './App';
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";

const store = setupStore()

const container = document.getElementById('root') as HTMLElement;
const root = createRoot( container );
root.render(
    <Provider store={store}>

        <App />
    </Provider>
);
