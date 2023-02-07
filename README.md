# Posting Transactions (dispatch)

This is a vanilla html app that posts transactions to the permaweb.

We will use arconnect browser extension for our wallet and we will use arweave-js as our library to create a transaction.

Dispatch is a feature of arweave wallets to send gasless transactions to arweave.

index.js

```js
// connect to wallet
await arweaveWallet.connect(['SIGN_TRANSACTION', 'DISPATCH'])

// create a transaction
const tx = await arweave.createTransaction({ data: e.target.textInput.value })
tx.addTag('Content-Type', 'text/plain')
const result = await arweaveWallet.dispatch(tx)
console.log(result)

```