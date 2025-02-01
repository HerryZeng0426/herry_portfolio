import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Back_work_btn.css'









const Back_work_btn = () => {

    const navigate = useNavigate()

    const handleto_work = () => {
        navigate('/work')
    }

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

            <button className={`Back_work_button ${isvisible ? 'show' : ''}`} onClick={handleto_work}>
                <span className='All_work'>All Work</span>
            </button>

        </div>

    )
}

export default Back_work_btn
