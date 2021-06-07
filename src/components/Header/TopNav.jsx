import { useTranslate } from 'core/Translate'
import React from 'react'

export default function TopNav() {
    let { setTranslate, default: langDefault, t } = useTranslate()

    function changeLang(e) {
        e.preventDefault()

        setTranslate({
            default: e.target.dataset.value
        })
    }
    return (
        <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
            <div className="container">
                {/* Promo */}
                <div className="mr-xl-8">
                    <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">{t('Free shipping worldwide')}</span>
                </div>
                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="topbarCollapse">
                    {/* Nav */}
                    <ul className="nav nav-divided navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                  </a>
                            {/* Menu */}
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#!">
                                    <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />United States
                    </a>
                                <a className="dropdown-item" href="#!">
                                    <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada
                    </a>
                                <a className="dropdown-item" href="#!">
                                    <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany
                    </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                            {/* Menu */}
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#!">USD</a>
                                <a className="dropdown-item" href="#!">EUR</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">{
                                langDefault === 'en' && 'English' ||
                                langDefault === 'vi' && 'Việt Nam'
                            }</a>
                            {/* Menu */}
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#" data-value="en" onClick={changeLang}>English</a>
                                <a className="dropdown-item" href="#" data-value="vi" onClick={changeLang}>Việt Nam</a>
                            </div>
                        </li>
                    </ul>
                    {/* Nav */}
                    <ul className="nav navbar-nav mr-8">
                        <li className="nav-item">
                            <a className="nav-link" href="./shipping-and-returns.html">{t('Shipping')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./faq.html">{t('FAQ')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./contact-us.html">{t('Contact')}</a>
                        </li>
                    </ul>
                    {/* Nav */}
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-medium" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
