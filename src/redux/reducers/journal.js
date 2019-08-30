import {ADD_JOURNAL, GET_JOURNAL, UPDATE_JOURNAL, DELETE_JOURNAL, GET_ALL_JOURNALS} from '../constants/journal'

const initialState = {
    journals: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_JOURNAL:
            return Object.assign({}, state, {
                journals: state.journals.concat(action.journal)
            })

        case GET_JOURNAL:
            return Object.assign({}, state, {
                journal: state.journals.find(x => x.id === +action.id)
            })
        case UPDATE_JOURNAL:
        case DELETE_JOURNAL:
        case GET_ALL_JOURNALS:
        default:
            return state    
    }
}

export default reducer