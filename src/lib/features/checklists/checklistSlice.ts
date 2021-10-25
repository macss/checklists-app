import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Checklist } from "../../model";

/**
 * Checklists Adapter, used to help manage checklist state
 */
const checklistsAdapter = createEntityAdapter<Checklist>({
  sortComparer: (a, b) => a.created_at - b.created_at
})

/**
 * Initial state of the adapter, empty by default
 */
const initialState = checklistsAdapter.getInitialState()

/**
 * THUNKS
 */

// TODO

/**
 * The slice of the store, contains the reducers
 */

const checklistsSlice = createSlice({
  name: 'checklists',
  initialState,
  reducers: {}
})

// Exports

/**
 * The slice's reducer, used in the store
 */
export default checklistsSlice.reducer

/**
 * The slice's actions
 */
export const {

} = checklistsSlice.actions

/**
 * The adapter selectors
 */
export const {
  selectAll: selectAllChecklists,
  selectById: selectChecklistById,
  selectIds: selectChecklistsIds
} = checklistsAdapter.getSelectors()