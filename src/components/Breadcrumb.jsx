import React from 'react'
import { Link } from 'react-router-dom'


/**
 * list: [
 *  {
 *      title: string,
 *      link: string
 *  }
 * ]
 */
export default function Breadcrumb({ list }) {
    return (
        <nav className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Breadcrumb */}
                        <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                            {
                                list.map((e, i) => <li className="breadcrumb-item" key={i}>
                                    <Link className="text-gray-400" to={e.link}>{e.title}</Link>
                                </li>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    )
}
