import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import journalSaga from './saga/journal'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(journalSaga)

export default store