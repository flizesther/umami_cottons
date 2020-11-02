import { Category } from "../domain/Category";
import { Fabric } from "../domain/Fabric";
import { Media } from "../domain/Media";
import { Pack } from "../domain/Pack";
import { Product } from "../domain/Product";
import { Size } from "../domain/Size";
import { Stock } from "../domain/Stock";
import { User } from "../domain/User";

export const Factory = {

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