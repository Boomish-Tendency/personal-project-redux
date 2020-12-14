import axios from "axios";

const initialState = {
  email: "",
  userId: 0,
  profilePic: "",
};

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER";

export function loginUser(email, userId) {
  return {
    type: LOGIN_USER,
    payload: {
      email: email,
      userId: userId,
    },
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null,
  };
}

export function getUserSession() {
  const payload = axios.get("/auth/userSession");

  return {
    type: GET_USER,
    payload: payload,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      const { email, userId, profilePic } = action.payload.email;
      return { email, userId, profilePic };
    case LOGOUT_USER:
      return initialState;
    case GET_USER + "_PENDING":
      return { ...state };
    case GET_USER + "_FULFILLED":
      return { email, userId, profilePic };
    case GET_USER + "_REJECTED":
      return initialState;
    default:
      return initialState;
  }
}
