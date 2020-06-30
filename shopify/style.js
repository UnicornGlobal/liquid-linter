const Liquid = require('liquid')

class StyleTag extends Liquid.Tag {
  render () {
    return '<style>'
  }
}

module.exports = StyleTag
