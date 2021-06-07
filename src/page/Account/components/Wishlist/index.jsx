import userApi from 'api/userApi'
import Pagination from 'components/Pagination'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import WishlistItem from './WishlistItem'

export default function Wishlist() {

    let [state, setState] = useState({
        list: [],
        paginate: null
    })
    useEffect(() => {
        userApi.getWishlist()
            .then(res => {
                setState({
                    list: res.data,
                    paginate: res.paginate
                })
            })
    }, [])

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            <div className="row">
                {/* Item */}
                {
                    state.list.map(e => <WishlistItem key={e._id} {...e} />)
                }
            </div>
            {/* Pagination */}
            <Pagination {...state.paginate} />

        </div>
    )
}
