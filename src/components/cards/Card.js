import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
export default function Card({ data }) {
    return (
        <div className="card">
            <Link to={`/${data.title}/${data.author}/${data.points}/${data.objectID}`}><div className="card_title">
                <h1>{data.title}</h1>
            </div></Link>
            <div className="auther">
                <div className="auther_name">Author : {data.author}</div>
                <div className="auther_points">points : {data.points}</div>
            </div>
        </div >
    )
}
