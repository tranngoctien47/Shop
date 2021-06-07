import useFormValidate from 'core/hook/useFormValidate';
import { useTranslate } from 'core/Translate';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/reducers/authReducer';
const styles = {
    inputError: {
        color: 'red',
        fontSize: 13,
        fontStyle: 'italic'
    }
}
export default function Login() {
    let { t } = useTranslate()
    let { error, form, inputChange, submit } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
        message: {
            username: {
                required: 'Username không được để trống'
            },
            password: {
                required: 'Password không được để trống'
            }
        }
    })



    const dispatch = useDispatch()

    function _btnLogin() {
        let error = submit();
        if (Object.keys(error).length === 0) {
            dispatch(login(form))
        }
    }

    const auth = useSelector(state => state.auth)


    return (
        <div className="card-body">
            {/* Heading */}
            <h6 className="mb-7">{t('Returning Customer')}</h6>
            {auth.loginError && <p className="error-notification" style={styles.inputError}>{auth.loginError}</p>}
            {/* Form */}
            <div className="row">
                <div className="col-12">
                    {/* Email */}
                    <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                            {t('Email Address *')}
                        </label>
                        <input className="form-control form-control-sm" id="loginEmail" type="text" name="username" placeholder={t('Email Address *')} onChange={inputChange} value={form.username} />
                        {error.username && <p style={styles.inputError} className="text-error">{error.username}</p>}
                    </div>
                </div>
                <div className="col-12">
                    {/* Password */}
                    <div className="form-group">
                        <label className="sr-only" htmlFor="loginPassword">
                            {t('Password *')}
                        </label>
                        <input className="form-control form-control-sm" id="loginPassword" type="password" name="password" placeholder={t('Password *')} onChange={inputChange} value={form.password} />
                        {error.password && <p style={styles.inputError} className="text-error">{error.password}</p>}
                    </div>
                </div>
                <div className="col-12 col-md">
                    {/* Remember */}
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="loginRemember" type="checkbox" />
                            <label className="custom-control-label" htmlFor="loginRemember">
                                {t('Remember me')}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-auto">
                    {/* Link */}
                    <div className="form-group">
                        <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">{t('Forgot Password?')}</a>
                    </div>
                </div>
                <div className="col-12">
                    {/* Button */}
                    <button className="btn btn-sm btn-dark" type="submit" onClick={_btnLogin}>
                        {t('Sign In')}
                    </button>
                </div>
            </div>
        </div>
    )
}
