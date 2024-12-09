import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Menu/Menu.css'
import { useLocation } from 'react-router-dom';
import Logo from '../imgs/logo.png'










const Menu = () => {

    const location = useLocation();


    

    const initialState = 
    location.pathname === '/about' ? 'About' :
    location.pathname === '/work' ? 'Work' :
    location.pathname === '/contact' ? 'Contact' :
    location.pathname === '/shoushan' ? 'About' :
    location.pathname === '/canada' ? 'About' :

    'Logo'; // 預設為 Logo


    const [clickmenuitem, setClickemuitem] = useState(initialState)

    const navigate = useNavigate();


  return (
    <div className='Menu'>
    <div
        className={`LogoWrapper ${clickmenuitem === 'Logo' ? 'active' : ''}`}
        onClick={() => {setClickemuitem('Logo') ; navigate('/herry')}}
    >
        <img className='Logo' src={Logo} alt='Logo' />
    </div>
    <div className='right_menu'>
        <p
            className={`About ${clickmenuitem === 'About' ? 'active' : ''}`}
            onClick={() =>{ setClickemuitem('About') ; navigate('/about')}}
        >About</p>
        <p
            className={`Work ${clickmenuitem === 'Work' ? 'active' : ''}`}
            onClick={() => {setClickemuitem('Work') ; navigate('/work')}}>
            Work</p>
        <p
            className={`Contact ${clickmenuitem === 'Contact' ? 'active' : ''}`}
            onClick={() => {setClickemuitem('Contact') ; navigate('/contact')}}
        >Contact</p>
    </div>
</div>
  )
}

export default Menu
