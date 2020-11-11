import Product from '@/api/domain/Product'
import Media from '@/api/domain/Media'
import Size from '~/api/domain/Size'

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
      gallery: [new Media({})],
      mainDescription: 'mainDescription',
      descriptions: ['description'],
      fabrics: ['fabric'],
      sizes: [new Size({})],
    }

    const product = new Product(expected)
    const result = product.toJSON()

    expect(result).toEqual(expected)
  })
})
