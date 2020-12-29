import React from 'react'
import './home.css'
import {Home2} from '../../shared/components/home2/Home2'

export function Home() {
    return (
        <div>
            <div className='home'>
                <div className='c-parrafo'>
                    <p>portfolio</p>
                </div>
            </div>
            
            <div className='home2'>
                <Home2/>
            </div>
            
        </div>
    )
}
