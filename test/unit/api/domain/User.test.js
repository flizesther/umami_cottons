import User from '@/api/domain/User'

describe('User', () => {
  it('new', () => {
    const result = new User({})

    expect(result).toEqual({ name: '', email: '', token: '' })
  })

  it('to json', () => {
    const expected = { name: 'name', email: 'email', token: 'token' }

    const user = new User(expected)
    const result = user.toJSON()

    expect(result).toEqual(expected)
  })
})
