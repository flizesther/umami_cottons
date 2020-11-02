export class User {

    constructor({ name = '', email = '', token = '' }) {
        this.name = name;
        this.email = email;
        this.token = token;
    }

    isAuth() {
        return this.token != '';
    }

    toJSON() {
        let { name, email, token } = this;
        return { name, email, token };
    }
}