import jsonPlaceholder from "../Api/jsonPlaceholder";

// JSON Place
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Create
export const onPost = (data) => async (dispatch) => {
  await dispatch({ type: "ADD_POST", data });
};

// Select
export const selectData = (title, userId) => async (dispatch) => {
  await dispatch({
    type: "SELECT_DATA",
    payload: {
      title: title,
      id: userId,
      body: "",
      userId: userId,

      create: title,
      select: title,
      delete: title,
      selecter: undefined,
    },
  });
};

// Delete
export const onDelete = (data) => async (dispatch) => {
  await dispatch(
    { type: "DELETE_DATA", id: data },
    { type: "DELETE_DATA2", id: data }
  );
  selectData("", "");
};
