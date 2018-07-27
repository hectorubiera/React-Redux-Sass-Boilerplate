import React, {Component} from "react";
import {Provider} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter} from "react-router-dom";

import App from "../containers/App";
import DevTools from "../devtools";

class Root extends Component {

    render() {

        const {store} = this.props;

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                    <DevTools />
                </BrowserRouter>
            </Provider>
        );

    }

}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

module.exports = Root;
