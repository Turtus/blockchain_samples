const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/73c21b1f95ca4946886c78eac6bc1d11');
const { signTypedData } = require('@metamask/eth-sig-util')

const FROM_ADDRESS  = '0xYOUR_ADDRESS'
const FROM_KEY      = '0xYOUR_KEY_FOR_THIS_ADDRESS'

// https://ropsten.etherscan.io/address/0x60d60f6e884a12d83af6e1b22d70b08c420310cd#code
const CONTRACT_ADDRESS = '0x63eac3ec0d606efa7a17d77d50154636ff86b464'
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MESSAGE_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"checkPermitRecoverAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)

const signMessage = async ({value = 50}) => {
    const signer = FROM_ADDRESS
    const chainId = await web3.eth.getChainId()
    console.log('chainId', chainId)


    const msgParams = {
        types: {
            EIP712Domain:  [
                {name: "name", type: "string"},
                {name: "version", type: "string"},
                {name: "chainId", type: "uint256"},
            ],
            Data: [
                {name: "sender", type: "address"},
                {name: "value", type: "uint256"},
            ],
        },
        domain: {
            name: "SimpleStorage",
            version: "1",
            chainId: chainId,
        },
        primaryType: "Data",
        message: {
            sender: signer,
            value: value,
        },
    };
    console.log('msgParams', msgParams)

    const privateKey = Buffer.from(FROM_KEY.slice(2), 'hex')
    const signResult = await signTypedData({ privateKey, data: msgParams, version: 'V4'})
    console.log('signResult', signResult)

    const checked = await contract.methods.checkPermitRecoverAddress(signer, value, signResult).call()
    console.log('checkedAddress', checked)
    console.log('expectedAddress', FROM_ADDRESS)

}
signMessage({})
