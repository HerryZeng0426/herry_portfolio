import React, { useEffect, useState } from 'react';
import './Page_Transition.css'








const Page_Transition = ({ page_title, onAnimationEnd }) => {

    const [animationActive, setAnimationActive] = useState(true);

    useEffect(() => {
        // 動畫持續 1.2 秒後結束，你可以依需求調整時間
        const timer = setTimeout(() => {
            setAnimationActive(false);
            if (onAnimationEnd) onAnimationEnd();
        }, 1800);
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);
    return (
        <div>
            {animationActive && (
                    <div className="page_transition_container">
                    {/* 放在 container 裡，透過絕對定位讓圓圈位於正中央 */}
                    <div className="transition_circle"></div>
                    {/* 頁面名稱，獨立於圓圈，不受放大影響 */}
                    <p className="page_title">{page_title}</p>
                  </div>
            )}
        </div>
    )
}

export default Page_Transition
