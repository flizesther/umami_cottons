module.exports =  class Pack {

    constructor({ code = '', name = '', mainImage = '', gallery = [], mainDescription = '', descriptions = [], products = [], price = '' }) {
        this.code = code;
        this.name = name;
        this.gallery = gallery;
        this.mainImage = mainImage;
        this.mainDescription = mainDescription;
        this.descriptions = descriptions;
        this.products = products;
        this.price = price;
    }

    toJSON() {
        let { code, name, mainImage, gallery, mainDescription, descriptions, products, price } = this;
        return { code, name, mainImage, gallery, mainDescription, descriptions, products, price };
    }
}