export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POST":
      return state.concat(action.data) ;
    case "DELETE_DATA":
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};
