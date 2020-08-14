import * as actions from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuth: true,
        },
      };

    case actions.LOGOUT:
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuth: false,
        },
      };

    case actions.TOGGLE_HEADER_SIDE_BAR:
      return {
        ...state,
        components: {
          ...state.components,
          header: {
            ...state.components.header,
            isHeaderSideBarPulled: !state.components.header
              .isHeaderSideBarPulled,
          },
        },
      };

    case actions.SET_PATH:
      return {
        ...state,
        path: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
