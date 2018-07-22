import React from "react";
import ReactDOM from "react-dom";

import {
    configureStore
} from "./store";
import {
    Root
} from "./root";

// Require style file
require("../sass/styles.scss");

const store = configureStore();

ReactDOM.render(<
    Root store = {
        store
    }
/>,
document.getElementById("main-app-wrapper")
);
