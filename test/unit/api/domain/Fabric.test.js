import Fabric from '@/api/domain/Fabric'

describe('Fabric', () => {
  it('new', () => {
    const result = new Fabric({})

    expect(result).toEqual({
      code: '',
      name: '',
      image: '',
      categories: [],
      stock: [],
    })
  })

  it('to json', () => {
    const expected = {
      code: 'code',
      name: 'name',
      image: 'image',
      categories: [],
      stock: [],
    }

    const fabric = new Fabric(expected)
    const result = fabric.toJSON()

    expect(result).toEqual(expected)
  })
})
