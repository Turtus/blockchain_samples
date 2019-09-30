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

const ADDRESS       = '0x87e3d62ba2ab67f52cc2c5d218413a883e1b854d'

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
    const code = await token.methods.code().call()
    console.log(code)

}

main()
