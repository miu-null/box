import {useEffect, useState} from "react";
import "../src/styles/App.css";
// import {ethers} from "ethers";
// import write from "./utils/write.json";

// 1. authorize admin address and give an access to admin page
// 2. seperate components (nav-bar or etc...)
// 3. add event code
// 4. if the event succecfully ended, then BE will working
// 5. ?

// // add the contract address for writing
// const writeYourComment = "";

// // add the account address for admin
// const adminAccount = "";

const App = () => {
    const [greeting, setGreeting] = useState("");

    // const [currentAccount, setCurrentAccount] = useState("");
    // const [gasPrice, setGasPrice] = useState("");
    // const [estimateGas, setEstimateGas] = useState("");

    useEffect(() => {
        fetch("/api")
            .then((res) => res.text())
            .then(setGreeting);
    }, []);

    // //     //confirm the wallet connected
    // const ifWalletIsConnected = async () => {
    //     const {ethereum} = window;
    //     if (!ethereum) {
    //         console.log("make sure you got the metamask!");
    //     } else {
    //         console.log("we have the ethereum object", ethereum);
    //     }

    //     //getting the account information
    //     const accounts = await ethereum.request({method: "eth_accounts"});
    //     if (accounts.length !== 0) {
    //         const account = accounts[0];
    //         console.log("Your authorized account is here", account);
    //         setCurrentAccount(account);
    //         setupEventListener();
    //     } else {
    //         console.log("There's no authorized account");
    //     }
    // };

    // //make connection
    // const connectWallet = async () => {
    //     try {
    //         const {ethereum} = window;
    //         if (!ethereum) {
    //             alert("Get metamask!");
    //             return;
    //         }
    //         const accounts = await ethereum.request({method: "eth_requestAccounts"});
    //         console.log("connected", accounts[0]);
    //         setCurrentAccount(accounts[0]);
    //         setupEventListener();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // //write and then transaction working for first(write)smart contract...
    // //it must be edited
    // const setupEventListener = async () => {
    //     try {
    //         const {ethereum} = window;
    //         if (ethereum) {
    //             const provider = new ethers.BrowserProvider(window.ethereum);
    //             const signer = await provider.getSigner();

    //             const thisContract = new ethers.Contract(writeYourComment, write.abi, signer);

    //             thisContract.on("newComment", (from, tokenId) => {
    //                 console.log(from, tokenId.toNumber());
    //                 alert(`Thank you for comment`);
    //             });

    //             console.log("Setup Event Listener");
    //         } else {
    //             console.log("No Ethereum object");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const writeComment = async () => {
    //     try {
    //         const {ethereum} = window;
    //         if (ethereum) {
    //             const provider = new ethers.BrowserProvider(window.ethereum);
    //             // 제공자 초기화
    //             const signer = await provider.getSigner();
    //             // 서명자 초기화
    //             const address = await signer.getAddress();
    //             // 서명자 계정주소 가져오기
    //             const thisContract = new ethers.Contract(writeYourComment, write.abi, signer);
    //             // 컨트랙트 주소 가져오기
    //             const gasEstimate = await thisContract.estimateGas.createToken("tokenURI", {
    //                 from: address,
    //             });
    //             //    const gas = (await provider.getFeeData()).gasPrice;
    //             if (gas) {
    //                 const gasPriceInGwei = ethers.formatUnits(gasPrice, "gwei");
    //                 console.log(gasPriceInGwei);
    //                 const signer = await provider.getSigner();
    //                 const thisContract = new ethers.Contract(writeYourComment, write.abi, signer);

    //                 //  const estimatedGas = await web3.eth
    //                 //       console.log(estimateGas)
    //                 console.log("Going to pop wallet now to pay gas...");

    //                 // Estimate the gas price

    //                 const Gas = await thisContract.methods.estimateGas();
    //                 setGasPrice(Gas);
    //                 // const estimateGas = await connectedContract.makethisForYou().estimateGas();
    //                 // setGasPrice(estimateGas);
    //                 const gasLimit = Gas * 2;
    //                 // const overrides = {gasLimit};
    //                 console.log(ethers.formatUnits(gasPrice, "gwei"));
    //             } else {
    //                 console.log("Failed to estimate gas...");
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    //will be changed after
    // useEffect(() => {
    //     ifWalletIsConnected();
    // }, []);
    //     fetch("/api")
    //         .then((res) => res.text())
    //         .then(ifWalletIsConnected);

    //         const fetchData = async () => {
    //             await ifWalletIsConnected();
    //             const response = await fetch("/api");
    //             const data = await response.text();
    //             console.log(data);
    //         };

    //         fetchData();

    const renderNotConnectedContainer = () => (
        <button className="connect-wallet-button">Connect Wallet</button>
    );

    const renderWriteYourComment = () => (
        <button className="write-comment-button">Write your Comment</button>
    );

    //     return (
    //         <div className="App">
    //             //need to make
    //             <p></p>
    //
    //         </div>
    //     );

    // useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.text())
    //         .then(ifWalletIsConnected);
    // }, [ifWalletIsConnected]);

    // const renderNotConnectedContainer = () => (
    //     <button onClick={connectWallet} className="connect-wallet-button">
    //         Connect Wallet
    //     </button>
    // );

    // const renderWriteYourComment = () => (
    //     <button onClick={writeComment} className="write-comment-button">
    //         Write your Comment
    //     </button>
    // );

    return (
        <div className="App">
            <div id="container">
                {greeting}
                <br></br>
            </div>
            {renderNotConnectedContainer()}
            {renderWriteYourComment()}
        </div>
    );
};

export default App;
