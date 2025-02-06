import React, { useState, useEffect } from 'react';
import burgermenu_instagram from '../imgs/burgermenu_instagram.png'
import burgermenu_gmail from '../imgs/burgermenu_gmail.png'
import burger_menu_logo_close from '../imgs/burger_menu_logo_close.png'
import burger_menu_logo from '../imgs/burger_menu_logo.png'
import { useNavigate } from 'react-router-dom';
import '../Menu/Menu.css'
import { useLocation } from 'react-router-dom';
import Logo from '../imgs/logo.png'


const Menu = () => {

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
                            location.pathname === '/Childcare' ? 'Work' :
                                location.pathname === '/Metro' ? 'Work' :
                                    location.pathname === '/contact' ? 'Contact' :
                                        location.pathname === '/shoushan' ? 'About' :
                                            location.pathname === '/canada' ? 'About' :
                                                'Logo'; // 預設為 Logo


    const [clickmenuitem, setClickemuitem] = useState(initialState)

    const navigate = useNavigate();


    return (

        <div>

            <div className='Menu'>

                <div
                    className={`LogoWrapper ${clickmenuitem === 'Logo' ? 'active' : ''}`}
                    onClick={() => { setClickemuitem('Logo'); navigate('/herry') }}
                >
                    <img className='Logo' src={Logo} alt='Logo' />
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
                        className={`Burger_home ${clickmenuitem === 'Logo' ? 'Burger_active' : ''}`}
                        onClick={() => { setClickemuitem('Logo'); navigate('/herry') }}
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
    )
}

export default Menu
