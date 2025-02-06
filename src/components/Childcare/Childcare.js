import React, { useState, useRef, useEffect } from 'react'
import Back_work_btn from '../Work/Back_work_btn'
import '../Childcare/Childcare.css'
import Menu from '../Menu/Menu'
import link from '../imgs/link.png'
import childcare1 from '../imgs/childcare1.png'
import childcare2 from '../imgs/childcare2.png'
import childcare3 from '../imgs/childcare3.png'
import childcare4 from '../imgs/childcare4.png'

const Childcare = () => {


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

        role: "UI/UX Design",

        credit: "Branding : Third,Fifth childcare ",

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
            <Back_work_btn></Back_work_btn>
            <Menu></Menu>

            <div className='Title'>
                <div className='Title_leftsection'>
                    <p className='Project_name'>Third,Fifth Childcare Service</p>
                    <p className='Project_description'>
                        Third, Fifth Childcare is a childcare center founded by my mother and aunt in Linyuan, Kaohsiung, dedicated to providing a safe and nurturing environment. We aim to build a website to help parents learn more about us and ensure the best care for their children.
                    </p>

                    {/* <div
                        className={`until_ios_follow ${mouseoniosapp ? 'show' : ''}`}
                        style={{
                            top: `${mousePosition.y + 10}px`, // 距离鼠标稍下
                            left: `${mousePosition.x + 10}px`, // 距离鼠标稍右
                        }}
                    >
                        Until
                        <img className='link' src={link}></img>
                    </div> */}

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


            <div className='Display_device_childcare'>
                {[childcare1, childcare2, childcare3, childcare4].map((src, index) => (
                    <div className='childcare_device1' key={index}>
                        <img className='CHILDCARE1' src={src} alt={`Childcare ${index + 1}`} />
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Childcare
