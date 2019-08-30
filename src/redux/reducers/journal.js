import {ADD_JOURNAL, ADD_JOURNAL_SUCCESS, ADD_JOURNAL_ERROR,
     GET_JOURNAL, 
     UPDATE_JOURNAL, UPDATE_JOURNAL_SUCCESS, UPDATE_JOURNAL_ERROR, 
     DELETE_JOURNAL, DELETE_JOURNAL_SUCCESS, DELETE_JOURNAL_ERROR, 
     GET_ALL_JOURNALS, GET_ALL_JOURNALS_SUCCESS, GET_ALL_JOURNALS_ERROR} from '../constants/journal'

const initialState = {
    journals: [],
    getAllJournalsLoading: false,
    getAllJournalsError: '',
    journal: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_JOURNALS:
            return Object.assign({}, state, {
                getAllJournalsLoading: true
            })
        case GET_ALL_JOURNALS_SUCCESS:
            return Object.assign({}, state, {
                journals: [].concat(action.journals),
                getAllJournalsLoading: false
            })
        case GET_ALL_JOURNALS_ERROR:
            return Object.assign({}, state, {
                    journals: [].concat(action.error),
                    getAllJournalsLoading: false
            })
        
        case ADD_JOURNAL:
            return Object.assign({}, state, {
                journals: state.journals.concat(action.journal)
            })

        case GET_JOURNAL:
            return Object.assign({}, state, {
                journal: state.journals.find(x => String(x.id) === String(action.id))
            })
        case UPDATE_JOURNAL:
        case DELETE_JOURNAL:
        
        default:
            return state    
    }
}

export default reducer