import IMovieState from '../../interfaces/states'

export const getMovie = (state: { movie: IMovieState }) => state.movie
