import Fabric from '@/api/domain/Fabric'
import Stock from '~/api/domain/Stock'

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
      categories: ['category'],
      stock: [new Stock({})],
    }

    const fabric = new Fabric(expected)
    const result = fabric.toJSON()

    expect(result).toEqual(expected)
  })
})
