const Liquid = require('liquid')

class Tag extends Liquid.Tag {
  render () {
    return '</style>'
  }
}

module.exports = Tag
