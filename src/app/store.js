import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlices'
export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
