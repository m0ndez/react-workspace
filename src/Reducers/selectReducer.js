export default (state = [], action) => {
    switch(action.type) {
        case 'SELECT_DATA':
            return action.payload
        case 'DELETE_DATA2':
            return state.filter((post) => post.id !== action.id ? state:null)
            default:
                return state
    }
}