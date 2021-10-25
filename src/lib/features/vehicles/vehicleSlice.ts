import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Vehicle } from "../../model";

/**
 * Vehicles Adapter, used to help manage vehicles state
 */
const vehiclesAdapter = createEntityAdapter<Vehicle>({
  sortComparer: (a, b) => a.license_plate.localeCompare(b.license_plate)
})

/**
 * Initial state of the adapter, empty by default
 */
const initialState = vehiclesAdapter.getInitialState()

/**
 * THUNKS
 */

// TODO

/**
 * The slice of the store, contains the reducers
 */

const vehiclesSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {}
})

// Exports

/**
 * The slice's reducer, used in the store
 */
export default vehiclesSlice.reducer

/**
 * The slice's actions
 */
export const {

} = vehiclesSlice.actions

/**
 * The adapter selectors
 */
export const {
  selectAll: selectAllVehicles,
  selectById: selectVehicleById,
  selectIds: selectVehiclesIds
} = vehiclesAdapter.getSelectors()