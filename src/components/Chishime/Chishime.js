import React, { useState, useRef, useEffect } from 'react'
import description_btn_show_btn from '../imgs/description_btn_show.png'
import description_btn_back_btn from '../imgs/description_btn_back.png'
import { useMediaQuery } from 'react-responsive';
import Back_work_btn from '../Work/Back_work_btn'
import '../Chishime/Chishime.css'
import Menu from '../Menu/Menu'
import link from '../imgs/link.png'
import Chishime1 from '../imgs/Chishime1.png'
import Chishime2 from '../imgs/Chishime2.png'
import Chishime3 from '../imgs/Chishime3.png'
import Chishime4 from '../imgs/Chishime4.png'
import secura_wireframe5 from '../imgs/secura_wireframe5.png'
import secura_wireframe3 from '../imgs/secura_wireframe3.png'
import secura_wireframe4 from '../imgs/secura_wireframe4.png'
import secura_wireframe2 from '../imgs/secura_wireframe2.png'
import secura_wireframe1 from '../imgs/secura_wireframe1.png'

const Chishime = () => {

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

        role: "UI/UX Design",

        credit: "Branding : Chishime",

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

    const [description_show, setDescription_show] = useState(false)

    const [isdescriptionbtn_animation, setIsdescriptionbtn_animation] = useState(false)

    const handle_to_display_description = () => {

        setDescription_show(!description_show)

        setIsdescriptionbtn_animation(true)

        setTimeout(() => {
            setIsdescriptionbtn_animation(false)
        }, 500);
    }

    return (
        <div>

            {!Mobile_mode &&
                <div>
                    <Back_work_btn></Back_work_btn>
                    <Menu></Menu>

                    <div className='Title'>
                        <div className='Title_leftsection'>
                            <p className='Project_name'>Chishime</p>
                            <p className='Project_description'>
                                Chishime is a casual dining restaurant located in Linyuan District, Kaohsiung City, and is run by my aunt. This design was created during my early UX learning phase. I look forward to further developing this ordering system in the future to enhance the customer experience.
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


                    <div className='Display_device_chishime'>

                        <div className='Display1'>
                            <img className='device' src={Chishime1}></img>
                        </div>
                        <div className='Display2'>
                            <img className='device' src={Chishime2}></img>
                        </div>
                        <div className='Display3'>
                            <img className='device' src={Chishime3}></img>
                        </div>
                        <div className='Display4'>
                            <img className='device' src={Chishime4}></img>
                        </div>

                    </div>
                </div>
            }
            {
                Mobile_mode &&
                <div>

                    <Menu></Menu>

                    <div className='Title'>

                        <div className='Title_topsection'>
                            <div className='Project_name_comtainer' onClick={handle_to_display_description}>
                                <p className='Project_name'>Chishime</p>

                                <img className={`description_btn_show ${isdescriptionbtn_animation ? 'shake' : ''}`} src={description_show ? description_btn_back_btn : description_btn_show_btn} ></img>

                            </div>
                            <p className={`Project_description ${description_show ? 'show' : 'hidden'}`}>
                                Chishime is a casual dining restaurant located in Linyuan District, Kaohsiung City, and is run by my aunt. This design was created during my early UX learning phase. I look forward to further developing this ordering system in the future to enhance the customer experience.
                            </p>
                        </div>

                        <div className='Title_bottomsection'>
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

                    <div className='Display_device_chishime'>

                        <div className='Display1'>
                            <img className='device' src={Chishime1}></img>
                        </div>
                        <div className='Display2'>
                            <img className='device' src={Chishime2}></img>
                        </div>
                        <div className='Display3'>
                            <img className='device' src={Chishime3}></img>
                        </div>
                        <div className='Display4'>
                            <img className='device' src={Chishime4}></img>
                        </div>

                    </div>
                    <div className='space'></div>
                    <Back_work_btn></Back_work_btn>
                </div>

            }

        </div>
    )
}

export default Chishime
