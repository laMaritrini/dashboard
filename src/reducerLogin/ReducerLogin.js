export const types = {
  login: "login",
  logout: "logout",
  changeUsername: "changeUsername",
  changeEmail: "changeEmail",
  password: "password",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, isAuth: true };
    case types.logout:
      return { ...state, isAuth: false };
    case types.changeUsername:
      return { ...state, username: action.value };
    case types.changeEmail:
      return { ...state, email: action.value };
    case types.password:
      return { ...state, password: action.value };
    default:
      return state;
  }
};
export const initialAuthState = {
  isAuth: false,
  username: "",
  changeEmail: "",
  password: "",
};