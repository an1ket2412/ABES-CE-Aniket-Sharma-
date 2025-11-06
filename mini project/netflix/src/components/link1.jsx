import React from 'react'     

import { Routes, Route, Link} from 'react-router-dom';

function link1() {
    function Home(){    
        return <h1> This is Home Page</h1>
    }
    function About(){
        return <h1>This is About Page</h1>
    }

  return (
    <div>
        <nav>
            <Link to= "/"> Home</Link>
            <Link to="/about">About</Link>
            </nav>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        </Routes>
    </div>
  )
}

export default link1