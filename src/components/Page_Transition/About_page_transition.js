import React, { useEffect, useRef, useState } from 'react';
import about_animation from '../Animations/anit_skatejump_about.json'
import lottie from "lottie-web";
import './About_page_transition.css'






const About_page_transition = ({ onAnimationEnd }) => {

    const [about_animationActive, setAbout_animationActive] = useState(true)

    const About_lottie_Container = useRef(null)

    useEffect(() => {
        if(about_animationActive && About_lottie_Container.current){
            const About_anim = lottie.loadAnimation({
                container: About_lottie_Container.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: about_animation,
              });
              // 清除動畫以防止記憶體洩漏
              return () => About_anim.destroy();
        
        }
    },[about_animationActive])

    useEffect(() => {
        const timer = setTimeout(() => {
            setAbout_animationActive(false)
            //如果有調用，就拿來用(setAbout_animationActive(false)時候)
            if (onAnimationEnd) onAnimationEnd()
        }, 2500) 
        //清理函式 當 effect 結束時用來清除先前設定的定時器
        return () => clearTimeout(timer)
    }, [onAnimationEnd])

    return (
        <div>
            {about_animationActive && (
                <div className="about_transition_container">
                    {/* 放在 container 裡，透過絕對定位讓圓圈位於正中央 */}
                    <div className="about_transition_circle"></div>
                    {/* 頁面名稱，獨立於圓圈，不受放大影響 */}
                    <div ref={About_lottie_Container} className='About_anim'></div>
                </div>
            )}
        </div>
    )
}

export default About_page_transition
