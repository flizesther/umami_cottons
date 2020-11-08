import Media from '@/api/domain/Media'

describe('Media', () => {
  it('new', () => {
    const result = new Media({})

    expect(result).toEqual({ code: '', url: '', alt: '' })
  })

  it('to json', () => {
    const expected = { code: 'code', url: 'url', alt: 'alt' }

    const media = new Media(expected)
    const result = media.toJSON()

    expect(result).toEqual(expected)
  })
})
