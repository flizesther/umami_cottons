import Size from '@/api/domain/Size'

describe('Size', () => {
  it('new', () => {
    const result = new Size({})

    expect(result).toEqual({ size: '', price: '' })
  })

  it('to json', () => {
    const expected = { size: 'size', price: 'price' }

    const size = new Size(expected)
    const result = size.toJSON()

    expect(result).toEqual(expected)
  })
})
