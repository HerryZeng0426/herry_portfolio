import React, { useState, useEffect } from 'react';
import country_before from '../imgs/country_before.png'
import Contact from '../Contact/Contact';
import Menu from '../Menu/Menu';
import chinese_name from '../imgs/chinese name.png'
import graduate from '../imgs/Graduate Student.png'
import university from '../imgs/University Student.png'
import english_name from '../imgs/NAME.png'
import Logo from '../imgs/logo.png'
import Herry from '../imgs/me.png'
import '../Main_page/Main_page.css'
import country from '../imgs/country.png'
import main_page_earth from '../imgs/main_page_earth.png'





const Main_page = () => {
    useEffect(() => {
        document.title = 'Herry Zeng'; // 修改网页标题
    }, []); // 只在组件挂载时运行
    window.addEventListener('mousewheel', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // 針對 Firefox
    window.addEventListener('DOMMouseScroll', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });


    return (
        <div>

            <div className='background_main_page'>
                <div className='main_page_country_container'>
                    <img src={country} className='main_page_country' alt="Country" />
                </div>
                <Menu></Menu>
                <img className='Herry' src={Herry}></img>


                <div className='name_flip_container' >
                    <div className='name_flip'>
                        <img className='english_name' src={english_name}></img>
                        <img className='chinese_name' src={chinese_name}></img>
                    </div>
                </div>

                <div class="student_flip_container">
                    <div class="student_flip">
                        <p class="university">University Student</p>
                        <p class="STUST">STUST</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main_page
