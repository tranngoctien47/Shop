import productApi from "../../api/productApi";
import createSlice from "../../core/createSlice";
import { convertQueryToObject } from '../../components/helper'
const initialState = {
    products: [],
    paginate: null,
    categories: [],
    loadingCategories: true,
    loading: true
}

export function getProduct(queryString) {
    // let query = convertQueryToObject()

    // let item = JSON.parse(sessionStorage.getItem(`catalog_${query.page || 1}`))
    // if (item) {
    //     return dispatch => {
    //         dispatch(action.catalog(item))
    //     }
    // }


    return (dispatch) => {
        dispatch(action.loading())
        productApi.catalog(queryString)
            .then(res => {
                // sessionStorage.setItem(`catalog_${query.page || 1}`, JSON.stringify(res))
                dispatch(action.catalog(res))
            })
    }
}

export function getcategories() {

    return async (dispatch, state) => {
        if (state.product.loadingCategories) {
            dispatch(action.categories(await productApi.category()))
        }
    }
}


let { reducer, action, TYPE } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loading: (state) => {
            state.loading = true
        },
        catalog: function (state, action) {
            return {
                ...state,
                loading: false,
                products: action.payload.data,
                paginate: action.payload.paginate
            }
        },
        categories: (state, action) => {
            state.categories = action.payload
            state.loadingCategories = false
        }
    }
})

export default reducer
export const PRODUCT = TYPE
export const productAction = action