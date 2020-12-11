import React from 'react'
import './home.css'
import {Home2} from '../../shared/components/home2/Home2'

export function Home() {
    return (
        <div>
            <div className='home'>
                <h1>home1</h1>
            </div>
            
            <div className='home2'>
                <Home2/>
            </div>
            
        </div>
    )
}
