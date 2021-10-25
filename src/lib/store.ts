import { configureStore } from "@reduxjs/toolkit";
import checklistReducer from "./features/checklists/checklistSlice";
import usersReducer from "./features/users/usersSlice";
import vehicleReducer from "./features/vehicles/vehicleSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    vehicles: vehicleReducer,
    checklists: checklistReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store