import React, { useState, useEffect } from 'react';
import hover_contact_anim from '../Animations/hover_contact_anim.json'
import hover_about_anim from '../Animations/hover_about_anim.json'
import hover_work_anim from '../Animations/hover_work_anim.json'
import Lottie from "lottie-react";
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import mainpage_background2 from '../svgs/main_page_background2.svg'
import main_page_title2 from '../svgs/main_page_title2.svg'
import main_page_title from '../svgs/main_page_title.svg'
import mainpage_background from '../svgs/main_page_background.svg'
import Main_img from '../imgs/Aboutme_img.png'
import Page_Transition from '../Page_Transition/Page_Transition';
import Mobile_line from '../imgs/Mobile_line.png'
import Mobile_student from '../imgs/Mobile_student.png'
import Mobile_name from '../imgs/Mobile_name.png'
import { useMediaQuery } from 'react-responsive';
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


    const Mobile_mode = useMediaQuery({ maxWidth: 768 })

    const navigate = useNavigate()

    const [hover_on_menu, setHover_on_menu] = useState(null);




    return (
        <div>
            <Page_Transition page_title='Home'></Page_Transition>
            {!Mobile_mode &&
                <div className='Main_page_container'>
                    <div className='Main_page_main_section'>
                        <p className='main_img_descrption'>Photo by Kevin clark , 2024</p>
                        <img className='Main_img' src={Main_img} />
                        <img className='main_page_title' src={main_page_title} />
                        <img className='main_page_title2' src={main_page_title2} />
                        <img className='mainpage_background2' src={mainpage_background2} />
                    </div>
                    <div className='Menu_section'>
                        <div className='Menu_work_section' onMouseEnter={() => setHover_on_menu('work')} onMouseLeave={() => setHover_on_menu(null)}>
                            <p className='Menu_work' onClick={() => navigate('/work')}>Work</p>
                            <div className="Menu_work_anim_section">
                                {hover_on_menu === 'work' ? (
                                    <Lottie
                                        animationData={hover_work_anim}
                                        loop={true}
                                        autoplay={true}
                                        style={{ width: '7.5vw', transform: 'translatey(-0.5vw)' }}
                                    />
                                ) : (
                                    <div style={{ width: '7.5vw', }} />)}
                            </div>
                        </div>
                        <div className='Menu_about_section' onMouseEnter={() => setHover_on_menu('about')} onMouseLeave={() => setHover_on_menu(null)}>
                            <p className='Menu_about' onClick={() => navigate('/about')}>About</p>
                            <div className="Menu_about_anim_section">
                                {hover_on_menu === 'about' ? (
                                    <Lottie
                                        animationData={hover_about_anim}
                                        loop={true}
                                        autoplay={true}
                                        style={{ width: '21vw', transform: 'translatey(-0.1vw)' }}
                                    />
                                ) : (
                                    <div style={{ width: '21vw', }} />)}
                            </div>
                        </div>
                        <div className='Menu_contact_section' onMouseEnter={() => setHover_on_menu('contact')} onMouseLeave={() => setHover_on_menu(null)}>
                            <p className='Menu_contact' onClick={() => navigate('/contact')}>Contact</p>
                            <div className="Menu_contact_anim_section">
                                {hover_on_menu === 'contact' ? (
                                    <Lottie
                                        animationData={hover_contact_anim}
                                        loop={true}
                                        autoplay={true}
                                        style={{ width: '23vw', transform: 'translatey(-0.75vw)' }}
                                    />
                                ) : (
                                    <div style={{ width: '23vw', }} />)}
                            </div>
                        </div>
                    </div>
                </div>
            }

            {Mobile_mode && <>
                <div className='Mobile_background_main_page'>

                    <Menu></Menu>
                    <img className='Mobile_Herry' src={Herry}></img>
                    <div className='Mobile_name_student'>
                        <p className='Mobile_name'>Herry Zeng</p>
                        <img src={Mobile_line} className='Mobile_line'></img>
                        <p className='Mobile_student'>Graduate Student</p>
                    </div>

                </div>
            </>
            }
        </div>

    )
}

export default Main_page
