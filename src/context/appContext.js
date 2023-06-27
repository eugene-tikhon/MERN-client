import { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  DISPLAY_ERROR_ALERT,
  DISPLAY_SUCCESS_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
} from "./actions";
import axios from "axios";

export const AppContext = createContext();

export const INITIAL_STATE = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "danger",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "",
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
  userLocation: localStorage.getItem("location")
    ? JSON.parse(localStorage.getItem("location"))
    : "",
  showSidebar: true,
  jobLocation: localStorage.getItem("location")
  ? JSON.parse(localStorage.getItem("location"))
  : "",
  isEditing: false
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function displayAlert(type) {
    if (type === "danger") {
      dispatch({ type: DISPLAY_ERROR_ALERT });
    }
    if (type === "success") {
      dispatch({ type: DISPLAY_SUCCESS_ALERT });
    }
    setTimeout(() => {
      clearAlert();
    }, 3000);
  }

  function clearAlert() {
    dispatch({ type: CLEAR_ALERT });
  }

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("location", JSON.stringify(location));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  async function registerUser(user) {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        user
      );
      if (response.data && response.data.isOk) {
        const { user, token, location } = response.data;
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: { user, token, location },
        });
        displayAlert("success");
        addUserToLocalStorage({ user, token, location });
      }

    } catch (error) {
      //dispatch({type: REGISTER_USER_ERROR, mas: ""});
      console.log(error);
    }

  }

  async function loginUser(currentUser) {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        currentUser
      );
      if (response.data && response.data.isOk) {
        const { user, token, location } = response.data;
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: { user, token, location },
        });
        displayAlert("success");
        addUserToLocalStorage({ user, token, location });
      }
    } catch (error) {
      //dispatch({type: REGISTER_USER_ERROR, mas: ""});
      console.log(error);
    }
  }

  function toggleSidebar() {
    dispatch({ type: TOGGLE_SIDEBAR });
  }

  function logoutUser() {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  }

  const authAxiosFetch = axios.create({
    baseURL: "http://localhost:5000/api/v1/auth/"
    // headers: {
    //   Authorization: `Bearer ${state.token}`
    // }
  })

  authAxiosFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

  async function updateUser(currentUser) {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await authAxiosFetch.patch("updateUser",currentUser);

      if (response?.data?.isOk) {
        const { user, token, location } = response.data;
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: { user, token, location },
        });
        displayAlert("success");
        addUserToLocalStorage({ user, token, location });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
