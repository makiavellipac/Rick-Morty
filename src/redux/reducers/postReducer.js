import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/postActions'

const initialState = {
  posts: null,
  isFetching: false,
  error: null,
  pages:0,
}

function posts (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        posts:null
      }

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload.posts.results,
        pages: action.payload.posts.info.pages
      }

    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export default posts