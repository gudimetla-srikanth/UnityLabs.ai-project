import React from 'react'
import Home from './components/home/Home'
import User from './components/user/User'
import axios from 'axios'
import { HashRouter, Routes, Route } from 'react-router-dom'


axios.defaults.baseURL = 'http://hn.algolia.com/api/v1/search?query='
export default function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:title/:author/:points/:id" element={<User />} />
        </Routes>
      </HashRouter>
    </div>
  )
}


