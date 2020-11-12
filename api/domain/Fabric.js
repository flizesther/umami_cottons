module.exports = class Fabric {
  constructor({ code = '', name = '', image = '', categories = [], stock = [] }) {
    this.code = code
    this.name = name
    this.image = image
    this.categories = categories
    this.stock = stock
  }

  toJSON() {
    const { code, name, image, categories, stock } = this
    return { code, name, image, categories, stock }
  }
}
