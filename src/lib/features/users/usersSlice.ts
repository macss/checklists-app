import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { User } from "../../model";

/**
 * Users Adapter, used to help manage users state
 */
const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.name.localeCompare(b.name)
})

/**
 * Initial state of the adapter, empty by default
 */
const initialState = usersAdapter.getInitialState()

/**
 * THUNKS
 */

// TODO

/**
 * The slice of the store, contains the reducers
 */

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

// Exports

/**
 * The slice's reducer, used in the store
 */
export default usersSlice.reducer

/**
 * The slice's actions
 */
export const {

} = usersSlice.actions

/**
 * The adapter selectors
 */
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds
} = usersAdapter.getSelectors()