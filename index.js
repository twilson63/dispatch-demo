import Arweave from 'https://esm.sh/arweave'

const arweave = Arweave.init({})

document.querySelector('form').addEventListener('submit', async e => {
  e.preventDefault()

  // send text to arweave
  console.log(e.target.textInput.value)
  e.target.reset()
})