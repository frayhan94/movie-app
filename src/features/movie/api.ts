import IParameter from '../../interfaces/models/parameter'
import { transformObjToQuery } from '../../utils'

const GetList = async (param?: Partial<IParameter>): Promise<any> => {
  const query = transformObjToQuery({
    ...(param?.start
      ? {
          _start: param?.start,
        }
      : {}),
    ...(param?.limit
      ? {
          _limit: param?.limit,
        }
      : {}),
    ...(param?.search
      ? {
          title_like: param?.search,
        }
      : {}),
  })
  return fetch(`http://jsonplaceholder.typicode.com/photos${query}`).then(
    (response) => {
      if (response.ok) return response.json()
    }
  )
}

export default {
  GetList,
}
