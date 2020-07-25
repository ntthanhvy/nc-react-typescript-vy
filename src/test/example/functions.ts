const functions = {
  total: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Nordic' }
    user['lastName'] = 'Coder'
    return user
  },
  totalCallBack: (num1, cb) => cb(num1),
  fetchUser: () =>
    fetch('https://min-shop.herokuapp.com/rest/product/25981755')
      .then((res) => res.json())
      .then((res) => res.data)
      .catch(() => 'error'),
}

export default functions
