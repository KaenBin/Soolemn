import {
  CLEAR_PROFILE,
  SET_PROFILE,
  UPDATE_PROFILE_SUCCESS,
} from "@/constants/constants";
import avatar from "@/images/defaultAvatar.jpg";

const initState = {
  fullname: "Unknown",
  email: "unknown@hotmail.com",
  address: "",
  mobile: {},
  avatar: avatar,
  dateJoined: 1954234787348,
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
