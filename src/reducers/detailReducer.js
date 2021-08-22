const initState = {
  game: {},
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state, //Return all state, we're not modifing anything
        game: action.payload.game,
        isLoading: false,
      };

    /**
     * By default is Loading is set to true
     *  detailActions.js has to turn it to false
     */
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
