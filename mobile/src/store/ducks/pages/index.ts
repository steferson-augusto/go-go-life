import { Reducer } from 'redux'
import { PagesState, PagesTypes } from './types'

const INITIAL_STATE: PagesState = {
  data: [],
  error: false,
  loading: false
}

const reducer: Reducer<PagesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PagesTypes.LOAD_REQUEST:
      return {  ...state, loading: true }
    case PagesTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload }
    case PagesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] }
    default:
      return state
  }
}

export default reducer
