import React, { useState, useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import Until_background1 from '../imgs/Until_background1.png'
import Until_background2 from '../imgs/Until_background2.png'
import Until_background3 from '../imgs/Until_background3.png'
import Until_background4 from '../imgs/Until_background4.png'
import Until_background5 from '../imgs/Until_background5.png'
import Background_img_background from '../imgs/Background_img_background.png'
import Until_sreenshot1 from '../imgs/Until_sreenshot1.png'
import Until_sreenshot2 from '../imgs/Until_sreenshot2.png'
import Until_sreenshot3 from '../imgs/Until_sreenshot3.png'
import Until_sreenshot4 from '../imgs/Until_sreenshot4.png'
import Until_sreenshot5 from '../imgs/Until_sreenshot5.png'
import Back_work_btn from '../Work/Back_work_btn'
import secura_wireframe5 from '../imgs/secura_wireframe5.png'
import secura_wireframe3 from '../imgs/secura_wireframe3.png'
import secura_wireframe4 from '../imgs/secura_wireframe4.png'
import secura_wireframe2 from '../imgs/secura_wireframe2.png'
import secura_wireframe1 from '../imgs/secura_wireframe1.png'
import secura_infopage from '../imgs/secura_infopage.jpg'
import secura_mainpage from '../imgs/secura_mainpage.jpg'
import secura_mainpage_cover_video from '../imgs/secura_logo_video.mov'
import secura_mainpage_cover from '../imgs/secura_mainpage_cover.png'
import iphone16_device from '../imgs/iphone16_device.png'
import '../Until/Until.css'
import Menu from '../Menu/Menu'
import link from '../imgs/link.png'








const Until = () => {

    const Mobile_mode = useMediaQuery({ maxWidth: 768 })

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


    const Project_info = {

        role: "Full Stack Developer",

        credit: "Founder : Kevin Clark",

        location_year: "Tainan, Taiwan , 2024",

    }

    const [display_background_img, setDisplay_background_img] = useState('')


    const [display_device_ishoverd, setDisplay_device_ishoverd] = useState(false)

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    const [mouseoniosapp, setMouseoniosapp] = useState(false);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setMouseoniosapp(true);
    };

    const handleMouseLeave = () => {
        setMouseoniosapp(false);
    };




    return (
        <div>
            {!Mobile_mode && <div>

                <Back_work_btn></Back_work_btn>
                <Menu></Menu>

                <div className='Title'>
                    <div className='Title_leftsection'>
                        <p className='Project_name'>Until Android ver.</p>
                        <p className='Project_description'>
                            Until is an <a href='https://apps.apple.com/us/app/until/id1533755230'><span className='Highlight_text'
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>iOS application</span>
                            </a> created by the brilliant designer Kevin Clark in Montreal. He graciously granted me the honor of designing its Android version, which has been a truly rewarding experience for me.
                            Until is an app that helps you count down to the important moments in your life. You can add multiple events and track them effortlessly from your home screen or smartwatch.
                        </p>

                        <div
                            className={`until_ios_follow ${mouseoniosapp ? 'show' : ''}`}
                            style={{
                                top: `${mousePosition.y + 10}px`, // 距离鼠标稍下
                                left: `${mousePosition.x + 10}px`, // 距离鼠标稍右
                            }}
                        >
                            Until
                            <img className='link' src={link}></img>
                        </div>

                    </div>
                    <div className='Title_rightsection'>
                        <div className='Project_info'>
                            <p className="Project_info_label slide-in-left">Role</p>
                            <p className="Project_info_value slide-in-left">{Project_info.role}</p>
                            <p className="Project_info_label slide-in-right">Credits</p>
                            <p className="Project_info_value slide-in-right">{Project_info.credit}</p>
                            <p className="Project_info_label slide-in-left">Location & year</p>
                            <p className="Project_info_value slide-in-left">{Project_info.location_year}</p>
                        </div>
                    </div>
                </div>


                <div className='Display_device'
                    onMouseEnter={() => setDisplay_device_ishoverd(true)}
                    onMouseLeave={() => setDisplay_device_ishoverd(false)}>

                    <div className='Display_leftpage_android'>
                        <img className='Display_twosides_device_android' src={Until_sreenshot1}></img>
                    </div>
                    <div className='Display_mainpage_android'>
                        <img className='Display_mainpage_device_android' src={Until_sreenshot3}></img>
                    </div>

                    <div className='Display_rightpage_android'>
                        <img className='Display_twosides_device_android' src={Until_sreenshot2}></img>
                    </div>

                </div>

                <div className='Background_section'>

                    <p className='Background_title'>Background Design</p>
                    <p className='Background_description'>I designed background illustrations transitioning from sunrise to midnight to better convey the atmosphere of waiting.</p>
                    <div class="Wireframe_mainpage_title_underline"></div>

                    <div className='Display_background_section'>
                        <img className='Background_img_background' src={Background_img_background}></img>

                        <div className='Until_background_img'>
                            <img className='Until_background Until_background1' src={Until_background1}></img>
                            <img className='Until_background Until_background2' src={Until_background2}></img>
                            <img className='Until_background Until_background3' src={Until_background3}></img>
                            <img className='Until_background Until_background4' src={Until_background4}></img>
                            <img className='Until_background Until_background5' src={Until_background5}></img>
                        </div>
                    </div>

                </div>

            </div>
            }
            {Mobile_mode &&
                <div>
                    <Menu></Menu>
                    
                </div>}

        </div>
    )
}

export default Until
