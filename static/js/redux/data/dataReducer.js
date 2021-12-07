const initialState = {
    loading: false,
    error: false,
    walletOfAccount: [],
    totalSupply: 0,
    price: 0,
    errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_DATA_REQUEST":
            return {
                ...initialState,
                loading: true,
            };
        case "CHECK_DATA_SUCCESS":
            return {
                ...initialState,
                loading: false,
                walletOfAccount: action.payload.walletOfAccount,
                totalSupply: action.payload.totalSupply,
                price: action.payload.price,
            };
        case "CHECK_DATA_FAILED":
            return {
                ...initialState,
                loading: false,
                error: true,
                errorMsg: action.payload,
            };
        default:
            return state;
    }
};

export default dataReducer;