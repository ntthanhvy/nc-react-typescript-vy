import { baseUrl } from '../common/urlHelper'

export const queryData = async (path) => {
  const res = await fetch(baseUrl + path)
  const data = await res.json()

  return data
}
