const initialState = {
    loading: false,
    error: false,
    errorMsg: "",
    smartContract: null,
    totalItemsSold: 0,
    saleFee: 0,
    marketItems: [],
    allMartketItems: [],
    userWallet: [],
    userItemsOnSale: [],
};

const marketplaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...initialState,
                loading: true,
            };

        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                smartContract: action.payload.smartContract,
                totalItemsSold: action.payload.totalItemsSold,
                saleFee: action.payload.saleFee,
                marketItems: action.payload.marketItems,
                allMarketItems: action.payload.allMarketItems,
                error: false,
            };

        case "FETCH_DATA_FAILED":
            return {
                ...initialState,
                loading: false,
                errorMsg: action.payload,
                error: true,
            };

        case "FETCH_USER_DATA_REQUEST":
            return {
                ...state,
                loading: true,
            };

        case "FETCH_USER_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                error: false,
                userWallet: action.payload.userWallet,
                userItemsOnSale: action.payload.userItemsOnSale,
            };

        case "FETCH_USER_DATA_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: action.payload,
                error: true,
            };

        default:
            return state;
    }
};

export default marketplaceReducer;