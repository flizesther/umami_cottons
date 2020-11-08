import Product from '@/api/domain/Product'
import Media from '@/api/domain/Media'

describe('Product', () => {
  it('new', () => {
    const expected = {
      code: '',
      name: '',
      mainImage: new Media({}),
      gallery: [],
      mainDescription: '',
      descriptions: [],
      fabrics: [],
      sizes: [],
    }

    const result = new Product({})

    expect(result).toEqual(expected)
  })

  it('to json', () => {
    const expected = {
      code: 'code',
      name: 'name',
      mainImage: new Media({}),
      gallery: [],
      mainDescription: 'mainDescription',
      descriptions: [],
      fabrics: [],
      sizes: [],
    }

    const product = new Product(expected)
    const result = product.toJSON()

    expect(result).toEqual(expected)
  })
})
