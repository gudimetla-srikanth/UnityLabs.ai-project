import React, { useEffect, useState } from 'react'
import './child.css'
export default function Child({ data }) {
    return (
        <div className="child">
            <ul>
                <li><div className="child_name">{data.author}</div></li>
            </ul>
            <div className="comment">Comment : </div>
            <div className="child_comment">{data.comment_text}</div>
        </div>
    )
}
