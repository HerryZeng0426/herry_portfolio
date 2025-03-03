import React, { useEffect, useState } from 'react';
import './Page_Transition.css'








const Page_Transition = ({ page_title, onAnimationEnd }) => {

    const [animationActive, setAnimationActive] = useState(true);

    useEffect(() => {
        // 動畫持續 1.2 秒後結束，你可以依需求調整時間
        const timer = setTimeout(() => {
            setAnimationActive(false);
            if (onAnimationEnd) onAnimationEnd();
        }, 1500);
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);
    return (
        <div>
            {animationActive && (
                <div className="page_transition_container">
                    <div className="transition_circle">
                        <span className="page_title">{page_title}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Page_Transition
