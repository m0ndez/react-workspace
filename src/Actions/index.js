import jsonPlaceholder from '../Api/jsonPlaceholder';


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const selectData = (title,activity) => async dispatch =>  {
    dispatch({ type: 'SELECT_DATA', payload: {
        create: activity,
        select: `Selected ${title}`
    } })
}
