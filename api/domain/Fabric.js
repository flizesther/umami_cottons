export class Fabric {

    constructor({ code = '', name = '', image = '', categories = [], stock = [] }) {
        this.code = code;
        this.name = name;
        this.image = image;
        this.categories = categories;
        this.stock = stock;
    }

    toJSON() {
        let { code, name, image, categories, stock } = this;
        return { code, name, image, categories, stock };
    }
}