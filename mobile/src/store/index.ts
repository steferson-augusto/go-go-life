import { createStore, Store } from 'redux'

import rootReducer from './ducks/rootReducers'
import { PagesState } from './ducks/pages/types'

export interface AplicationState {
  pages: PagesState
}

const store: Store<AplicationState> = createStore(rootReducer)

export default store
