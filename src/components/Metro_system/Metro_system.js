import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import metro3 from '../imgs/metro3.png'
import metro2 from '../imgs/metro2.png'
import metro1 from '../imgs/metro1.png'
import Maple from '../imgs/maple.png'
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
import '../Metro_system/Metro_system.css'
import Menu from '../Menu/Menu'









const Metro_system = () => {
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
        role: "UI / UX Design",
        location_year: "Tainan, Taiwan , 2024",
    }


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

  const navigate = useNavigate();

    const handleChangeUrl = () => {
        navigate("/Canada"); // 直接導航到 /Canada
    };


    return (
        <div>
            <Back_work_btn></Back_work_btn>
            <Menu></Menu>

            <div className='Title'>
                <div className='Title_leftsection'>
                    <p className='Project_name'>Montreal Metro</p>
                    <p className='Project_description'>
                        This design was inspired by my 2024 trip to the beautiful city of <a href=''><span className='Highlight_text_metro'
                        onClick={handleChangeUrl}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>Montreal, Canada</span>
                        </a>. During my travels, I noticed usability issues with the Metro ticketing system. As a design exercise, I worked on optimizing and improving its user experience to create a more intuitive and user-friendly solution.
                    </p>
                    <div
                        className={`maple_ios_follow ${mouseoniosapp ? 'show' : ''}`}
                        style={{
                            top: `${mousePosition.y + 10}px`, // 距离鼠标稍下
                            left: `${mousePosition.x + 10}px`, // 距离鼠标稍右
                        }}
                    >
                        <img src={Maple}></img>
                    </div>
                </div>
                <div className='Title_rightsection'>
                    <div className='Project_info'>
                        <p className="Project_info_label slide-in-left">Role</p>
                        <p className="Project_info_value slide-in-left">{Project_info.role}</p>

                        <p className="Project_info_label slide-in-left">Location & year</p>
                        <p className="Project_info_value slide-in-left">{Project_info.location_year}</p>
                    </div>
                </div>
            </div>


         
            <div className='Display_device_metro'>
                {[metro1, metro2, metro3].map((src, index) => (
                    <div className='metro_device1' key={index}>
                        <img className='metro1' src={src} alt={`metro ${index + 1}`} />
                    </div>
                ))}
            </div>




        </div>
    )
}

export default Metro_system
