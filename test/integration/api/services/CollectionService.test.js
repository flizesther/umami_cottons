import axios from 'axios'
import CollectionService from '~/api/services/CollectionService'
require('dotenv').config()

const config = {
  API_URL: process.env.API_URL,
}

const service = new CollectionService(axios, {
  url: config.API_URL + '/test',
})

const collection = {
  path: 'product',
  data: {
    code: 'test-1',
    name: 'Test 1',
  },
}

describe('CollectionService success', () => {
  it('create', async () => {
    const expected = {
      status: 200,
      data: {
        code: collection.data.code,
      },
    }

    const result = await service.create(collection.path, collection.data)

    expect(result).toHaveProperty('status', expected.status)
    expect(result).toHaveProperty('data.code', expected.data.code)
  })

  it('get all', async () => {
    const expected = {
      status: 200,
      data: {},
    }

    const result = await service.getAll(collection.path)

    // expect(result).toEqual({})
    // expect(result.data).toMatchObject(undefined)
    expect(result).toHaveProperty('status', expected.status)
    expect(result.data).toMatchObject(expected.data)
  })

  it('get', async () => {
    const expected = {
      status: 200,
      data: {},
    }

    const result = await service.get(collection.path, collection.data.code)

    // expect(result).toEqual({})
    // expect(result.data).toMatchObject(undefined)
    expect(result).toHaveProperty('status', expected.status)
    expect(result.data).toMatchObject(expected.data)
  })

  it('update', async () => {
    const data = {
      ...collection.data,
      name: 'Test Updated',
    }
    const expected = {
      status: 200,
      data: {
        code: data.code,
        name: data.name,
      },
    }

    const result = await service.update(collection.path, data)

    expect(result).toHaveProperty('status', expected.status)
    expect(result).toHaveProperty('data.code', expected.data.code)
    expect(result).toHaveProperty('data.name', expected.data.name)
  })

  it('delete', async () => {
    const expected = {
      status: 200,
      data: {
        code: collection.data.code,
      },
    }

    const result = await service.delete(collection.path, collection.data.code)

    expect(result).toHaveProperty('status', expected.status)
    expect(result).toHaveProperty('data.code', expected.data.code)
  })
})

describe('CollectionService error', () => {
  it('get with path not found', async () => {
    const path = '/path-not-found'
    const expected = {
      status: 404,
      error: {
        code: 404,
        message: 'Not found',
      },
    }

    const result = await service.getAll(path)

    expect(result).toEqual(expected)
  })

  it('get with invalid path', async () => {
    const service = new CollectionService(axios, {
      url: config.API_URL + '/invalid-path',
    })

    const path = collection.path
    const expected = {
      status: 401,
      error: {
        code: 401,
        message: 'Permission denied',
      },
    }

    const result = await service.getAll(path)

    expect(result).toEqual(expected)
  })

  it('delete with invalid code with valid path, return status 200', async () => {
    const code = 'invalid-code'
    const expected = {
      status: 200,
      data: {
        code,
      },
    }

    const result = await service.delete(collection.path, code)

    expect(result).toEqual(expected)
  })

  it('delete with invalid path', async () => {
    const service = new CollectionService(axios, {
      url: config.API_URL + '/invalid-path',
    })

    const path = collection.path
    const code = collection.data.code
    const expected = {
      status: 401,
      error: {
        code: 401,
        message: 'Permission denied',
      },
    }

    const result = await service.delete(path, code)

    expect(result).toEqual(expected)
  })
})
