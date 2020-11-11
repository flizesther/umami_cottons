import BaseService from '~/api/services/BaseService'
import BackupService from '~/api/services/BackupService'

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

    service = new BackupService(http, { url: 'url' })
  })

  it('new', () => {
    expect(service).toBeInstanceOf(BackupService)
    expect(service.httpService).toBeInstanceOf(BaseService)
  })

  it('all', async () => {
    const url = 'url/product.json'
    const expected = {
      status: 200,
      data: {},
    }

    const result = await service.all()

    expect(http.get).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })
})
