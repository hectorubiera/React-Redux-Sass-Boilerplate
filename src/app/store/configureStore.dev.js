import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const finalCreateStore = composeEnhancers(
    applyMiddleware(logger, sagaMiddleware)
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
