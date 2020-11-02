export class Media {

    constructor({ url = '', alt = '' }) {
        this.url = url;
        this.alt = alt;
    }

    toJSON() {
        let { url, alt } = this;
        return { url, alt };
    }
}