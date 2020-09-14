export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload
        case 'ADD_POST':
            return state.concat([action.data])
                default:
                return state
    }
}