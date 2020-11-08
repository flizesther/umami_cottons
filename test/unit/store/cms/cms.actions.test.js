import { actions } from '@/store/cms.js'

describe('debug', () => {
  it('enable debug', () => {
    const commit = jest.fn()

    actions.debug({ commit }, true)

    expect(commit).toHaveBeenCalledWith('setDebug', true)
  })
})
