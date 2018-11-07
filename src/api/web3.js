import Web3 from 'web3'

let web3

async function getWeb3() {
    if (!web3) {
        // Check if Web3 has been injected by MetaMask
        if (window.web3 && window.web3.currentProvider) {
            web3 = new Web3(window.web3.currentProvider)
        } else {
            console.log(
                'No web3 instance injected from Metamask'
            )
        }
    }

    return web3
}

export default getWeb3