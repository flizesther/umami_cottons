import Pack from '@/api/domain/Pack'
import Media from '@/api/domain/Media'

describe('Pack', () => {
  it('new', () => {
    const expected = {
      code: '',
      name: '',
      mainImage: new Media({}),
      gallery: [],
      mainDescription: '',
      descriptions: [],
      products: [],
      price: '',
    }

    const result = new Pack({})

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
      products: [],
      price: 'price',
    }

    const pack = new Pack(expected)
    const result = pack.toJSON()

    expect(result).toEqual(expected)
  })
})
