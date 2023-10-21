import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import Loding from '../loading/Loding';
import SearchIcon from '@mui/icons-material/Search';
import Card from '../cards/Card';
export default function Home() {
    const [response, setResponse] = useState([])
    const [search, setSearch] = useState('')
    const [load, setLoad] = useState(false)
    useEffect(() => {
        try {
            const getData = setTimeout(() => {
                setLoad(true)
                const fetch = async () => {
                    await axios.get(`${search}`).then(res => setResponse(res.data.hits))
                    setLoad(false)
                }
                fetch()
            }, 1000)
        } catch (e) {
            console.log("error occured")
        }

    }, [search])

    console.log("response", response)
    return (
        <div className="home">
            <div className="navbar">
                <div className="navbar_wrapper">
                    <div className="app_name">Hacker News</div>
                    <div className="search_field">
                        <SearchIcon className='search_Icon' sx={{ fontSize: "30px" }} />
                        <input type="text" placeholder="search your news" className='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
            </div>

            {load ? <Loding /> : <><div className="home_content">
                {
                    response?.map((data, index) => {
                        return <Card key={index} data={data} />
                    })
                }
            </div></>}
        </div>
    )
}
