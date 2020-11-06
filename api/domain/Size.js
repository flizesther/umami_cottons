module.exports =  class Size {

    constructor({ size = '', price = '' }) {
        this.size = size;
        this.price = price;
    }

    toJSON() {
        let { size, price } = this;
        return { size, price };
    }
}