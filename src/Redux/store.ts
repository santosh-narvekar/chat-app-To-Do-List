// redux is a state management library and helps to manage state globally
import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice"
import taskListSlice from "./taskSlice"
import chatSlice from './chatSlice'
// ...

export const store = configureStore({
  reducer: {
    user:userSlice,
    taskList:taskListSlice,
    chat:chatSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch