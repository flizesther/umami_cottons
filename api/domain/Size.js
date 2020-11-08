module.exports = class Size {
  constructor({ size = '', price = '' }) {
    this.size = size
    this.price = price
  }

  toJSON() {
    const { size, price } = this
    return { size, price }
  }
}
