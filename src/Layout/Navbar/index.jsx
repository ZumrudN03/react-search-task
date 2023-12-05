import React from 'react'
import './index.scss'

const Navbar = () => {
    return (
        <div className='navbar_bkg'>
            <div className='navbar'>
                <div className='navbar_left'>
                    <p>Where in the world?</p>
                </div>
                <div className='navbar_right'>
                    <i class="fa-regular fa-moon"></i>
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar