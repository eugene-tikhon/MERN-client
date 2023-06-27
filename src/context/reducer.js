import {
  DISPLAY_ERROR_ALERT,
  DISPLAY_SUCCESS_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
} from "./actions";

import { INITIAL_STATE } from "./appContext";

export default function reducer(state, action) {
  switch (action.type) {
    case DISPLAY_ERROR_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertText: "Please, check that everything is correct",
        alertType: "danger",
      };
    }
    case DISPLAY_SUCCESS_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertText: "Operation was successful",
        alertType: "success",
      };
    }
    case CLEAR_ALERT: {
      return {
        ...state,
        showAlert: false,
        alertText: "",
        alertType: "",
      };
    }
    case REGISTER_USER_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
      };
    }
    case LOGIN_USER_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_USER_SUCCESS : {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
      }
    }
    case TOGGLE_SIDEBAR : {
      return {
        ...state,
        showSidebar: !state.showSidebar
      }
    }
    case LOGOUT_USER : {
      return {
        ...INITIAL_STATE,
        user: "",
        token: "",
        userLocation: "",
        jobLocation: "",
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
