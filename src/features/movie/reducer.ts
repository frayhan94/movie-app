/* eslint-disable @typescript-eslint/default-param-last */

import {
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
} from './actionTypes'
import IMovieState from '../../interfaces/states'
import BaseStateDefault from '../../interfaces/states/default'

const initialState: IMovieState = {
  ...BaseStateDefault,
}

export default (state = initialState, action: any): IMovieState => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        requesting: true,
      }
    case GET_MOVIE_SUCCESS:
      return {
        requesting: false,
        list: action.payload,
      }
    case GET_MOVIE_FAILURE:
      return {
        requesting: false,
      }
    default:
      return state
  }
}
