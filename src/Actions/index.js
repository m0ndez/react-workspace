import jsonPlaceholder from "../Api/jsonPlaceholder";

// JSON Place
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Create
export const onPost = (data) => (dispatch) => {
   dispatch({ type: "ADD_POST", data});
};

// Select
export const selectData = (id,task,status,status2) => async (dispatch) => {
  await dispatch({
    type: "SELECT_DATA",
    payload: {
     id:id === '' && undefined,
     task:task,
     status:status,
     status2:status2
    },
  });
};
// Update
export const onUpdate = (data) => (dispatch) => {
   dispatch({ type: "UPDATE_POST", data });

} 

// Delete
export const onDelete = (data) => async (dispatch) => {
  await dispatch(
    { type: "DELETE_DATA", id: data },
    { type: "DELETE_DATA2", id: data }
  );
  selectData("", "");
};
