import userApi from 'api/userApi';
import InputGroup from 'components/InputGroup';
import useFormValidate from 'core/hook/useFormValidate';
import { useTranslate } from 'core/Translate';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/reducers/authReducer';
const styles = {
    inputError: {
        color: 'red',
        fontSize: 13,
        fontStyle: 'italic'
    }
}
export default function Register() {
    let { t } = useTranslate()
    let { error, form, inputChange, submit } = useFormValidate({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirm_password: ''
    }, {
        rule: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6, max: 32
            },
            confirm_password: {
                required: true,
                match: 'password'
            }
        },
        message: {
            first_name: {
                required: 'Họ không được để trống'
            },
            last_name: {
                required: 'Tên không được để trống'
            },
            username: {
                required: 'Email không được để trống',
                pattern: 'Email không đúng định dạng'
            },
            confirm_password: {
                required: 'Vui lòng xác nhận mật khẩu',
                match: 'Vui lòng điền giống password'
            }
        }
    }, { className: 'form-register' })


    const dispatch = useDispatch()

    function _btnRegister() {
        let error = submit();
        if (Object.keys(error).length === 0) {
            dispatch(register(form))
        }
    }
    const auth = useSelector(state => state.auth)

    return (
        <div className="card-body form-register">
            {/* Heading */}
            <h6 className="mb-7">{t('New Customer')}</h6>
            {auth.registerError && <p className="error-notification" style={styles.inputError}>{auth.registerError}</p>}
            {/* Form */}
            <div className="row">
                <div className="col-12">
                    {/* Email */}
                    <InputGroup name="first_name" title="First Name*" inputChange={inputChange} form={form} error={error} />
                </div>
                <div className="col-12">
                    {/* Email */}
                    <InputGroup name="last_name" title="Last Name*" inputChange={inputChange} form={form} error={error} />
                </div>
                <div className="col-12">
                    {/* Email */}
                    <InputGroup name="username" title="Email Address *" inputChange={inputChange} form={form} error={error} />
                </div>
                <div className="col-12 col-md-6">
                    {/* Password */}
                    <InputGroup name="password" type="password" title="Password *" inputChange={inputChange} form={form} error={error} />
                </div>
                <div className="col-12 col-md-6">
                    {/* Password */}
                    <InputGroup name="confirm_password" type="password" title="Confirm Password *" inputChange={inputChange} form={form} error={error} />
                </div>
                <div className="col-12 col-md-auto">
                    {/* Link */}
                    <div className="form-group font-size-sm text-muted">
                        {t('By registering your details, you agree with our Terms & Conditions, and Privacy and Cookie Policy.')}
                    </div>
                </div>
                <div className="col-12 col-md">
                    {/* Newsletter */}
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                            <label className="custom-control-label" htmlFor="registerNewsletter">
                                {t('Sign me up for the Newsletter!')}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    {/* Button */}
                    <button className="btn btn-sm btn-dark" type="submit" onClick={_btnRegister}>
                        {t('Register')}
                    </button>
                </div>
            </div>
        </div>
    )
}
