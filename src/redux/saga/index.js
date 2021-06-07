import { takeLatest } from 'redux-saga/effects'
import { userLogout } from 'redux/reducers/authReducer'
import { userLogin } from 'redux/reducers/authReducer'
import { CART } from 'redux/reducers/cartReducer'
import { logoutClearCart, cartUpdate, userLoginGetCart } from './cartSaga'


export default function* saga() {

    yield takeLatest(userLogout.type, logoutClearCart)

    yield takeLatest(userLogin.type, userLoginGetCart)

    yield takeLatest([CART.addCart, CART.increment, CART.descrement, CART.remove], cartUpdate)
}

