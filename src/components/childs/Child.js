import React, { useEffect, useState } from 'react'
import './child.css'
import {useNavigate} from 'react-router-dom'
export default function Child({ data }) {
    const navigate = useNavigate();
    const handle=()=>{
        navigate('/')
    }
    return (
        <>
        <div><button onClick={handle} style={{fontSize:"25px"}}>Back</button></div>
        <div className="child">
            <ul>
                <li><div className="child_name">{data.author}</div></li>
            </ul>
            <div className="comment">Comment : </div>
            <div className="child_comment">{data.comment_text}</div>
        </div>
        </>
    )
}
