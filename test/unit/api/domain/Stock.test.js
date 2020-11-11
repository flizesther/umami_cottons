import Stock from '@/api/domain/Stock'

describe('Stock', () => {
  it('new', () => {
    const result = new Stock({ product: '', stock: '' })

    expect(result).toEqual({ product: '', stock: '' })
  })

  it('to json', () => {
    const expected = { product: 'product', stock: 'stock' }

    const stock = new Stock(expected)
    const result = stock.toJSON()

    expect(result).toEqual(expected)
  })
})
