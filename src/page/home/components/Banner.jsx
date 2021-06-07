import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    let list = [
        {
            image: '/img/covers/cover-1.jpg',
            name: 'Hàng quốc tế',
            link: '/catalog/hang-quoc-te-id17166'
        },
        {
            image: '/img/covers/cover-2.jpg',
            name: 'Điện Thoại - Máy Tính Bảng',
            link: '/catalog/dien-thoai-may-tinh-bang-id1789'
        },
        {
            image: '/img/covers/cover-3.jpg',
            name: 'Laptop - Thiết bị IT',
            link: '/catalog/laptop-thiet-bi-it-id1846'
        }
    ]
    return (
        <section>
            <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">
                {
                    list.map(e => <BannerItem key={e.name} {...e} />)
                }
            </div>
        </section>
    )
}

function BannerItem({ image, name, link }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: '470px' }}>
                <div className="card-body mt-auto mb-n11 py-8">
                    {/* Heading */}
                    <h1 className="mb-0 font-weight-bolder">
                        {name}
                    </h1>
                </div>
                <div className="card-body mt-auto py-8">
                    {/* Button */}
                    <Link className="btn btn-white stretched-link" to={link}>
                        {name} <i className="fe fe-arrow-right ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    )
}