import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import {
    Provider
} from "react-redux";
import "./styles/reset.css";
import "./styles/theme.css";

import {
    ChakraProvider
} from "@chakra-ui/react";
import {
    extendTheme
} from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    styles: {
        global: {
            button: {
                _focus: {
                    boxShadow: "none !important"
                }
            }
        }
    }
})

ReactDOM.render( <
    Provider store = {
        store
    } >
    <
    ChakraProvider theme = {
        theme
    } >
    <
    App / >
    <
    /ChakraProvider> <
    /Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();