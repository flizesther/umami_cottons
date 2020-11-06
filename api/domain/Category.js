module.exports = class Category {

    constructor({ code = '', name = '' }) {
        this.code = code;
        this.name = name;
    }

    toJSON() {
        let { code, name } = this;
        return { code, name };
    }
}