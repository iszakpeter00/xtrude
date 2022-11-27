import React from 'react'
import './Home.css'
import background from './images/tesztvideo2.mp4'

const Home = () => {
    return (
        <div className='home' id='home'>
            <video src={background} autoPlay muted loop/>
            <div className='content'>
                <h1><span>X</span>TRUDE</h1>
                <h2><span>3D</span> NYOMTATÁS ÉS TERVEZÉS</h2>
            </div>
        </div>
    )
}

export default Home
