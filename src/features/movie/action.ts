import api from './api'
import IParameter from '../../interfaces/models/parameter'
import { AnyAction, Dispatch } from 'redux'
import { actionTypes } from '../../features/movie'
const GetListAction = (params?: IParameter) => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIE_REQUEST, payload: '' })
    await api.GetList(params)
    dispatch({ type: actionTypes.GET_MOVIE_SUCCESS, payload: [] })
  } catch (e) {
    dispatch({ type: actionTypes.GET_MOVIE_FAILURE, payload: '' })
  }
}
export default {
  GetListAction,
}
