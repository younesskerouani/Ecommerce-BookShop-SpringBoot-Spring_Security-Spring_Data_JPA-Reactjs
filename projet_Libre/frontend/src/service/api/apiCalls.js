import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure } from "../redx/userRedux";
import { publicRequest } from "./requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("api/auth/signin", user)
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart());

    try {
        const res = await publicRequest.post("api/auth/signup", user)
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure())
    }
}