import React, { Component } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import App from "../containers/App";
import DevTools from "../devtools";

class Root extends Component {

    render() {

        const { store } = this.props;

        return (
            <Provider store={store}>
                <div>
                    <App />
                    <DevTools />
                </div>
            </Provider>
        );

    }

}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

module.exports = Root;
