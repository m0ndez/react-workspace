export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POST":
      //  User Pust 
      return state.concat([action.data]);
      // case "UPDATE_POST":
      //  User Pust 
      // return state.map( result => );
    case "DELETE_DATA":
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};
