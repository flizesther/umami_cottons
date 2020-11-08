import { shallowMount } from '@vue/test-utils'
import DebugData from '@/components/cms/DebugData'

describe('Debug Data', () => {
  const data = 'data example'

  const wrapper = shallowMount(DebugData, {
    mocks: {
      $store: {
        state: {
          cms: {
            debug: true,
          },
        },
      },
    },
    propsData: {
      data,
    },
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('show prop data with debug true', () => {
    expect(wrapper.props('data')).toBe(data)

    const pre = wrapper.find('pre')
    expect(pre.text()).toBe(data)
  })

  it('not show prop data with debug false', () => {
    expect(wrapper.props('data')).toBe(data)

    const pre = wrapper.find('pre')
    expect(pre.text()).toBe(data)
  })
})
