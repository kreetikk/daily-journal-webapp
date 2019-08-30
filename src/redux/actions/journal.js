import {
  ADD_JOURNAL,
  ADD_JOURNAL_SUCCESS,
  ADD_JOURNAL_ERROR,
  GET_JOURNAL,
  GET_ALL_JOURNALS,
  GET_ALL_JOURNALS_SUCCESS,
  GET_ALL_JOURNALS_ERROR,
  UPDATE_JOURNAL,
  UPDATE_JOURNAL_SUCCESS,
  UPDATE_JOURNAL_ERROR,
  DELETE_JOURNAL,
  DELETE_JOURNAL_SUCCESS,
  DELETE_JOURNAL_ERROR
} from '../constants/journal'

export const addJournal = (journal) => ({
  type: ADD_JOURNAL,
  journal,
})
export const addJournalSuccess = (journal) => ({
  type: ADD_JOURNAL_SUCCESS,
  journal,
})
export const addJournalError = (journal) => ({
  type: ADD_JOURNAL_ERROR,
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

  export const updateJournalSuccess = (journal) => ({
    type: UPDATE_JOURNAL_SUCCESS,
    journal,
  })

  export const updateJournalError = (journal) => ({
    type: UPDATE_JOURNAL_ERROR,
    journal,
  })

export const deleteJournal = (id) => ({
    type: DELETE_JOURNAL,
    id,
  })

  export const deleteJournalSuccess = (id) => ({
    type: DELETE_JOURNAL_SUCCESS,
    id,
  })

  export const deleteJournalError = (id) => ({
    type: DELETE_JOURNAL_ERROR,
    id,
  })

export const getAllJournals = () => ({
    type: GET_ALL_JOURNALS
  })

  export const getAllJournalsSuccess = (journals) => ({
    type: GET_ALL_JOURNALS_SUCCESS,
    journals
  })

  export const getAllJournalsError = (error) => ({
    type: GET_ALL_JOURNALS_ERROR,
    error
  })
