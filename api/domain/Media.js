module.exports =  class Media {

    constructor({ code = '', url = '', alt = '' }) {
        this.code = code;
        this.url = url;
        this.alt = alt;
    }

    toJSON() {
        let { code, url, alt } = this;
        return { code, url, alt };
    }
}