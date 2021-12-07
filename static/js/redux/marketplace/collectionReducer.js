const initialState = {
    loading: false,
    error: false,
    errorMsg: "",
    collectionItems: [],
    creatorFee: 0,
    volume: 0,
    collectionContract: null,
    floorPrice: 0
};

const marketplaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COLLECTION_REQUEST":
            return {
                ...initialState,
                loading: true,
            };

        case "FETCH_COLLECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                collectionItems: action.payload.collectionItems,
                volume: action.payload.volume,
                creatorFee: action.payload.creatorFee,
                collectionContract: action.payload.collectionContract,
                floorPrice: action.payload.floorPrice,
                error: false,
            };

        case "FETCH_COLLECTION_FAILED":
            return {
                ...initialState,
                loading: false,
                errorMsg: action.payload,
                error: true,
            };

        default:
            return state;
    }
};

export default marketplaceReducer;