const Media = require('./Media')

module.exports = class Product {
  constructor({
    code = '',
    name = '',
    mainImage = new Media({}),
    gallery = [],
    mainDescription = '',
    descriptions = [],
    fabrics = [],
    sizes = [],
  }) {
    this.code = code
    this.name = name
    this.gallery = gallery
    this.mainImage = mainImage
    this.mainDescription = mainDescription
    this.descriptions = descriptions
    this.fabrics = fabrics
    this.sizes = sizes
  }

  toJSON() {
    const { code, name, mainImage, gallery, mainDescription, descriptions, fabrics, sizes } = this
    return {
      code,
      name,
      mainImage,
      gallery,
      mainDescription,
      descriptions,
      fabrics,
      sizes,
    }
  }
}
