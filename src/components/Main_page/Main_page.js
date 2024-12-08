import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import chinese_name from '../imgs/chinese name.png'
import graduate from '../imgs/Graduate Student.png'
import university from '../imgs/University Student.png'
import english_name from '../imgs/NAME.png'
import Logo from '../imgs/logo.png'
import Herry from '../imgs/me.png'
import '../Main_page/Main_page.css'







const Main_page = () => {

    window.addEventListener('mousewheel', function(event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });
    
    // 針對 Firefox
    window.addEventListener('DOMMouseScroll', function(event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });
    

    return (
        <div className='background'>
            <Menu></Menu>
            <img className='Herry' src={Herry}></img>


            <div className='name_flip_container' >
                <div className='name_flip'>
                    <img className='english_name' src={english_name}></img>
                    <img className='chinese_name' src={chinese_name}></img>
                </div>
            </div>
            <div className="student_flip_container">
                <div className='student_flip'>
                    <img className="university" src={university} alt="Student front" />
                    <img className="graduate" src={graduate} alt="Student back" />
                </div>
            </div>
        </div>
    )
}

export default Main_page
