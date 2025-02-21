import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import burgermenu_instagram from '../imgs/burgermenu_instagram.png'
import burgermenu_gmail from '../imgs/burgermenu_gmail.png'
import burger_menu_logo_close from '../imgs/burger_menu_logo_close.png'
import burger_menu_logo from '../imgs/burger_menu_logo.png'
import { useNavigate } from 'react-router-dom';
import '../Menu/Menu.css'
import { useLocation } from 'react-router-dom';
import Logo from '../imgs/logo.png'


const Menu = () => {

    const Mobile_mode = useMediaQuery({ maxWidth: 768 })

    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const [isburgermenu_display, setIsburgermenu_display] = useState(false)
    const [isburgermenu_close, setIsburgermenu_close] = useState(false)


    const handle_display_burgermenu = () => {
        setIsburgermenu_display(!isburgermenu_display)
        if (isburgermenu_display) {
            setIsburgermenu_close(true); // 开启退出动画
            setTimeout(() => {
                setIsburgermenu_display(false); // 隐藏菜单
                setIsburgermenu_close(false); // 重置退出状态
                document.body.style.overflow = '';
            }, 1000); // 与退出动画时长一致
            // 菜單關閉時恢復滾動
        }
        else {

            setIsburgermenu_display(true)
            // 菜單打開時禁止滾動
            document.body.style.overflow = 'hidden';
        }
    }
    //防止跳轉頁面時候 還保留 document.body.style.overflow = 'hidden';

    useEffect(() => {
        if (isburgermenu_display) {
            setIsburgermenu_display(false);
            setIsburgermenu_close(false);
            document.body.style.overflow = '';
        }
    }, [location.pathname]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // 滾動事件監聽
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // 顯示菜單
            } else if (isScrolled === true) {
                setIsExiting(true); // 開始退出動畫
                setTimeout(() => {
                    setIsScrolled(false); // 完全隱藏菜單
                    setIsExiting(false); // 重置退出狀態
                }, 120); // 與退出動畫時長一致
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);


    //防止hover時候 重新執行.Burger_menu.enter
    useEffect(() => {
        if (isScrolled) {
            const menu = document.querySelector('.Burger_menu')
            menu.addEventListener('animationend', () => { menu.classList.remove('enter') })
        }

    })


    const initialState =
        location.pathname === '/about' ? 'About' :
            location.pathname === '/work' ? 'Work' :
                location.pathname === '/until' ? 'Work' :
                    location.pathname === '/secura' ? 'Work' :
                        location.pathname === '/chishime' ? 'Work' :
                            location.pathname === '/childcare' ? 'Work' :
                                location.pathname === '/metro' ? 'Work' :
                                    location.pathname === '/contact' ? 'Contact' :
                                        location.pathname === '/shoushan' ? 'About' :
                                            location.pathname === '/canada' ? 'About' :
                                                'Home'; // 預設為 Logo


    const [clickmenuitem, setClickemuitem] = useState(initialState)

    const navigate = useNavigate();

    //跳轉到頁面動畫
    const handle_to_page_animation = (page_tittle, page_src) => {
        setClickemuitem(page_tittle); // 這裡將 `page_tittle` 設為目前的選單狀態

        // 先刪除可能存在的舊動畫元素 , Vercel託管會保留上一個dom，如果按了返回鍵，會保留.circle_fill, .circle_title動畫
        //solution:在 handle_to_work_page 跳轉前刪除舊的動畫元素：
        document.querySelectorAll(".menu_circle_fill, .menu_circle_title").forEach(el => el.remove());

        document.body.style.overflow = "hidden";

        // 記錄狀態 (處理返回鍵)
        sessionStorage.setItem("navigated", "true");

        // 創建填充動畫的圓形
        const circle = document.createElement("div");
        circle.classList.add("menu_circle_fill");

        // 創建動態標題
        const dynamic_title = document.createElement("p");
        dynamic_title.textContent = page_tittle;
        dynamic_title.classList.add("menu_circle_title");

        document.body.appendChild(circle);
        document.body.appendChild(dynamic_title);

        // 啟動動畫
        setTimeout(() => {
            circle.classList.add("active");
            dynamic_title.classList.add("show");
        }, 10);

        // 1.3 秒後跳轉
        setTimeout(() => {
            window.location.href = page_src;
        }, 1300);
    };

    //在返回時 (pageshow 事件) 確保動畫被移除
    // 監聽 `pageshow` 確保返回時清除動畫
    window.addEventListener("pageshow", () => {
        if (sessionStorage.getItem("navigated") === "true") {
            sessionStorage.removeItem("navigated");
            document.body.style.overflow = "auto";

            document.querySelectorAll(".menu_circle_fill, .menu_circle_title").forEach(el => el.remove());
        }
    });


    // 確保從 `page_src` 返回時清除動畫
    window.addEventListener("DOMContentLoaded", () => {
        if (sessionStorage.getItem("navigated") === "true") {
            sessionStorage.removeItem("navigated");
            document.body.style.overflow = "auto";

            document.querySelectorAll(".menu_circle_fill, .menu_circle_title").forEach(el => el.remove());
        }
    });

    return (

        <div>

            {!Mobile_mode && <div>

                <div className='Menu'>

                    <div
                        className={`HomeWrapper ${clickmenuitem === 'Home' ? 'active' : ''}`}
                        onClick={() => { setClickemuitem('Home'); navigate('/herry') }}
                    >
                        <img className='Home' src={Logo} alt='Home' />
                    </div>
                    <div className='right_menu'>

                        <p
                            className={`Work ${clickmenuitem === 'Work' ? 'active' : ''}`}
                            onClick={() => { setClickemuitem('Work'); navigate('/work') }}>
                            Work</p>
                        <p
                            className={`About ${clickmenuitem === 'About' ? 'active' : ''}`}
                            onClick={() => { setClickemuitem('About'); navigate('/about') }}
                        >About</p>
                        <p
                            className={`Contact ${clickmenuitem === 'Contact' ? 'active' : ''}`}
                            onClick={() => { setClickemuitem('Contact'); navigate('/contact') }}
                        >Contact</p>
                    </div>

                </div>


                {/* 滑動頁面時候會出現的漢堡式Menu */}
                {(isScrolled || isExiting) && (
                    // 'open' : 'close' 是管理menu background顏色
                    <div className={`Burger_menu ${isExiting ? 'exit' : 'enter'} ${isburgermenu_display ? 'open' : 'close'}`} onClick={handle_display_burgermenu}>
                        <div className="Burger_menu_content">
                            <img
                                className={`Burger_menu_img ${isburgermenu_display ? 'show' : 'hide'}`}
                                src={burger_menu_logo_close}
                                alt="Menu Logo"
                            />
                            <img
                                className={`Burger_menu_img ${isburgermenu_display ? 'hide' : 'show'}`}
                                src={burger_menu_logo}
                                alt="Close Logo"
                            />
                        </div>
                    </div>
                )}

                {isburgermenu_display && (
                    <div className={`Display_menu ${isburgermenu_close ? 'Display_menu_exit' : 'Display_menu_enter'}`}>

                        <p
                            className={`Burger_home ${clickmenuitem === 'Home' ? 'Burger_active' : ''}`}
                            onClick={() => { setClickemuitem('Home'); navigate('/herry') }}
                        >Home</p>
                        <p
                            className={`Burger_work ${clickmenuitem === 'Work' ? 'Burger_active' : ''}`}
                            onClick={() => { setClickemuitem('Work'); navigate('/work') }}>
                            Work</p>
                        <p
                            className={`Burger_about ${clickmenuitem === 'About' ? 'Burger_active' : ''}`}
                            onClick={() => { setClickemuitem('About'); navigate('/about'); window.scrollTo(0, 0); }}
                        >About</p>

                        <p
                            className={`Burger_contact ${clickmenuitem === 'Contact' ? 'Burger_active' : ''}`}
                            onClick={() => { setClickemuitem('Contact'); navigate('/contact') }}
                        >Contact</p>
                        <div className='Display_menu_seperateline'></div>

                        <div className='Burgermenu_social'>
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=herry20030426@gmail.com'><img className='burgermenu_gmail' src={burgermenu_gmail}></img></a>
                            <a href='https://www.instagram.com/herrynoinspiration/'><img className='burgermenu_instagram' src={burgermenu_instagram}></img></a>

                        </div>
                    </div>
                )}

            </div>
            }

            {Mobile_mode &&
                <div className='Mobile_menu'>


                    <img className='Mobile_Home' src={Logo} alt='Home' onClick={() => {setClickemuitem('Home') ; navigate('/herry')}}/>


                    <div className='Mobile_right_menu'>

                        <div className={`Burger_menu ${isExiting ? 'exit' : 'enter'} ${isburgermenu_display ? 'open' : 'close'}`} onClick={handle_display_burgermenu}>
                            <div className="Burger_menu_content">
                                <img
                                    className={`Burger_menu_img ${isburgermenu_display ? 'show' : 'hide'}`}
                                    src={burger_menu_logo_close}
                                    alt="Menu Logo"
                                />
                                <img
                                    className={`Burger_menu_img ${isburgermenu_display ? 'hide' : 'show'}`}
                                    src={burger_menu_logo}
                                    alt="Close Logo"
                                />
                            </div>
                        </div>

                        {isburgermenu_display && (
                            <div className={`Display_menu ${isburgermenu_close ? 'Display_menu_exit' : 'Display_menu_enter'}`}>

                                <p
                                    className={`Burger_home ${clickmenuitem === 'Home' ? 'Burger_active' : ''}`}
                                    onClick={() => handle_to_page_animation('Home' , '/herry')}
                                >Home</p>
                                <p
                                    className={`Burger_work ${clickmenuitem === 'Work' ? 'Burger_active' : ''}`}
                                    onClick={() => handle_to_page_animation('Work' , '/work')}>
                                    Work</p>
                                <p
                                    className={`Burger_about ${clickmenuitem === 'About' ? 'Burger_active' : ''}`}
                                    onClick={() => {handle_to_page_animation('About' , 'about') ; window.scrollTo(0, 0); }}
                                >About</p>

                                <p
                                    className={`Burger_contact ${clickmenuitem === 'Contact' ? 'Burger_active' : ''}`}
                                    onClick={() => handle_to_page_animation('Contact' , 'contact')}
                                >Contact</p>
                                <div className='Display_menu_seperateline'></div>

                                <div className='Burgermenu_social'>
                                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=herry20030426@gmail.com'><img className='burgermenu_gmail' src={burgermenu_gmail}></img></a>
                                    <a href='https://www.instagram.com/herrynoinspiration/'><img className='burgermenu_instagram' src={burgermenu_instagram}></img></a>

                                </div>
                            </div>
                        )}
                    </div>

                </div>
            }
        </div>
    )
}

export default Menu
