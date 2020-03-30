export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

export const fetchPosts = (text) => (dispatch) => {

  dispatch({ type: FETCH_POSTS_REQUEST })

  fetch(`https://rickandmortyapi.com/api/character/?name=${text}`)
    .then(res => res.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: {
          posts
        }
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_POSTS_ERROR,
        error: err.toString(),
      })
    })
}