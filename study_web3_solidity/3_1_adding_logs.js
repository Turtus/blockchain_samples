/**
 * @author Ksu <ksu.zhytomirsky@gmail.com>
 * @example for https://remix.ethereum.org/
 *

 pragma solidity >=0.4.0 <0.6.0;
 contract TestContract {
    bytes32 public code = '';

    event LogSetCode(address sender, bytes32 code);

    function setCode(bytes32 _code) public returns (bool) {
        code = _code;
        emit LogSetCode(msg.sender, _code);
        return true;
    }
 }

 https://ropsten.etherscan.io/tx/0x1a1264d82bf04fd5b37482f9136fb935a090b7749807980f5d2eab955531db82

 https://ropsten.etherscan.io/address/0x188253a6227a1526c9e0678b28842ed778cecea9

**/
const FROM_ADDRESS  = '0xf5c8dBA15398eF76d729119541A21C707bb929b8'
const FROM_KEY      = '0xdce0ecf2b36759f68761e5a21dfa124b06d03aeda52cb5968139689432f9a1aa'

const BYTECODE = {
    "linkReferences": {},
    "object": "60806040526000805534801561001457600080fd5b50610157806100246000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806324c12bf61461003b578063b9ef767f14610059575b600080fd5b61004361009f565b6040518082815260200191505060405180910390f35b6100856004803603602081101561006f57600080fd5b81019080803590602001909291905050506100a5565b604051808215151515815260200191505060405180910390f35b60005481565b6000816000819055507f90747a0143fb36379f030f41ff6828b61a75fbf91868852e36cd2acd91b88a083383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001905091905056fea265627a7a72315820ffe20d463d8c2f3a583c88d79d545776548584f6f17875a1f8c9611af894f0b764736f6c634300050b0032",
    "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 SSTORE CALLVALUE DUP1 ISZERO PUSH2 0x14 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x157 DUP1 PUSH2 0x24 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x24C12BF6 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xB9EF767F EQ PUSH2 0x59 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x43 PUSH2 0x9F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x85 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x6F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xA5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 DUP2 SWAP1 SSTORE POP PUSH32 0x90747A0143FB36379F030F41FF6828B61A75FBF91868852E36CD2ACD91B88A08 CALLER DUP4 PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 PUSH1 0x1 SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH6 0x627A7A723158 KECCAK256 SELFDESTRUCT 0xe2 0xd 0x46 RETURNDATASIZE DUP13 0x2f GASPRICE PC EXTCODECOPY DUP9 0xd7 SWAP14 SLOAD JUMPI PUSH23 0x548584F6F17875A1F8C9611AF894F0B764736F6C634300 SDIV SIGNEXTEND STOP ORIGIN ",
    "sourceMap": "35:277:0:-;;;64:24;;;35:277;8:9:-1;5:2;;;30:1;27;20:12;5:2;35:277:0;;;;;;;"
}

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
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "code",
                "type": "bytes32"
            }
        ],
        "name": "LogSetCode",
        "type": "event"
    }
]

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/e69df96932bd4e9db7451fab8d6e0c85`))

async function main() {
    const txData = {
        from: FROM_ADDRESS,
        gasPrice: '5000000000',
        gas: 2200000,
        value: 0,
        data : '0x' + BYTECODE.object
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
