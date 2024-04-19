import { UPDATE_EMAIL, UPDATE_PROFILE } from "@/constants/constants";
import { ACCOUNT } from "@/constants/routes";
// import { displayActionMessage } from '@/helpers/utils';
import { call, put, select } from "redux-saga/effects";
// import { history } from "@/routers/AppRouter";
// import firebase from "@/services/firebase";
import { setLoading } from "../actions/miscActions";
import { updateProfileSuccess } from "../actions/profileActions";
import { MAKE_PAYMENT } from "@/constants/constants";
import apiInstance from "@/services/apiService";

function* profileSaga({ type, payload }) {
  switch (type) {
    case UPDATE_EMAIL: {
      //   try {
      //     yield put(setLoading(false));
      //     yield call(firebase.updateEmail, payload.password, payload.newEmail);

      //     yield put(setLoading(false));
      //     yield call(history.push, '/profile');
      //     yield call(displayActionMessage, 'Email Updated Successfully!', 'success');
      //   } catch (e) {
      //     console.log(e.message);
      //   }
      break;
    }
    case UPDATE_PROFILE: {
      // try {
      //   yield put(setLoading(true));
      //   yield put(updateProfileSuccess(payload));
      //   yield put(setLoading(false));
      //   yield call(history.push, ACCOUNT);
      // } catch (e) {
      //   console.log(e);
      // }
      break;
    }
    case MAKE_PAYMENT: {
      const state = yield select();
      yield call(apiInstance.updateUserData, {
        wallet: Number.parseFloat(state.profile.wallet - payload, 2).toFixed(2),
      });
      yield put(
        updateProfileSuccess({
          wallet: Number.parseFloat(state.profile.wallet - payload, 2).toFixed(
            2
          ),
        })
      );
      break;
    }

    default: {
      throw new Error("Unexpected action type.");
    }
  }
}

export default profileSaga;
