// log
import store from "../store";

const fetchDataRequest = () => {
    return {
        type: "CHECK_DATA_REQUEST",
    };
};

const fetchDataSuccess = (payload) => {
    return {
        type: "CHECK_DATA_SUCCESS",
        payload: payload,
    };
};

const fetchDataFailed = (payload) => {
    return {
        type: "CHECK_DATA_FAILED",
        payload: payload,
    };
};

export const fetchData = (account) => {
    if (account === "") {
        return;
    }
    return async (dispatch) => {
        dispatch(fetchDataRequest());

        try {
            let walletOfAccount = await store
                .getState()
                .blockchain.smartContract.methods.walletOfOwner(account)
                .call();

            let totalSupply = await store
                .getState()
                .blockchain.smartContract.methods.totalSupply()
                .call();

            let price = await store
                .getState()
                .blockchain.smartContract.methods.getPrice()
                .call();

            dispatch(
                fetchDataSuccess({
                    walletOfAccount,
                    totalSupply,
                    price,
                })
            );
        } catch (err) {
            console.error(err);
            dispatch(fetchDataFailed("Could not load data from contract."));
        }
    };
};