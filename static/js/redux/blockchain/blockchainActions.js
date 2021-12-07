// constants
import Web3 from "web3";
import SmartContract from "../../contracts/TheBunnyGang.json";
// log
import {
    fetchData
} from "../data/dataActions";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const connectRequest = () => {
    return {
        type: "CONNECTION_REQUEST",
    };
};

const connectSuccess = (payload) => {
    return {
        type: "CONNECTION_SUCCESS",
        payload: payload,
    };
};

const connectFailed = (payload) => {
    return {
        type: "CONNECTION_FAILED",
        payload: payload,
    };
};

const updateAccountRequest = (payload) => {
    return {
        type: "UPDATE_ACCOUNT",
        payload: payload,
    };
};

export const connect = () => {
    return async (dispatch) => {
        dispatch(connectRequest());
        // if (window.ethereum) {
        // window.ethereum.enable();

        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: "0efc384c0af24c16bcfbcc2efe7b332e",
                },
            },
        };

        const web3Modal = new Web3Modal({
            cacheProvider: true,
            disableInjectedProvider: false,
            providerOptions,
        });

        web3Modal.clearCachedProvider();

        const provider = await web3Modal.connect();

        let web3 = new Web3(provider);
        try {
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.getChainId();
            // const NetworkData = await SmartContract.networks[networkId];
            // eslint-disable-next-line eqeqeq
            
            
            // CONTRACT CONNECTION SECTION
            //if (networkId == 42161 || networkId == 4) {
            
            if (networkId == 80001 || networkId == 4) {
                const SmartContractObj = new web3.eth.Contract(
                    SmartContract.abi,
                    // eslint-disable-next-line eqeqeq
                    "0xceADb3331854b5B019f9F556A841b420febb11B5"
                );
                dispatch(
                    connectSuccess({
                        account: accounts[0],
                        smartContract: SmartContractObj,
                        web3: web3,
                    })
                );
                // Add listeners start
                window.ethereum.on("accountsChanged", (accounts) => {
                    dispatch(updateAccount(accounts[0]));
                });
                window.ethereum.on("chainChanged", () => {
                    window.location.reload();
                });
                // Add listeners end
                return Promise.resolve();
            } else {
                window.ethereum.sendAsync({
                    id: 1,
                    jsonrcp: "2.0",
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: "0x13881",
                        chainName: "Mumbai Testnet",
                        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                        blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                    }]
                    //params: [{
                    //    chainId: "0xA4B1",
                    //    chainName: "Arbitrum One",
                    //    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                    //    blockExplorerUrls: ["https://arbiscan.io/"]
                    //}]
                });
                dispatch(connectFailed("Switch network to Arbitrum One."));
                return Promise.reject();
            }
        } catch (err) {
            dispatch(connectFailed("Something went wrong."));
            return Promise.reject();
        }
    };
};

export const updateAccount = (account) => {
    return async (dispatch) => {
        dispatch(updateAccountRequest({
            account: account
        }));
        dispatch(fetchData(account));
    };
};