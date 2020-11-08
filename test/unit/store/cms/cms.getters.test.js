import { getters } from '@/store/cms.js'

const collections = {
  product: {},
}

const state = { collections }

describe('collections', () => {
  it('returns collections', () => {
    const result = getters.collections(state)

    expect(result).toEqual(collections)
  })
})
