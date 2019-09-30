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
const ADDRESS  = '0x188253a6227a1526c9e0678b28842ed778cecea9'

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/e69df96932bd4e9db7451fab8d6e0c85`))

async function main() {
    const logs = await web3.eth.getPastLogs({fromBlock: '0x0', address: ADDRESS})
    console.log(logs)
}

main()
