module.exports = class User {
  constructor({ name = '', email = '', token = '' }) {
    this.name = name
    this.email = email
    this.token = token
  }

  isAuth() {
    return this.token !== ''
  }

  toJSON() {
    const { name, email, token } = this
    return { name, email, token }
  }
}
