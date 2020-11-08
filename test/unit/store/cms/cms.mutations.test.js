import { mutations } from '@/store/cms.js'

describe('debug', () => {
  it('change value', () => {
    const state = {
      debug: false,
    }

    mutations.setDebug(state, true)

    expect(state).toEqual({
      debug: true,
    })
  })
})
