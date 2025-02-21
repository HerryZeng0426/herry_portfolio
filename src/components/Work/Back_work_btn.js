import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import './Back_work_btn.css'











const Back_work_btn = () => {

    const Mobile_mode = useMediaQuery({ maxWidth: 768 })

    const navigate = useNavigate()

    const handleto_work = () => {
        navigate('/work')
    }

    const handle_to_page_animation = (page_tittle, page_src) => {

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

    const [isvisible, setIsvisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                setIsvisible(true);
            } else {
                setIsvisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div>

            {!Mobile_mode && <div>
                <button className={`Back_work_button ${isvisible ? 'show' : ''}`} onClick={handleto_work}>
                    <span className='All_work'>All Work</span>
                </button>
            </div>
            }
            {
                Mobile_mode && <div>
                <button className={`mobile_Back_work_button ${isvisible ? 'show' : ''}`} onClick={() => handle_to_page_animation('Work' , '/work')}>
                    <span className='Mobile_All_work'>All Work</span>
                </button>
            </div>
            }
        </div>

    )
}

export default Back_work_btn
