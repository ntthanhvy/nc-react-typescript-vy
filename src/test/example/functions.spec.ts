const functions = require('./functions')
const { total, isNull, checkValue, createUser, totalCallBack, fetchUser } = functions

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { name: 'Hi Tran' } }),
  })
)

describe('Function Example test', () => {
  test('Total function should work as expeced', () => {
    const input = [1, 2]
    const output = 3

    expect(total(input[0], input[1])).toBe(output)
  })

  test('isNull function should work as expected', () => {
    expect(isNull()).toBeNull()
  })

  test('checkValue function should work as expected', () => {
    const input = 2
    const output = 2

    expect(checkValue(input)).toBe(output)
  })

  test('createUser function should work as expected', () => {
    const user = { firstName: 'Nordic', lastName: 'Coder' }

    expect(createUser()).toEqual(user)
  })

  test('totalCallBack function should work as expected', () => {
    const input = 3
    const output = 6
    const cbMock = jest.fn()
    totalCallBack(1, cbMock)
    // expect(totalCallBack(input, cb)).toBe(output)
    // expect(totalCallBack(1, cbMock)).toEqual(cb(1))
    expect(cbMock).toHaveBeenCalled()

    cbMock.mockImplementation((a) => a)
    jest.mock('./functions.ts')
    const functions2 = require('./functions')
    // console.log(functions2)

    functions2.totalCallBack.mockImplementation((a, cb) => {
      return cb(a)
    })
    expect(functions2.totalCallBack(1, cbMock)).toBe(1)
  })

  test('fetchUser function should work as expected', async () => {
    const res = await fetch('https://min-shop.herokuapp.com/rest/product/25981755')
    const output = res.json()

    expect(fetchUser()).toEqual(output)
  })

  // test('Fetch user success', async () => {
  //   const res = await functions.fetchUser()
  //   expect(res).toEqual({ name: 'Hi Tran' })
  // })

  // test('fetchUser should work as expected', async () => {
  //   const mockFn = jest.fn().mockImplementation(fetchUser)
  //   mockFn();
  //   expect(mockFn).toHaveBeenCalled()
  // })

  test('fetchUser fails', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Async error')))
    const err = await functions.fetchUser()
    expect(err).toBe('error')
  })
})
