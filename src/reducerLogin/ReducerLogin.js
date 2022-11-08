export const types = {
  login: "login",
  logout: "logout",
  full_name: "full_name",
  email: "email",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isAuth: true,
        token: action.value.token,
        email: action.value.email,
      };
    case types.logout:
      return initialAuthState;
    case types.full_name:
      return { ...state, full_name: action.value };
    case types.email:
      return { ...state, email: action.value };

    default:
      return state;
  }
};
export const initialAuthState = {
  isAuth: false,
  token: "",
  email: "",
};
