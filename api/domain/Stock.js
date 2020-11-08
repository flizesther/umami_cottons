module.exports = class Stock {
  constructor({ product = '', stock = '' }) {
    this.product = product
    this.stock = stock
  }

  toJSON() {
    const { product, stock } = this
    return { product, stock }
  }
}
