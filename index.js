import Arweave from 'https://esm.sh/arweave'

const arweave = Arweave.init({})

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()
  // connect to wallet
  // send text to arweave
})