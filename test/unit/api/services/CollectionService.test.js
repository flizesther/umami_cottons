import BaseService from '~/api/services/BaseService'
import CollectionService from '~/api/services/CollectionService'

const collection = {
  path: 'product',
  data: {
    code: 'test-1',
    name: 'Test 1',
  },
}

describe('BackupService success', () => {
  let http
  let service

  beforeEach(() => {
    http = {
      get: jest.fn((url, data) => {
        return {
          status: 200,
          data: {},
        }
      }),
    }

    service = new CollectionService(http, { url: 'url' })
  })

  it('new', () => {
    expect(service).toBeInstanceOf(CollectionService)
    expect(service.httpService).toBeInstanceOf(BaseService)
  })

  it('getAll', async () => {
    const url = 'url/' + collection.path + '.json'
    const expected = {
      status: 200,
      data: {},
    }

    const result = await service.getAll(collection.path)

    expect(http.get).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })

  it('get', () => {
    expect(null).toEqual('Not implement')
  })

  it('create', () => {
    expect(null).toEqual('Not implement')
  })

  it('update', () => {
    expect(null).toEqual('Not implement')
  })

  it('delete', () => {
    expect(null).toEqual('Not implement')
  })
})

describe('CollectionService error', () => {
  let http
  let service

  it('server response exception', async () => {
    function ServerResponseException() {
      return {
        response: {
          status: 400,
          data: {
            error: 'ERROR',
          },
        },
      }
    }

    http = {
      get: jest.fn((url) => {
        throw ServerResponseException()
      }),
    }

    service = new CollectionService(http, { url: 'url' })

    const result = await service.getAll(collection.path)

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
      get: jest.fn((url) => {
        throw EmtpyDataServerResponseException()
      }),
    }

    service = new CollectionService(http, { url: 'url' })

    const result = await service.getAll(collection.path)
    expect(result).toEqual({
      status: 404,
      error: {
        code: 404,
        message: 'Error',
      },
    })
  })
})
