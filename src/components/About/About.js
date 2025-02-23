import React, { useState, useEffect, useRef } from 'react'
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
        me_in_dime,
        dime1,
        dime2
    ]


    const [ishovered_taiwan, setIshovered_taiwan] = useState(false)
    const [mousePosition_taiwan, setMousePosition_taiwan] = useState({ x: 0, y: 0 });
    const [ishovered_canada, setIshovered_canada] = useState(false)
    const [mousePosition_canada, setMousePosition_canada] = useState({ x: 0, y: 0 });
    // 當滑鼠進入 taiwan 圖片時觸發
    const handleMouseEnter = () => {
        setIshovered_taiwan(true);
    };

    // 當滑鼠離開 taiwan 圖片時觸發
    const handleMouseLeave = () => {
        setIshovered_taiwan(false);
    };

    // 當滑鼠在 taiwan 圖片上移動時更新滑鼠位置
    const handleMouseMove = (e) => {
        setMousePosition_taiwan({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter_canada = () => {
        setIshovered_canada(true);
    };

    // 當滑鼠離開 taiwan 圖片時觸發
    const handleMouseLeave_canada = () => {
        setIshovered_canada(false);
    };

    // 當滑鼠在 taiwan 圖片上移動時更新滑鼠位置
    const handleMouseMove_canada = (e) => {
        setMousePosition_canada({ x: e.clientX, y: e.clientY });
    };

    const [aboutme_description_show, setAboutme_description_show] = useState(false)

    const handle_show_aboutme_description = () => {
        setAboutme_description_show(!aboutme_description_show)
    }

    const skillcircleani_Ref = useRef(null);
    const [skillcircleani_play, setSkillcircleani_play] = useState(false);

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
            const scrollY = window.scrollY || document.documentElement.scrollTop; // 當前滾動高度
            const triggerHeight = 350; // 設定觸發動畫的滾動高度

            if (scrollY >= triggerHeight && !skillcircleani_play) {
                Skill_circle_ani.play(); // 播放動畫
                setSkillcircleani_play(true); // 設定動畫已播放
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            Skill_circle_ani.destroy(); // 銷毀動畫實例，避免記憶體洩漏
        };
    }, []); // 只需要在掛載時運行一次，不要加 `[skillcircleani_play]`



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

    const getCaSrc = () => {
        if (ishovered_taiwan) {
            return shoushan;
        } else if (ishovered_canada) {
            return ca;
        }
        else {
            return explore
        }
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


    const handle_to_shoushan = () => {
        navigate('/shoushan')
    }

    const handle_to_canada = () => {
        navigate('/canada')

    }



    return (
        <div>
            {!Mobile_mode &&
                <div className='About_background'>
                    <Menu></Menu>

                    <div className='intro_container'>
                        <img className='introduce_img' src={introduce}></img>
                        <img className='intro_text' src={intro_text}></img>
                    </div>

                    <div className='inspiration_container'>
                        <div className='img_container'>
                            <img src={Dime_img[keys[currentimg]]} className={transition ? 'transition_in' : 'transition_out'}></img>

                        </div>
                        <img className='inspiration_text' src={inspiration} ></img>
                    </div>

                    <div className='recently_container '>
                        <img className='recently' src={recently}></img>
                        <img className='ca' src={getCaSrc()}></img>
                        <div className='earth_container'>
                            <img src={earth}></img>
                            <img src={canada} className='country canada'
                                onClick={handle_to_canada}
                                onMouseEnter={handleMouseEnter_canada}
                                onMouseLeave={handleMouseLeave_canada}
                                onMouseMove={handleMouseMove_canada}></img>

                            <img src={taiwan} className='country taiwan'
                                onClick={handle_to_shoushan}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}></img>
                        </div>
                        {ishovered_canada && (
                            <img
                                src={ca2}
                                alt="Extra"
                                className="ca_img"
                                style={{
                                    width: '10%',
                                    borderRadius: '25px',
                                    position: 'fixed',
                                    top: mousePosition_canada.y + 10, // 加一些偏移，避免遮蓋滑鼠
                                    left: mousePosition_canada.x + 10,
                                    pointerEvents: 'none', // 讓圖片不影響滑鼠事件
                                    zIndex: 1001, // 確保圖片顯示在最前面
                                }}
                            />
                        )}

                        {ishovered_taiwan && (
                            <img
                                src={climb}
                                alt="Extra"
                                className="climb_img"
                                style={{
                                    width: '10%',
                                    borderRadius: '25px',
                                    position: 'fixed',
                                    top: mousePosition_taiwan.y + 10, // 加一些偏移，避免遮蓋滑鼠
                                    left: mousePosition_taiwan.x + 10,
                                    pointerEvents: 'none', // 讓圖片不影響滑鼠事件
                                    zIndex: 1001, // 確保圖片顯示在最前面
                                }}
                            />
                        )}
                        <br></br>
                        <br></br>
                        <br></br>


                        {/* <div className='recent_img'>
                        <img className='ca2' src={ca2}></img>
                        <img className='climb' src={climb}></img>
                   </div > */}
                    </div>
                    <img className='ramp' src={ramp}></img>

                    <img
                        src={skateboard}
                        alt="Skateboard"
                        className="skateboard"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                        }}
                    />
                </div>}
            {
                Mobile_mode &&
                <div className='Mobile_about_background'>

                    <Menu></Menu>
                    <img className='about_tittle' src={about_tittle}></img>

                    <div className='Get_know_me_section'>
                        <div class="seperate_line"></div>

                        <div className='Get_know_me_btn' onClick={handle_show_aboutme_description}>Get to know me !</div>
                    </div>
                    <p className={`Aboutme_description ${aboutme_description_show ? 'show' : ''}`}>
                        I am a student at STUST, majoring in CSIE. I love exploring the world of interface and interactive design. Although I don't have much experience in UI/UX, I am committed to learning and improving
                    </p>
                    <img className='Aboutme_img' src={introduce}></img>

                    <div className='Intro_skill_section'>
                        <img className='intro_my_skill_title' src={intro_my_skill_title} alt="My Skills" />
                        <p>
                            <div ref={skillcircleani_Ref} className='skill_circle_ani' />

                        </p>
                    </div>


                </div>

            }
        </div>
    )
}

export default About