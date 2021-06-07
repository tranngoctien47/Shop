import { call, put } from "@redux-saga/core/effects";
import userApi from "../../api/userApi";
import { USER } from "../reducers/authReducer";

export function* fetchUserLogin(data) {
    let user = yield call(userApi.login, data.payload)
    if (user.error) {
        yield put({ type: USER.error, payload: user.error })
    } else {
        yield put({ type: USER.login, payload: user.data })

    }
}