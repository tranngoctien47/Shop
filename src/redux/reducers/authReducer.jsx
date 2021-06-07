
import cartApi from "api/cartApi"
import userApi from "../../api/userApi"
import createSlice from "../../core/createSlice"
import { CartAction } from "./cartReducer"


let user = JSON.parse(localStorage.getItem('login'))

let initialState = {
    login: !!user,
    user: user,
    error: null
}


export function login(data) {
    return (dispatch, state) => {
        userApi.login(data)
            .then(res => {
                if (res.error) {
                    dispatch(action.error({ loginError: res.error }))
                } else {
                    dispatch(action.login(res.data))




                }
            })

    }
}


export function register(data) {
    return (dispatch) => {
        userApi.register(data)
            .then(res => {
                if (res.error) {
                    dispatch(action.error({ registerError: res.error }))
                } else {
                    dispatch(action.register(res.data))
                }
            })
    }
}


export function updateInfo(data) {
    return (dispatch) => {
        userApi.update(data)
            .then(res => {
                if (res.error) {
                    dispatch(action.error({ updateError: res.error }))
                } else {
                    dispatch(action.update(res.data))
                }
            })
    }
}

let { action, reducer, TYPE } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: function (state, action) {
            let user = action.payload
            let token = action.payload.token;

            localStorage.setItem('login', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))

            return {
                ...state,
                login: true,
                user
            }
        },
        logout: function (state, action) {
            localStorage.removeItem('login')
            localStorage.removeItem('token')
            return {
                ...state,
                login: false,
                user: null
            }
        },
        error: function (state, action) {
            return {
                ...state,
                ...action.payload
            }
        },
        register: function (state, action) {
            let user = action.payload
            let token = action.payload.token;

            localStorage.setItem('login', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))

            return {
                ...state,
                login: true,
                user
            }
        },
        update: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload
            }
            localStorage.setItem('login', JSON.stringify(state.user))
        },

    }
})


export default reducer

export const userLogin = action.login

export const userLogout = action.logout

export const AUTH = TYPE

export const AuthAction = action



console.log(action.logout.type, TYPE.logout)