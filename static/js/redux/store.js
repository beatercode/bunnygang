import {
    applyMiddleware,
    compose,
    createStore,
    combineReducers
} from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";
import marketplaceReducer from "./marketplace/marketplaceReducer";
import collectionReducer from "./marketplace/collectionReducer";

const rootReducer = combineReducers({
    blockchain: blockchainReducer,
    data: dataReducer,
    marketplace: marketplaceReducer,
    collection: collectionReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;