import Web3 from "web3";
import ERC721 from "../../contracts/ERC721.json";

const fetchDataRequest = () => {
    return {
        type: "FETCH_COLLECTION_REQUEST",
    };
};

const fetchDataSuccess = (payload) => {
    return {
        type: "FETCH_COLLECTION_SUCCESS",
        payload: payload,
    };
};

const fetchDataFailed = (payload) => {
    return {
        type: "FETCH_COLLECTION_FAILED",
        payload: payload,
    };
};

export const fetchCollectionData = (nftContract) => {
    if (!nftContract || nftContract === "") return;

    return async (dispatch, getState) => {
        dispatch(fetchDataRequest());

        let web3;

        if (getState().blockchain.web3) {
            web3 = getState().blockchain.web3;
        } else {
            web3 = new Web3(
                new Web3.providers.HttpProvider(
                    "https://arbitrum-mainnet.infura.io/v3/0efc384c0af24c16bcfbcc2efe7b332e"
                )
            );
        }

        try {
            const collectionContract = new web3.eth.Contract(ERC721.abi, nftContract);

            let collectionItems = await getState()
                .marketplace.smartContract.methods.fetchMarketItems(nftContract)
                .call();

            collectionItems = collectionItems.filter(
                (item) =>
                item.nftContract !== "0x0000000000000000000000000000000000000000"
            );

            let creatorFee = await getState()
                .marketplace.smartContract.methods.getCreatorFee(nftContract)
                .call();

            let volume = await getState()
                .marketplace.smartContract.methods.getContractVolume(nftContract)
                .call();

            const floorPrice =
                collectionItems.length > 0 ?
                collectionItems.reduce((acc, cur) => {
                    return Math.min(acc, cur["price"]);
                }, collectionItems[0]["price"]) :
                0;

            dispatch(
                fetchDataSuccess({
                    collectionItems: collectionItems.filter(
                        (item) => item["seller"] !== item["owner"]
                    ),
                    creatorFee,
                    volume,
                    collectionContract,
                    floorPrice,
                })
            );
        } catch (err) {
            console.error(err);
            dispatch(fetchDataFailed("Could not load collection data : ", err));
        }
    };
};