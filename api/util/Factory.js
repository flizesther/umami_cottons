const Category = require('../domain/Category')
const Fabric = require('../domain/Fabric')
const Media = require('../domain/Media')
const Pack = require('../domain/Pack')
const Product = require('../domain/Product')
const Size = require('../domain/Size')
const Stock = require('../domain/Stock')
const User = require('../domain/User')

module.exports = {
  new(domain, data) {
    return this[domain](data)
  },

  category(data) {
    return new Category(data)
  },

  fabric(data) {
    return new Fabric(data)
  },

  media(data) {
    return new Media(data)
  },

  pack(data) {
    return new Pack(data)
  },

  product(data) {
    return new Product(data)
  },

  size(data) {
    return new Size(data)
  },

  stock(data) {
    return new Stock(data)
  },

  user(data) {
    return new User(data)
  },
}
