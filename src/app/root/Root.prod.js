import React, {Component} from "react";
import {Provider} from "react-redux";
import PropTypes from "prop-types";

import App from "../containers/App";
/**
 * Component is exported for conditional usage in Root.js
 */
class Root extends Component {

    render() {

        const {store} = this.props;

        return (
            <Provider store={store}>
                <App />
            </Provider>
        );

    }

}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

module.exports = Root;
