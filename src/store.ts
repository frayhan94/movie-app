import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { MovieReducer } from './features/movie'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  movie: MovieReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
