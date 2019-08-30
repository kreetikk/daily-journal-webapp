import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
    journalReducer: {
        journals: [
            {
              title: 'My first journal',
              content: 'This is my first journal',
              createdAt: '2019-08-26T01:24:08.440Z',
              updatedAt: '2019-08-26T01:24:08.440Z',
              isDeleted: false,
              id: 1,
            },
            {
              title: 'My second journal',
              content: 'This is my second journal',
              createdAt: '2019-08-27T01:25:34.072Z',
              updatedAt: '2019-08-27T01:25:34.072Z',
              isDeleted: false,
              id: 2,
            },
          ]
    }
}

export default createStore(rootReducer, initialState)