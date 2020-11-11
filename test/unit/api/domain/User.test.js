import User from '@/api/domain/User'

describe('User', () => {
  it('new', () => {
    const result = new User({})

    expect(result).toEqual({ name: '', email: '', token: '' })
  })

  it('is auth', () => {
    const data = { token: 'token' }

    const user = new User(data)
    const result = user.isAuth()

    expect(result).toBeTruthy()
  })

  it('is not auth', () => {
    const data = { token: '' }

    const user = new User(data)
    const result = user.isAuth()

    expect(result).toBeFalsy()
  })

  it('to json', () => {
    const expected = { name: 'name', email: 'email', token: 'token' }

    const user = new User(expected)
    const result = user.toJSON()

    expect(result).toEqual(expected)
  })
})
