import {useEffect, useState} from "react";
import "./App.css";
import {ethers} from "ethers";
import write from "./utils/write.json";

// 1. need to authorize admin address and give an access to admin page
// 2. need to seperate components (nav-bar or etc...)

// adding the contract address for writing
const writeYourComment = "";

const App = () => {
    const [currentAccount, setCurrentAccount] = useState("");
    // useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.text())
    //         .then(setGreeting);
    // }, []);

    //confirm the wallet connected
    const ifWalletIsConnected = async () => {
        const {ethereum} = window;
        if (!ethereum) {
            console.log("make sure you got the metamask!");
        } else {
            console.log("we have the ethereum object", ethereum);
        }

        //getting the account information
        const accounts = await ethereum.request({method: "eth_accounts"});
        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Your authorized account is here", account);
            setCurrentAccount(account);
            setupEventListener();
        } else {
            console.log("There's no authorized account");
        }
    };

    //make connection
    const connectWallet = async () => {
        try {
            const {ethereum} = window;
            if (!ethereum) {
                alert("Get metamask!");
                return;
            }
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            console.log("connected", accounts[0]);
            setCurrentAccount(accounts[0]);
            setupEventListener();
        } catch (error) {
            console.log(error);
        }
    };

    //write and then transaction working for first smart contract...
    //it must be edited
    const setupEventListener = async () => {
        try {
            const {ethereum} = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(writeYourComment, write.abi, signer);
            }
        } catch (error) {}
    };

    //

    useEffect(() => {
        ifWalletIsConnected();
    }, []);

    return <div className="App">//need to make</div>;
};

export default App;
