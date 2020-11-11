import BaseService from '~/api/services/BaseService'

let http
let baseService

describe('BaseService success', () => {
  beforeEach(() => {
    http = {
      get: jest.fn((url) => {
        return {
          status: 200,
          data: 'data',
        }
      }),
      post: jest.fn((url, data) => {
        return {
          status: 200,
          data: 'data',
        }
      }),
      put: jest.fn((url, data) => {
        return {
          status: 200,
          data: 'data',
        }
      }),
      delete: jest.fn((url) => {
        return {
          status: 200,
          data: 'data',
        }
      }),
    }

    baseService = new BaseService(http)
  })

  it('new', () => {
    expect(baseService).toBeInstanceOf(BaseService)
  })

  it('get', async () => {
    const url = 'url'
    const expected = {
      status: 200,
      data: 'data',
    }

    const result = await baseService.get(url)

    expect(http.get).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })

  it('post', async () => {
    const url = 'url'
    const data = {}
    const expected = {
      status: 200,
      data: 'data',
    }

    const result = await baseService.post(url, data)

    expect(http.post).toHaveBeenCalledWith(url, data)
    expect(result).toEqual(expected)
  })

  it('put', async () => {
    const url = 'url'
    const data = {}
    const expected = {
      status: 200,
      data: 'data',
    }

    const result = await baseService.put(url, data)

    expect(http.put).toHaveBeenCalledWith(url, data)
    expect(result).toEqual(expected)
  })

  it('delete', async () => {
    const url = 'url'
    const expected = {
      status: 200,
      data: 'data',
    }

    const result = await baseService.delete(url)

    expect(http.delete).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })
})

describe('BaseService error', () => {
  it('empty exception', async () => {
    function EmptyException() {
      return {}
    }

    http = {
      get: jest.fn((url) => {
        throw EmptyException()
      }),
    }

    baseService = new BaseService(http)

    const get = await baseService.get('')

    expect(get).toEqual({
      status: 500,
      error: { code: 500, message: 'Error' },
    })
  })

  it('generic exception', async () => {
    function GenericException() {
      return {
        message: 'Generic Exception',
      }
    }

    http = {
      post: jest.fn((url) => {
        throw GenericException()
      }),
    }

    baseService = new BaseService(http)

    const result = await baseService.post('', {})

    expect(result).toEqual({
      status: 500,
      error: { code: 500, message: 'Generic Exception' },
    })
  })

  it('server response exception', async () => {
    function ServerResponseException() {
      return {
        response: {
          status: 404,
          data: 'Not found',
        },
      }
    }

    http = {
      put: jest.fn((url, data) => {
        throw ServerResponseException()
      }),
    }

    baseService = new BaseService(http)

    const result = await baseService.put('', {})

    expect(result).toEqual({
      status: 404,
      error: { code: 404, message: 'Not found' },
    })
  })

  it('server response data empty exception', async () => {
    function EmtpyDataServerResponseException() {
      return {
        response: {
          status: 404,
        },
      }
    }

    http = {
      delete: jest.fn((url) => {
        throw EmtpyDataServerResponseException()
      }),
    }

    baseService = new BaseService(http)

    const result = await baseService.delete('')

    expect(result).toEqual({
      status: 404,
      error: { code: 404, message: 'Error' },
    })
  })

  it('request exception', async () => {
    function RequestException() {
      return { request: {} }
    }

    http = {
      delete: jest.fn((url) => {
        throw RequestException()
      }),
    }

    baseService = new BaseService(http)

    const result = await baseService.delete('')

    expect(result).toEqual({
      status: 500,
      error: { code: 500, message: {} },
    })
  })
})
