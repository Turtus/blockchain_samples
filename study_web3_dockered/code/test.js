module.paths.push('/usr/lib/node_modules');

var fs = require('fs');

const contract_data = JSON.parse(
    fs.readFileSync('./libs/BlockSoftToken.json')
);
if (typeof(contract_data.abi) !== 'object') {
    throw new Error('not abi');
}

var real_address = "0x668b53A4399a9c5072170161AB6434Db6e0297Cc";
var real_private = "0bf2da805f4c5dcd8113cea5708f6a3b59b010581dcd2aaccc7542057908abc6";

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/2m0g6KR1H1ImBwBz2zVz"));
var from_test = web3.eth.accounts.privateKeyToAccount("0x" + real_private);
if (from_test.address != real_address) {
    console.log('wtf with private key ' + from_test.address + ' != ' + real_address);
    process.exit(1);
}
web3.eth.accounts.wallet.add("0x" + real_private);

var contract = new web3.eth.Contract(contract_data.abi);

contract.deploy({
    data: contract_data.unlinked_binary,
    arguments: []
}).send({
    from: real_address,
    gas: 1500000,
    gasPrice: '80000000'
}, function (error, transactionHash) {

}).on('error', function (error) {
    console.log('error', error);
}).on('transactionHash', function (transactionHash) {
    console.log('transactionHash', transactionHash);
}).on('receipt', function (receipt) {
    console.log('receipt', receipt.contractAddress);
}).on('confirmation', function (confirmationNumber, receipt) {
    console.log('confirmation', confirmationNumber);
}).then(function (new_contract) {
    console.log('Contract Deployed');
    console.log(new_contract.options.address);
    fs.writeFileSync('deployedContract.txt', new_contract.options.address);
});