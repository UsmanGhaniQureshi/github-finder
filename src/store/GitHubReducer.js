const gitHubReducer = (state, action) => {
  switch (action.type) {
    case "GET_SEARCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };

    case "CLEAR_USER":
      return {
        ...state,
        users: [],
        user: {},
        loading: false,
        searchText: "",
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        repos: action.payload.repos,
        user: action.payload.user,
        loading: false,
      };
    default:
      return state;
  }
};

export default gitHubReducer;
