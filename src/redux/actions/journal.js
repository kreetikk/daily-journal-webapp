import {
  ADD_JOURNAL,
  GET_JOURNAL,
  GET_ALL_JOURNALS,
  UPDATE_JOURNAL,
  DELETE_JOURNAL,
} from '../constants/journal'

export const addJournal = (journal) => ({
  type: ADD_JOURNAL,
  journal,
})

export const getJournal = (id) => ({
    type: GET_JOURNAL,
    id,
  })

  export const updateJournal = (journal) => ({
    type: UPDATE_JOURNAL,
    journal,
  })

  export const deleteJournal = (id) => ({
    type: DELETE_JOURNAL,
    id,
  })

  export const getAllJournal = () => ({
    type: GET_ALL_JOURNALS
  })
