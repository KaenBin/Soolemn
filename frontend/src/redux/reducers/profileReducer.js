import {
  CLEAR_PROFILE,
  SET_PROFILE,
  UPDATE_PROFILE_SUCCESS,
} from "@/constants/constants";
import avatar from "@/images/defaultAvatar.jpg";

const initState = {
  username: "Unknown",
  fullname: "Unknown",
  email: "unknown@hotmail.com",
  address: "",
  cart: [],
  order: [],
  paymentHistory: [],
  avatar: avatar,
  dateJoined: 0,
  wallet: 0,
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload;
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_PROFILE:
      return {};
    default:
      return state;
  }
};
