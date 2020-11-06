const Category = require('../domain/Category');
const Fabric = require('../domain/Fabric');
const Media = require('../domain/Media');
const Pack = require('../domain/Pack');
const Product = require('../domain/Product');
const Size = require('../domain/Size');
const Stock = require('../domain/Stock');
const User = require('../domain/User');

module.exports = {

    new: function(domain, data) {
        return this[domain](data)
    },

    category: function(data) {
        return new Category(data)
    },

    fabric: function(data) {
        return new Fabric(data)
    },

    media: function(data) {
        return new Media(data)
    },

    pack: function(data) {
        return new Pack(data)
    },

    product: function(data) {
        return new Product(data)
    },

    size: function(data) {
        return new Size(data)
    },

    stock: function(data) {
        return new Stock(data)
    },

    user: function(data) {
        return new User(data)
    }

}