import AuthService from '~/api/services/AuthService'
import BaseService from '~/api/services/BaseService'

describe('AuthService success', () => {
  let http
  let authService

  beforeEach(() => {
    http = {
      post: jest.fn((url, data) => {
        return {
          status: 200,
          data: {
            email: 'email',
            displayName: 'name',
            idToken: 'token',
          },
        }
      }),
    }

    authService = new AuthService(http, { url: 'url', apiKey: 'apiKey' })
  })

  it('new', () => {
    expect(authService).toBeInstanceOf(AuthService)
    expect(authService.httpService).toBeInstanceOf(BaseService)
  })

  it('login', async () => {
    const url = 'url/accounts:signInWithPassword?key=apiKey'
    const data = {
      email: 'email',
      password: 'password',
    }
    const expected = {
      status: 200,
      data: {
        email: data.email,
        name: 'name',
        token: 'token',
      },
    }

    const result = await authService.login(data)

    expect(http.post).toHaveBeenCalledWith(url, data)
    expect(result).toEqual(expected)
  })

  it('profile', async () => {
    http = {
      post: jest.fn((url, data) => {
        return {
          status: 200,
          data: {
            users: [
              {
                email: 'email',
                displayName: 'name',
              },
            ],
          },
        }
      }),
    }

    authService = new AuthService(http, { url: 'url', apiKey: 'apiKey' })

    const url = 'url/accounts:lookup?key=apiKey'
    const data = {
      token: 'token',
    }
    const expected = {
      status: 200,
      data: {
        email: 'email',
        name: 'name',
      },
    }

    const result = await authService.profile(data)

    expect(http.post).toHaveBeenCalledWith(url, { idToken: data.token })
    expect(result).toEqual(expected)
  })
})

describe('AuthService error', () => {
  let http
  let authService

  it('server response exception', async () => {
    function ServerResponseException() {
      return {
        response: {
          status: 400,
          data: {
            error: {
              code: 400,
              message: 'ERROR',
            },
          },
        },
      }
    }

    http = {
      post: jest.fn((url, data) => {
        throw ServerResponseException()
      }),
    }

    authService = new AuthService(http, { url: 'url', apiKey: 'apiKey' })

    const data = {
      email: 'email',
      password: 'password',
    }

    const result = await authService.login(data)

    expect(result).toEqual({
      status: 400,
      error: {
        code: 400,
        message: 'ERROR',
      },
    })
  })

  it('empty data server response exception', async () => {
    function EmtpyDataServerResponseException() {
      return {
        response: {
          status: 404,
        },
      }
    }

    http = {
      post: jest.fn((url, data) => {
        throw EmtpyDataServerResponseException()
      }),
    }

    authService = new AuthService(http, { url: 'url', apiKey: 'apiKey' })

    const data = {
      token: 'token',
    }

    const result = await authService.profile(data)

    expect(result).toEqual({
      status: 404,
      error: {
        code: 404,
        message: 'Error',
      },
    })
  })
})
