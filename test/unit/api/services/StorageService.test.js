import StorageService from '~/api/services/StorageService'

describe('StorageService success', () => {
  let service

  beforeEach(() => {
    service = new StorageService({})
  })

  it('new', () => {
    expect(service).toBeInstanceOf(StorageService)
  })

  it('getFile', () => {
    expect(null).toEqual('Not implement')
  })

  it('getAll', () => {
    expect(null).toEqual('Not implement')
  })

  it('get', () => {
    expect(null).toEqual('Not implement')
  })
})

describe('StorageService error', () => {})
