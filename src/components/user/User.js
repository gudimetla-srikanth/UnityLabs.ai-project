import React, { useEffect, useState } from 'react'
import './user.css'
import axios from 'axios'
import Loading from '../loading/Loding'
import Child from '../childs/Child'
import { useParams } from 'react-router-dom'
function User() {
    const [load, setLoad] = useState(false)
    const { id, title, author, points } = useParams()
    const [childData, setChildData] = useState([])
    useEffect(() => {
        try {
            const getData = setTimeout(() => {
                const fetch = async () => {
                    setLoad(true)
                    await axios.get(`${id}`).then(res => {
                        console.log(res.data.hits)
                        setChildData(res.data.hits)
                    })
                    setLoad(false)

                }
                fetch()
            }, 1000)
        } catch (e) {
            console.log("error occured")
        }

    }, [])
    console.log(id)
    return (
        <div className="user">
            <div className="user_wrapper">
                <div className="user_title">
                    <h1>{title}</h1>
                </div>
                <div className="user_details">
                    <div className="user_name">Auther : {author}</div>
                    <div className="user_points">points : {points}</div>
                </div>
            </div>
            {load ? <Loading /> : <>
                <div className="user_content">
                    {childData?.map((data, index) => {
                        return <Child key={index} data={data} />
                    })}
                </div>
            </>}

        </div>
    )
}

export default User


