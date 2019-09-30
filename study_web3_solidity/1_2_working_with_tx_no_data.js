/**
 * @author Ksu <ksu.zhytomirsky@gmail.com>
 * @example for https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#sendtransaction
 **/

const ADDRESS       = '0xcb133e23A3461984aB4d6F48AcB6d3bf2aD61Ad2'
const FROM_ADDRESS  = '0xf5c8dBA15398eF76d729119541A21C707bb929b8'
const FROM_KEY      = '0xdce0ecf2b36759f68761e5a21dfa124b06d03aeda52cb5968139689432f9a1aa'

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/e69df96932bd4e9db7451fab8d6e0c85`))

async function main() {
    const txsCount = await web3.eth.getTransactionCount(FROM_ADDRESS)
    console.log(txsCount)

    const balance = await web3.eth.getBalance(FROM_ADDRESS)
    console.log(balance)

    const lastBlock = await web3.eth.getBlock('latest', true)
    console.log(lastBlock)

    const txData = {
        from: FROM_ADDRESS,
        to: ADDRESS,
        gasPrice: '5000000000',
        gas: 21000,
        value: 20
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
