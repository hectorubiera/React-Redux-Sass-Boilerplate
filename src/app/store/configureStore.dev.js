import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

const finalCreateStore = compose(
    applyMiddleware(logger, sagaMiddleware),
    reduxDevTools
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept("../reducers", () =>
            store.replaceReducer(require("../reducers"))
        );
    }

    return store;
}
