import React, { useState, useEffect, useRef } from 'react'
import Herry from '../imgs/logo.png'
import Click_directory from '../svgs/click_directory.svg'
import { gsap } from "gsap";
import Figma_background1 from '../imgs/Figma_background1.png'
import Figma_background2 from '../imgs/Figma_background2.png'
import Figma_backgorund from '../imgs/Figma_background.png'
import Dime_background from '../imgs/Dime_background.png'
import Dime_logo from '../imgs/Dime_logo.png'
import About_page_transition from '../Page_Transition/About_page_transition'
import Page_Transition from '../Page_Transition/Page_Transition'
import contact_click from '../imgs/contact_click.png'
import Contact_touch_btn from '../Animations/Contact_touch_btn.json'
import Contact_work_btn from '../Animations/Contact_work_btn.json'
import Letswork_title from '../imgs/Letswork_title.png'
import contact_logo from '../imgs/contact_logo.png'
import Dime_img1 from '../imgs/Dime_img1.png'
import Dime_img2 from '../imgs/Dime_img2.png'
import Dime_img3 from '../imgs/Dime_img3.png'
import Aboutme_img from '../imgs/DSCF5795.JPG'
import dime_btn from '../imgs/dime_btn.png'
import design_inspiration_title from '../imgs/design_inspiration.png'
import skill_click_arrow from '../imgs/Skill_click_arrow.png'
import Development from '../imgs/Development_description.png'
import Design from '../imgs/Design_description.png'
import lottie from "lottie-web";
import skill_circle_ani from '../Animations/Myskill_ani.json'
import intro_my_skill_title from '../imgs/intro_my_skill_title.png'
import about_tittle from '../imgs/About_tittle.png'
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import explore from '../imgs/explore.png'
import shoushan from '../imgs/Shoushan.png'
import ca from '../imgs/CA.png'
import skateboard from '../imgs/Skateboard.png'
import me_in_dime from '../imgs/me_in_dime.png'
import recently from '../imgs/Recently.png'
import dime2 from '../imgs/dime2.png'
import dime1 from '../imgs/dime1.png'
import inspiration from '../imgs/inspiration.png'
import intro_text from '../imgs/intro_text.png'
import introduce from '..//imgs/intro.png'
import '../About/About.css'
import Menu from '../Menu/Menu'
import ramp from '../imgs/Ramp.png'
import ca1 from '../imgs/ca1.png'
import ca2 from '../imgs/ca2.png'
import climb from '../imgs/climb.png'
import earth from '../imgs/EARTH.png'
import canada from '../imgs/canada.png'
import taiwan from '../imgs/taiwan.png'





const About = () => {

    //防止使用者滾動滑鼠
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

    const navigate = useNavigate();


    const Dime_img = [
        Dime_img1,
        Dime_img2,
        Dime_img3
    ]


    //For mobile device to display or close the description
    const [aboutme_description_show, setAboutme_description_show] = useState(false)

    const [dime_description_show, setDime_description_show] = useState(false)

    const handle_show_aboutme_description = () => {
        setAboutme_description_show(!aboutme_description_show)
    }

    const handle_show_dime_description = () => {
        setDime_description_show(!dime_description_show)
    }


    //Skill 動畫介紹 Section 
    const skillcircleani_Ref = useRef(null);
    const [skillcircleani_play, setSkillcircleani_play] = useState(false);
    const [select_skill, setSelect_skill] = useState(null)

    useEffect(() => {

        const Skill_circle_ani = lottie.loadAnimation({
            container: skillcircleani_Ref.current,
            renderer: "svg",
            loop: false, // 只播放一次
            autoplay: false, // 預設不播放
            animationData: skill_circle_ani, // 修正 JSON 變數名稱
        });

        // 監聽滾動事件
        const handleScroll = () => {
            if (!skillcircleani_Ref.current) return; // 確保 ref 存在

            const elementTop = skillcircleani_Ref.current.getBoundingClientRect().top; // 取得元素距離視窗頂部的位置
            const windowHeight = window.innerHeight; // 取得視窗的高度

            if (elementTop <= windowHeight * 0.8 && !skillcircleani_play) {
                // 當元素進入視窗 80% 的高度內時觸發動畫
                Skill_circle_ani.play();
                setSkillcircleani_play(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            Skill_circle_ani.destroy(); // 銷毀動畫實例，避免記憶體洩漏
        };
    }, []); // 只需要在掛載時運行一次，不要加 `[skillcircleani_play]`

    const handle_click_skill = (event) => {
        const { clientX } = event; // 取得點擊時的 X 軸位置和目標元素
        const skillani_container = skillcircleani_Ref.current
        const animationwidth = skillani_container.offsetWidth
        const clickPosition = clientX - skillani_container.getBoundingClientRect().left; // 計算點擊的相對位置

        if (clickPosition < animationwidth / 2) {
            setSelect_skill(Design); // 點擊左邊，顯示左邊圖片
        }
        else {
            setSelect_skill(Development); // 點擊右邊，顯示右邊圖片
        }
    }

    //點其它地方setSelect_skill就null
    useEffect(() => {
        const handleClickOutside = (event) => {
            //skillcircleani_Ref.current以點選 且 !skillcircleani_Ref.current.contains(event.target) 點選的位置不再skillcircleani_Ref 裡面
            if (skillcircleani_Ref.current && !skillcircleani_Ref.current.contains(event.target)) {
                setSelect_skill(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    //Dime 
    const Dime_imgs_Ref = useRef(null)
    const [isdime_imgs_Visible, setIsdime_imgs_Visible] = useState(false);

    useEffect(() => {
        const dime_observer = new IntersectionObserver(
            ([entry]) => {
                setIsdime_imgs_Visible(entry.isIntersecting)
            },
            { threshold: 1 } // 當 50% 進入視窗時觸發
        )
        if (Dime_imgs_Ref.current) {
            dime_observer.observe(Dime_imgs_Ref.current);

        }
        return () => {
            if (Dime_imgs_Ref.current) {
                dime_observer.unobserve(Dime_imgs_Ref.current);
            }
        };
    }, [])


    const [currentimg, setCurrentimg] = useState(0)
    const keys = Object.keys(Dime_img); // ['dime1', 'dime2', 'me_in_dime']
    const [transition, setTransition] = useState(true);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ maxX: 0, maxY: 0 });

    // 更新 maxX 和 maxY
    const updateDimensions = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // 基於螢幕尺寸設置不同參數
        let maxX = width - 150; // 最大水平移動距離（圖片寬度考慮在內）
        let maxY = height / 10; // 垂直內凹範圍

        // 特別為 24 吋以上螢幕設置參數
        if (width > 1920) { // 常見 24 吋螢幕的寬度為 1920px
            maxX = width - 200; // 更大的水平移動距離
            maxY = height / 15; // 更深的內凹
        }

        setDimensions({ maxX, maxY });
    };


    useEffect(() => {
        // 監聽窗口大小變化
        window.addEventListener('resize', updateDimensions);
        updateDimensions(); // 初始化

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight; // 滾動百分比 (0 到 1)

            // 使用正弦函數計算水平和垂直偏移
            const x = scrollPercent * dimensions.maxX; // 水平移動
            const y = dimensions.maxY * Math.sin(scrollPercent * Math.PI); // 垂直凹度

            setPosition({ x, y });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初始化位置

        return () => window.removeEventListener('scroll', handleScroll);
    }, [dimensions]);
    useEffect(() => {
        const interval = setInterval(() => {
            // 淡出後再切換下一張圖片，接著再淡入
            setTransition(false);
            setTimeout(() => {
                setCurrentimg(prev => (prev + 1) % keys.length);
                setTransition(true);
            }, 300); // 這個時間要和CSS transition時間對應
        }, 2300);

        return () => clearInterval(interval);
    }, [keys.length]);


    //Recently activity container
    const [Recently_activity_name, setRecently_activity_name] = useState('Explore')
    const Recently_activity_name_Ref = useRef(null)


    useEffect(() => {
        if (Recently_activity_name_Ref.current) {
            gsap.fromTo(
                Recently_activity_name_Ref.current,
                { y: 20, opacity: 0 }, // 文字從下方開始，透明度為 0
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" } // 滑動進入動畫
            );
        }
    }, [Recently_activity_name]);


    //Hover 在地球照片出現在滑鼠旁動畫
    const [mouseonRecently, setMouseonRecently] = useState(false)
    const [hoverrecently_imgsrc, setHoverrecently_imgsrc] = useState(null)

    //先把照片預先加載，不然Hover時候才加載太慢
    useEffect(() => {
        const preloadImages = [ca2, climb]; // 這裡放所有可能的圖片
        preloadImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    },[])

    const handleMouseMove_Recently = (e) => {
        gsap.to('.Recently_follow_img', {
            x: e.clientX + 5,
            y: e.clientY + 5,
            duration: 0.7,
            ease: 'power2.out'
        })
    };
    const handleMouseEnter_Recently = (imagesrc) => {
        setMouseonRecently(true);
        setHoverrecently_imgsrc(imagesrc)
    };

    const handleMouseLeave_Recently = () => {
        setMouseonRecently(false);
        setHoverrecently_imgsrc(null)
    };



    //Contact go to work circle  動畫介紹  
    const contact_work_btn_Ref = useRef(null);
    const [contact_work_btn_play, setContact_work_btn_play] = useState(false);

    useEffect(() => {

        const Contact_work_ani = lottie.loadAnimation({
            container: contact_work_btn_Ref.current,
            renderer: "svg",
            loop: false, // 只播放一次
            autoplay: false, // 預設不播放
            animationData: Contact_work_btn, // 修正 JSON 變數名稱
        });

        // 監聽滾動事件
        const handleScroll = () => {
            if (!contact_work_btn_Ref.current) return; // 確保 ref 存在

            const elementTop = contact_work_btn_Ref.current.getBoundingClientRect().top; // 取得元素距離視窗頂部的位置
            const windowHeight = window.innerHeight; // 取得視窗的高度

            if (elementTop <= windowHeight * 0.8 && !contact_work_btn_play) {
                // 當元素進入視窗 80% 的高度內時觸發動畫
                Contact_work_ani.play();
                setContact_work_btn_play(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            Contact_work_ani.destroy(); // 銷毀動畫實例，避免記憶體洩漏
        };
    }, []); // 只需要在掛載時運行一次，不要加 `[skillcircleani_play]`



    //Contact go to touch circle  動畫介紹  
    const contact_touch_btn_Ref = useRef(null);
    const [contact_touch_btn_play, setContact_touch_btn_play] = useState(false);


    useEffect(() => {
        const Contact_touch_ani = lottie.loadAnimation({
            container: contact_touch_btn_Ref.current,
            renderer: "svg",
            loop: false, // 只播放一次
            autoplay: false, // 預設不播放
            animationData: Contact_touch_btn, // 修正 JSON 變數名稱
        });

        // 監聽滾動事件
        const handleScroll = () => {
            if (!contact_touch_btn_Ref.current) return; // 確保 ref 存在

            const elementTop = contact_touch_btn_Ref.current.getBoundingClientRect().top; // 取得元素距離視窗頂部的位置
            const windowHeight = window.innerHeight; // 取得視窗的高度

            if (elementTop <= windowHeight * 0.8 && !contact_touch_btn_play) {
                // 當元素進入視窗 80% 的高度內時觸發動畫
                Contact_touch_ani.play();
                setContact_touch_btn_play(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            Contact_touch_ani.destroy(); // 銷毀動畫實例，避免記憶體洩漏
        };
    }, []); // 只需要在掛載時運行一次，不要加 `[skillcircleani_play]`


    const [isContactVisible, setIsContactVisible] = useState(false);
    const Contact_section_Ref = useRef(null)
    //當頁面進入到 Contact_section 時候，就不出現 ramp skateboard 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsContactVisible(entry.isIntersecting);
            },
            { root: null, rootMargin: "0px", threshold: 0.3 } // ✅ 調整 threshold (30% 出現在畫面內就觸發)
        );

        if (Contact_section_Ref.current) {
            observer.observe(Contact_section_Ref.current);
        }

        return () => {
            if (Contact_section_Ref.current) {
                observer.unobserve(Contact_section_Ref.current);
            }
        };
    }, []);


    const handle_call_me = () => {
        window.location.href = "tel:0987887336"
    }



    return (
        <div>
            <About_page_transition ></About_page_transition>
            {!Mobile_mode &&

                <div className='About_background'>
                    <Menu></Menu>


                    <div className='About_title'>
                        <p className="About_title1">
                            <span className="outlined_text">Empathy</span> is my core essence
                        </p>
                        <p className='About_title2'>Also the goal of design</p>
                        <div class="seperate_line"></div>

                    </div>
                    <div className='Aboutme_container'>
                        <div className='Aboutme_img_wrapper'>
                            <img className='Aboutme_img' src={Aboutme_img} alt="About me" />
                        </div>

                        <div className='Aboutme_section'>
                            <p className='Aboutme_title'>About me</p>
                            <p className='Aboutme_text'>
                                I am Herry Zeng, a university student at STUST. I am passionate about exploring the fields of interaction and UI / UX design. Although I don't have much experience, I assure you that I will keep improving.
                            </p>
                        </div>
                    </div>


                    <div className='Intro_skill_section' >
                        <div className='Intro_my_skill_title'>
                            <p className='Intro_my_skill_title_text'>What skills do I have?</p>
                        </div>
                        <div className='Skill_ani_container'>
                            <div ref={skillcircleani_Ref} className='skill_circle_ani' onClick={handle_click_skill} />

                            <img className={`design_des_img ${select_skill === Design ? "show" : "hide"}`} src={Design} />
                            <img className={`development_des_img ${select_skill === Development ? "show" : "hide"}`} src={Development} />

                        </div>

                        {!select_skill &&
                            // <img src={skill_click_arrow} className='skill_click_arrow'></img>
                            <img className='Click_directory' src={Click_directory} alt="Click Directory" width="75" height="75" />

                        }


                    </div>

                    <div className='Inspiration_section'>

                        <div className='design_inspiration_title'>
                            <p className='design_inspiration_title_text'>Design inspiration for this website.</p>
                            <img className='Dime_background' src={Dime_background}></img>
                        </div>

                        <p className='Dime_description'>
                            I visited Canada in summer 2024 and was inspired by the city's beauty and a unique skateboard store called <span style={{ fontFamily: "Lusitana, serif", fontSize: "25px" }}>Dime</span>, which has a simple yet refined street style. My website reflects this straightforward design with my personal touch.
                        </p>
                        <div className='dime_img_container' ref={Dime_imgs_Ref}>
                            <img className={`Dime_logo ${isdime_imgs_Visible ? 'dimelogo_visible' : 'dimelogo_hidden'}`} src={Dime_logo} />
                            <img className={`Dime_img1 ${isdime_imgs_Visible ? 'dime_visible' : ''}`} src={Dime_img1}></img>
                            <img className={`Dime_img3 ${isdime_imgs_Visible ? 'dime_visible' : ''}`} src={Dime_img3}></img>
                            <img className={`Dime_img2 ${isdime_imgs_Visible ? 'dime_visible' : ''}`} src={Dime_img2}></img>
                        </div>

                    </div>


                    <div className='Recently_container'>
                        <p className='Recently_title'>Recently</p>
                        <div className='Recently_activity_section'>
                            <p className='seperate_line_recently'></p>
                            <p className='Recently_activity_name' ref={Recently_activity_name_Ref}>{Recently_activity_name}</p>
                        </div>
                        <div className='Earth_section'>
                            <img className='earth' src={earth} ></img>
                            <img className='country canada_map' src={canada}
                                onClick={() => navigate('/canada')}
                                onMouseMove={handleMouseMove_Recently}
                                onMouseEnter={() => { setRecently_activity_name('Canada'); handleMouseEnter_Recently(ca2); }}
                                onMouseLeave={() => { setRecently_activity_name('Explore'); handleMouseLeave_Recently() }} >
                            </img>
                            <img className='country taiwan_map' src={taiwan}
                                onClick={() => navigate('/shoushan')}
                                onMouseMove={handleMouseMove_Recently}
                                onMouseEnter={() => { setRecently_activity_name('Kaohsiung'); handleMouseEnter_Recently(climb) }}
                                onMouseLeave={() => { setRecently_activity_name('Explore'); handleMouseLeave_Recently() }}>
                            </img>
                        </div>
                        <img className='Click_directory' src={Click_directory} alt="Click Directory" width="75" height="75" />

                        {mouseonRecently &&
                            <img src={hoverrecently_imgsrc} className='Recently_follow_img'></img>
                        }
                    </div>

                   
                    <div className='Contact_section' ref={Contact_section_Ref }>
              
                        <img className='contact_logo' src={contact_logo} onClick={() => navigate('/herry')}></img>

                        <div className='work_contact_btn_container'>
                            <img className='Letswork_title' src={Letswork_title}></img>
                            <div ref={contact_work_btn_Ref} className='contact_work_btn' onClick={() => navigate('/work')} />
                            <div ref={contact_touch_btn_Ref} className='contact_touch_btn' onClick={() => navigate('/contact')} />
                        </div>
                        <a className='gmail_container' href='https://mail.google.com/mail/?view=cm&fs=1&to=herry20030426@gmail.com'>
                            <p className='gmail_text'>herry20030426@gmail.com</p>
                            <img src={contact_click} className='contact_click'></img>
                        </a>
                        <div class="contact_seperate_line"></div>

                        <a className='phone_container' >
                            <p className='phone_text'>0987887336</p>
                            <img src={contact_click} className='contact_click'></img>
                        </a>
                    </div>


                    {!isContactVisible && (<>
                        <img className='ramp' src={ramp}></img>

                        <img
                            src={skateboard}
                            alt="Skateboard"
                            className="skateboard"
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px)`,
                            }}
                        />
                    </>)}
                </div>}
            {
                Mobile_mode &&
                <div className='Mobile_about_background'>

                    <Menu></Menu>
                    <div className='About_title'>
                        <p className="About_title1">
                            <span className="outlined_text">Empathy</span> is my<br />core essence.
                        </p>
                        <p className='About_title2'>Also the goal of design.</p>
                    </div>

                    <div className='Get_know_me_section'>
                        <div class="seperate_line"></div>

                        <div className='Get_know_me_btn' onClick={handle_show_aboutme_description}>Get to know me !</div>
                    </div>

                    <p className={`Aboutme_description ${aboutme_description_show ? 'show' : ''}`}>
                        I am a student at STUST, majoring in CSIE. I love exploring the world of interface and interactive design. Although I don't have much experience in UI/UX, I am committed to learning and improving
                    </p>
                    <img className='Aboutme_img' src={Aboutme_img}></img>

                    <div className='Intro_skill_section'>
                        <div className='Intro_my_skill_title'>
                            <p className='Intro_my_skill_title_text'>What skills do I have?</p>
                        </div>
                        <div className='Skill_ani_container'>
                            <div ref={skillcircleani_Ref} className='skill_circle_ani' onClick={handle_click_skill} />

                            <img className={`design_des_img ${select_skill === Design ? "show" : "hide"}`} src={Design} />
                            <img className={`development_des_img ${select_skill === Development ? "show" : "hide"}`} src={Development} />

                        </div>

                        {!select_skill &&
                            <img src={skill_click_arrow} className='skill_click_arrow'></img>
                        }


                    </div>

                    <div className='Inspiration_section'>

                        <div className='design_inspiration_title'>
                            <p className='design_inspiration_title_text'>Design inspiration<br />for this website.</p>

                        </div>
                        <div className='dime_btn_section'>
                            <div class="seperate_line"></div>
                            <img className='dime_btn' src={dime_btn} onClick={handle_show_dime_description}></img>
                        </div>
                        <p className={`Dime_description ${dime_description_show ? 'show' : ''}`}>
                            I visited Canada in summer 2024 and was inspired by the city's beauty and a unique skateboard store called Dime, which has a simple yet refined street style. My website reflects this straightforward design with my personal touch.
                        </p>
                        <div className='Mobile_dime_img_container'>
                            <img src={Dime_img[keys[currentimg]]} className={transition ? 'transition_in' : 'transition_out'}></img>

                        </div>

                    </div>


                    <div className='Contact_section'>
                        <img className='contact_logo' src={contact_logo} onClick={() => navigate('/herry')}></img>

                        <div className='work_contact_btn_container'>
                            <img className='Letswork_title' src={Letswork_title}></img>
                            <div ref={contact_work_btn_Ref} className='contact_work_btn' onClick={() => navigate('/work')} />
                            <div ref={contact_touch_btn_Ref} className='contact_touch_btn' onClick={() => navigate('/contact')} />
                        </div>
                        <a className='gmail_container' href='https://mail.google.com/mail/?view=cm&fs=1&to=herry20030426@gmail.com'>
                            <p className='gmail_text'>herry20030426@gmail.com</p>
                            <img src={contact_click} className='contact_click'></img>
                        </a>
                        <div class="contact_seperate_line"></div>

                        <a className='phone_container' onClick={handle_call_me}>
                            <p className='phone_text'>0987887336</p>
                            <img src={contact_click} className='contact_click'></img>
                        </a>
                    </div>
                </div>

            }
        </div>
    )
}

export default About