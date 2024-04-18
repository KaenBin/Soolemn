import * as type from "@/constants/constants";

export const clearProfile = () => ({
  type: type.CLEAR_PROFILE,
});

export const setProfile = (user) => ({
  type: type.SET_PROFILE,
  payload: user,
});

export const updateEmail = (password, newEmail) => ({
  type: type.UPDATE_EMAIL,
  payload: {
    password,
    newEmail,
  },
});

export const updateProfile = (newProfile) => ({
  type: type.UPDATE_PROFILE,
  payload: {
    updates: newProfile.updates,
    files: newProfile.files,
    credentials: newProfile.credentials,
  },
});

export const updateProfileSuccess = (updates) => ({
  type: type.UPDATE_PROFILE_SUCCESS,
  payload: updates,
});

export const makePayment = (payment) => ({
  type: type.MAKE_PAYMENT,
  payload: payment,
});
