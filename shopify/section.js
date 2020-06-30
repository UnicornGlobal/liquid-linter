const Liquid = require('liquid')

class Block extends Liquid.Block {
  // Dummy because we're not rendering we're just checking presence
  render () {
    return ''
  }
}

module.exports = Block
