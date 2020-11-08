module.exports = class Category {
  constructor({ code = '', name = '' }) {
    this.code = code
    this.name = name
  }

  toJSON() {
    const { code, name } = this
    return { code, name }
  }
}
