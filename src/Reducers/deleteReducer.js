export default (state = [], action) => {
    switch(action.type) {
        case 'SELECT_DATA':
            return action.payload
            default:
                return state
    }
}