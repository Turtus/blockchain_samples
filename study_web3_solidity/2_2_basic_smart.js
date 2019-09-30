/**
 * @author Ksu <ksu.zhytomirsky@gmail.com>
 * @example for https://remix.ethereum.org/
 *

 pragma solidity >=0.4.0 <0.6.0;
 contract TestContract {
    bytes32 public code = '';
    function setCode(bytes32 _code) public returns (bool) {
        code = _code;
        return true;
    }
 }

 https://ropsten.etherscan.io/tx/0xa18dc9bf30a698958920d91151b51da3e0f13974396d663fadeae26111398eb1

 https://ropsten.etherscan.io/address/0x87e3d62ba2ab67f52cc2c5d218413a883e1b854d

 **/

const ADDRESS              = '0x87e3d62ba2ab67f52cc2c5d218413a883e1b854d'
const ADDRESS_ALMOST_SAME  = '0x188253a6227a1526c9e0678b28842ed778cecea9'

const FROM_ADDRESS  = '0xf5c8dBA15398eF76d729119541A21C707bb929b8'
const FROM_KEY      = '0xdce0ecf2b36759f68761e5a21dfa124b06d03aeda52cb5968139689432f9a1aa'

const ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "code",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_code",
                "type": "bytes32"
            }
        ],
        "name": "setCode",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/e69df96932bd4e9db7451fab8d6e0c85`))

async function main() {

    const token = new web3.eth.Contract(ABI, ADDRESS)
    const gas = await token.methods.setCode(web3.utils.utf8ToHex('some code')).estimateGas({ from: FROM_ADDRESS })
    const data = await token.methods.setCode(web3.utils.utf8ToHex('some code')).encodeABI()

    const txData = {
        from: FROM_ADDRESS,
        to: ADDRESS,
        gasPrice: '5000000000',
        gas: gas,
        value: 0,
        data: data
    }
    const signData = await web3.eth.accounts.signTransaction(txData, FROM_KEY)
    console.log(signData)

    const newData = await new Promise((resolve, reject) => {
        return web3.eth.sendSignedTransaction(signData.rawTransaction)
            .on('transactionHash', (hash) => {
                resolve({ hash })
            })
            .on('error', (e) => {
                console.log(e.message)
                reject(e)
            })
    })
    console.log(newData)
}

main()
