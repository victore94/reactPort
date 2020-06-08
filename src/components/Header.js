import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <Link to='/'>
            <h1 className='logo' >
                <div className=' logo-box'>
                    VL
                </div>
            </h1>
        </Link>
    </div>
)

export default Header