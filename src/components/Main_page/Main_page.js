import React, { useState, useEffect, useRef } from 'react';
import DIGITAL_DESIGN_anim_mobile from '../Animations/DIGITAL_DESIGN_anim_mobile.json'
import main_page_title_mobile from '../svgs/main_page_title_mobile.svg'
import main_page_background2_mobile from '../svgs/main_page_background2_mobile.svg'
import DIGITAL_DESIGN_anim from '../Animations/DIGITAL_DESIGN_anim.json'
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

    //讓 Title 2 的動畫延遲1.5秒再開始
    const Title2_anim_Ref = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            Title2_anim_Ref.current?.play();
        }, 1500);

        return () => clearTimeout(timer);
    }, [])

    const Title2_anim_mobile_Ref = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            Title2_anim_mobile_Ref.current?.play()
        }, 1500)
        return () => clearTimeout(timer);
    }, [])

    //偵測是否滾動滑鼠滾輪
    const menuWorkRef = useRef(null);
    const menuAboutRef = useRef(null);
    const menuContactRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            gsap.to(menuWorkRef.current, {
                x: -15,
                duration: 0.3,
                delay: 0, // 立即
                ease: 'power2.out',
            });

            gsap.to(menuAboutRef.current, {
                x: -15,
                duration: 0.3,
                delay: 0.1, // 滾動後 0.1 秒
                ease: 'power2.out',
            });

            gsap.to(menuContactRef.current, {
                x: -15,
                duration: 0.3,
                delay: 0.3, // 滾動後 0.3 秒
                ease: 'power2.out',
            });

            // 還原動畫（往右回來）
            setTimeout(() => {
                gsap.to([menuWorkRef.current, menuAboutRef.current, menuContactRef.current], {
                    x: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    stagger: 0.1, // 依序回來
                });
            }, 300);
        };

        window.addEventListener('wheel', handleScroll);
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.addEventListener('scroll', handleScroll)

        };
    }, []);


    //mobile 的 menu 進場動畫
    const Mobile_menu_ref = useRef(null)
     useEffect(() => {
    if (Mobile_mode) {
      // 等畫面真正渲染好再執行動畫（延遲一個 event loop）
      setTimeout(() => {
        if (Mobile_menu_ref.current) {
          const targets = Mobile_menu_ref.current.querySelectorAll('p');

          // 重設狀態
          gsap.set(targets, {
            y: 50,
            opacity: 0,
            scale: 0.8,
          });

          // 執行動畫
          gsap.to(targets, {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'back.out(1.7)',
            stagger: 0.15,
            duration: 0.6,
          });
        }
      }, 0);
    }
  }, [Mobile_mode]); // 每次開啟都會跑動畫

    return (
        <div>
            <Page_Transition page_title='Home'></Page_Transition>
            {Mobile_mode && <div className='Mobile_menu_section' ref={Mobile_menu_ref}>
                <p onClick={() => navigate('/about')}>About</p>
                <p onClick={() => navigate('/work')}>Work</p>
                <p onClick={() => navigate('/contact')}>Contact</p>
            </div>}
            <div className='Main_page_container'>
                <div className='Main_page_main_section'>
                    <p className='main_img_descrption'>Photo by Kevin clark , 2024</p>
                    <img className='Main_img' src={Main_img} />
                    <img className='main_page_title' src={main_page_title} />
                    <img className='main_page_title_mobile' src={main_page_title_mobile}></img>
                    <div className='Menu_Tittle2_anim_section' >
                        {/* 用新版的 lottieRef  */}
                        <Lottie className='DIGITAL_DESIGN_anim' animationData={DIGITAL_DESIGN_anim} lottieRef={Title2_anim_Ref} loop={true} autoplay={false} style={{ width: '23vw', transform: 'translatey(0vw)' }}></Lottie>
                        <Lottie className='DIGITAL_DESIGN_anim_mobile' animationData={DIGITAL_DESIGN_anim_mobile} lottieRef={Title2_anim_mobile_Ref} loop={true} autoplay={false} style={{ transform: 'translatey(-15vw)' }}></Lottie>

                    </div>
                    <img className='mainpage_background2' src={mainpage_background2} />
                    <img className='main_page_background2_mobile' src={main_page_background2_mobile}></img>
                </div>
                <div className='Menu_section'>
                    <div className='Menu_work_section' onMouseEnter={() => setHover_on_menu('work')} onMouseLeave={() => setHover_on_menu(null)}>
                        <p className='Menu_work' onClick={() => navigate('/work')} ref={menuWorkRef}>Work</p>
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
                        <p className='Menu_about' onClick={() => navigate('/about')} ref={menuAboutRef}>About</p>
                        <div className="Menu_about_anim_section">
                            {hover_on_menu === 'about' ? (
                                <Lottie
                                    animationData={hover_about_anim}
                                    loop={true}
                                    autoplay={true}
                                    style={{ width: '21vw', transform: 'translatey(-0.3vw)' }}
                                />
                            ) : (
                                <div style={{ width: '21vw', }} />)}
                        </div>
                    </div>
                    <div className='Menu_contact_section' onMouseEnter={() => setHover_on_menu('contact')} onMouseLeave={() => setHover_on_menu(null)}>
                        <p className='Menu_contact' onClick={() => navigate('/contact')} ref={menuContactRef}>Contact</p>
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


        </div>

    )
}

export default Main_page
