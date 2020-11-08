import Pack from '@/api/domain/Pack'

describe('Pack', () => {
  it('new', () => {
    const expected = {
      code: '',
      name: '',
      mainImage: '',
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
      mainImage: 'mainImage',
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
