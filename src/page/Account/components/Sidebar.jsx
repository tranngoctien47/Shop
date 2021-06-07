import { useTranslate } from 'core/Translate';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink, useRouteMatch } from 'react-router-dom'
import { userLogout } from '../../../redux/reducers/authReducer';

export default function Sidebar() {
    let match = useRouteMatch();
    let { t } = useTranslate()

    let dispatch = useDispatch()
    function _logoutClick(e) {
        e.preventDefault();
        dispatch(userLogout())
    }
    return (
        <div className="col-12 col-md-3">
            {/* Nav */}
            <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                    <NavLink className="list-group-item list-group-item-action dropright-toggle" to={`${match.path}/order`}>
                        {t('Orders')}
                    </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/wishlist`}>
                        {t('Wishlist')}
                    </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " exact to={`${match.path}`}>
                        {t('Personal Info')}
                    </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/address`}>
                        {t('Addresses')}
                    </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/payment`}>
                        {t('Payment Methods')}
                    </NavLink>
                    <NavLink className="list-group-item list-group-item-action dropright-toggle" to={`${match.path}/logout`} onClick={_logoutClick}>
                        {t('Logout')}
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
