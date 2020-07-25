import functions from './functions'

const { total, isNull, checkValue, createUser, totalCallBack, fetchUser } = functions

describe('Function Example test', () => {
  test('Total function should work as expeced', () => {
    const input = [1, 2]
    const output = 3

    expect(total(input[0], input[1])).toEqual(output)
  })

  test('isNull function should work as expected', () => {
    expect(isNull()).toBeNull()
  })

  test('checkValue function should work as expected', () => {
    const input = 2
    const output = 2

    expect(checkValue(input)).toEqual(output)
  })

  test('createUser function should work as expected', () => {
    const user = { firstName: 'Nordic' }
    user['lastName'] = 'Coder'

    expect(createUser()).toEqual(user)
  })

  const cb = (num: number) => num + num

  test('totalCallBack function should work as expected', () => {
    const input = 3
    const output = 6

    expect(totalCallBack(input, cb)).toEqual(output)
  })

  test('fetchUser function should work as expected', async () => {
    const res = await fetch('https://min-shop.herokuapp.com/rest/product/25981755')
    const output = res.json() 

    expect(fetchUser()).toEqual(output)
  })
})
