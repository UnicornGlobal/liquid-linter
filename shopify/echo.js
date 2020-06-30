const Liquid = require('liquid')

class Tag extends Liquid.Tag {
  // Dummy because we're not rendering we're just checking presence
  render () {
    return ''
  }
}

module.exports = Tag
