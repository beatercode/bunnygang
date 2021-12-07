import Web3 from "web3";
import MarketplaceContract from "../../contracts/NFTMarket.json";
import ERC721Enumerable from "../../contracts/ERC721Enumerable.json";
import {
    COLLECTIONS
} from "../../components/Marketplace/Collections";

const fetchDataRequest = () => {
    return {
        type: "FETCH_DATA_REQUEST",
    };
};

const fetchDataSuccess = (payload) => {
    return {
        type: "FETCH_DATA_SUCCESS",
        payload: payload,
    };
};

const fetchDataFailed = (payload) => {
    return {
        type: "FETCH_DATA_FAILED",
        payload: payload,
    };
};

export const fetchMarketplaceData = () => {
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
            const marketplaceContract = new web3.eth.Contract(
                MarketplaceContract.abi,
                "0xB6410a1B2d923958a187407844172339051DE999"
            );

            let marketItems = await marketplaceContract.methods
                .fetchMarketItems()
                .call();

            let allMarketItems = await marketplaceContract.methods
                .fetchAllMarketItems()
                .call();

            let saleFee = await marketplaceContract.methods.saleFee().call();

            let totalItemsSold = await marketplaceContract.methods
                .getNumberItemsSold()
                .call();

            dispatch(
                fetchDataSuccess({
                    smartContract: marketplaceContract,
                    marketItems,
                    allMarketItems,
                    saleFee,
                    totalItemsSold,
                })
            );
            return Promise.resolve();
        } catch (err) {
            console.error(err);
            dispatch(
                fetchDataFailed("Could not load data from marketplace contract : ", err)
            );
            return Promise.reject();
        }
    };
};

const fetchUserDataRequest = () => {
    return {
        type: "FETCH_USER_DATA_REQUEST",
    };
};

const fetchUserDataSuccess = (payload) => {
    return {
        type: "FETCH_USER_DATA_SUCCESS",
        payload: payload,
    };
};

const fetchUserDataFailed = (payload) => {
    return {
        type: `FETCH_USER_DATA_FAILED`,
        payload: payload,
    };
};

export const fetchUserData = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserDataRequest());

        const contracts = COLLECTIONS.map((c) => c.contract);

        const web3 = getState().blockchain.web3;

        let uris = [];
        let urisOnSale = [];

        try {
            contracts.forEach(async (_contract) => {
                const contract = new web3.eth.Contract(ERC721Enumerable.abi, _contract);

                const tokens = [];

                const balance = await contract.methods
                    .balanceOf(getState().blockchain.account)
                    .call();

                for (let i = 0; i < balance; i++) {
                    tokens.push(
                        await contract.methods
                        .tokenOfOwnerByIndex(getState().blockchain.account, i)
                        .call()
                    );
                }

                for (let i = 0; i < tokens.length; i++) {
                    const _uri = await contract.methods.tokenURI(tokens[i]).call();

                    uris.push({
                        contract: _contract,
                        tokenId: tokens[i],
                        uri: _uri.split("ipfs://").length > 1 ?
                            "https://ipfs.infura.io/ipfs/" + _uri.split("ipfs://")[1] :
                            _uri,
                    });
                }
            });

            const itemsOnSale = await getState()
                .marketplace.smartContract.methods.fetchMyNFTsOnSale()
                .call({
                    from: getState().blockchain.account
                });

            itemsOnSale.forEach(async (item) => {
                const contract = new web3.eth.Contract(
                    ERC721Enumerable.abi,
                    item["nftContract"]
                );

                const _uri = await contract.methods.tokenURI(item["tokenId"]).call();

                urisOnSale.push({
                    itemId: item["itemId"],
                    uri: _uri.split("ipfs://").length > 1 ?
                        "https://ipfs.infura.io/ipfs/" + _uri.split("ipfs://")[1] :
                        _uri,
                    price: item["price"],
                });
            });

            dispatch(
                fetchUserDataSuccess({
                    userWallet: uris,
                    userItemsOnSale: urisOnSale,
                })
            );
            return Promise.resolve();
        } catch (err) {
            console.error(err);
            dispatch(
                fetchUserDataFailed({
                    error: true,
                    errorMsg: "Could not load user data from token contracts : ",
                    err,
                })
            );
            return Promise.reject();
        }
    };
};