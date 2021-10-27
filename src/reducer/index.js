const applicationReducer = (state = {}, action) => {
  if (action.type == "showLoading") {
    return { ...state, showLoading: true };
  } else if (action.type == "hideLoading") {
    return { ...state, showLoading: false };
  } else {
    return {
      showLoading: null,
    };
  }
};
export default applicationReducer;
