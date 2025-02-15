import React, { useState, useRef, useEffect } from 'react'
import click_video_btn from '../imgs/click_video_btn.png'
import description_btn_show2 from '../imgs/description_btn_show2.png'
import { useMediaQuery } from 'react-responsive';
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
import '../Secura/Secura.css'
import Menu from '../Menu/Menu'
import description_btn_show_btn from '../imgs/description_btn_show.png'
import description_btn_back_btn from '../imgs/description_btn_back.png'







const Secura = () => {

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
        role: "UI Design & Development",
        credit: "Backend Development : Tim Lin",
        location_year: "Tainan , Taiwan , 2024",
    }


    const [display_device_ishoverd, setDisplay_device_ishoverd] = useState(false)

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
            {!Mobile_mode && <div>
                <Back_work_btn></Back_work_btn>
                <Menu></Menu>

                <div className='Title'>
                    <div className='Title_leftsection'>
                        <p className='Project_name'>Secura</p>
                        <p className='Project_description'>
                            Secura is my university graduation project, combining surveillance and security. Designed for high efficiency at low cost, it features a sleek and intuitive interface for real-time monitoring, improving upon complex systems on the market.
                        </p>
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

                    <div className='Display_leftpage'>
                        <img className='Display_twosides_device' src={iphone16_device}></img>
                        <img className='secura_mainpage_img' src={secura_mainpage}></img>
                    </div>
                    <div className='Display_mainpage'>
                        <img className='Display_mainpage_device' src={iphone16_device}></img>
                        {display_device_ishoverd ? (<video className='secura_mainpage_cover_video' src={secura_mainpage_cover_video} autoPlay muted ></video>)
                            :
                            (<img className='secura_mainpage_cover' src={secura_mainpage_cover}></img>)
                        }
                    </div>

                    <div className='Display_rightpage'>
                        <img className='Display_twosides_device' src={iphone16_device}></img>
                        <img className='secura_infopage_img' src={secura_infopage}></img>
                    </div>

                </div>

                <div className='Wireframe_section'>
                    <p className='Wireframe_title'>Wireframe</p>
                    <p className='Wireframe_mainpage_title'>Home Page</p>
                    <div class="Wireframe_mainpage_title_underline"></div>

                    <div className='Wireframe_mainpage_imgs'>
                        <img className='secura_wireframe1' src={secura_wireframe1}></img>
                        <img className='secura_wireframe2' src={secura_wireframe2}></img>
                    </div>

                    <p className='Wireframe_mainpage_title'>Camera Monitoring Page</p>
                    <div class="Wireframe_mainpage_title_underline"></div>

                    <div className='Wireframe_Infopage_imgs'>
                        <img className='secura_wireframe3' src={secura_wireframe3}></img>
                        <img className='secura_wireframe4' src={secura_wireframe4}></img>
                        <img className='secura_wireframe5' src={secura_wireframe5}></img>

                    </div>
                </div>


            </div>}
            {
                Mobile_mode &&
                <div>

                    <Menu></Menu>

                    <div className='Title'>

                        <div className='Title_topsection'>
                            <div className='Project_name_comtainer' onClick={handle_to_display_description}>
                                <p className='Project_name'>Secura</p>

                                <img className={`description_btn_show ${isdescriptionbtn_animation ? 'shake' : ''}`} src={description_show ? description_btn_back_btn : description_btn_show_btn} ></img>

                            </div>
                            <p className={`Project_description ${description_show ? 'show' : 'hidden'}`}>
                                Secura is my university graduation project, combining surveillance and security. Designed for high efficiency at low cost, it features a sleek and intuitive interface for real-time monitoring, improving upon complex systems on the market.
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

                    <div className='Mobile_display_device'>

                        <div className='Mobile_display_leftpage'>
                            <img className='Mobile_display_twosides_device' src={iphone16_device}></img>
                            <img className='Mobile_secura_mainpage_img' src={secura_mainpage}></img>
                        </div>
                        <div className={`Mobile_display_mainpage ${display_device_ishoverd ? 'Mobile_display_mainpage_zindex' : ''}`} onClick={() => setDisplay_device_ishoverd(!display_device_ishoverd)}>
                            <img className='Mobile_display_mainpage_device' src={iphone16_device}></img>
                            {display_device_ishoverd ? (<video className='Mobile_secura_mainpage_cover_video' src={secura_mainpage_cover_video} autoPlay muted playsInline></video>)
                                :
                                <img className='Mobile_secura_mainpage_cover' src={secura_mainpage_cover}></img>
                            }
                            {
                                !display_device_ishoverd &&
                                <div className='click_video_btn'>Click</div>
                            }
                        </div>

                        <div className='Mobile_display_rightpage'>
                            <img className='Mobile_display_twosides_device' src={iphone16_device}></img>
                            <img className='Mobile_secura_infopage_img' src={secura_infopage}></img>
                        </div>

                    </div>

                    <div className='Wireframe_section'>
                        <p className='Wireframe_title'>Wireframe</p>
                        <p className='Wireframe_mainpage_title'>Home Page</p>
                        <div class="Wireframe_mainpage_title_underline"></div>

                        <div className='Wireframe_mainpage_imgs'>
                            <img className='secura_wireframe1' src={secura_wireframe1}></img>
                            <img className='secura_wireframe2' src={secura_wireframe2}></img>
                        </div>

                        <p className='Wireframe_mainpage_title'>Camera Monitoring Page</p>
                        <div class="Wireframe_mainpage_title_underline"></div>

                        <div className='Wireframe_Infopage_imgs'>
                            <img className='secura_wireframe3' src={secura_wireframe3}></img>
                            <img className='secura_wireframe4' src={secura_wireframe4}></img>
                            <img className='secura_wireframe5' src={secura_wireframe5}></img>

                        </div>
                    </div>

                    <Back_work_btn></Back_work_btn>

                </div>

            }

        </div>
    )
}

export default Secura
