import { React, useEffect, useState } from 'react'
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
import sun from '../imgs/Sun.png'
import NEXT from '../imgs/NEXT.png'
import mountain from '../imgs/mountain.png'
import me_and_kevin_together_img from '../imgs/me_and_kevin_together_img.png'
import me_and_kevin from '../imgs/me_and_kevin.png'
import me_designing from '../imgs/me_designing.png'
import design from '../imgs/design.png'
import Keep_Learning from '../imgs/Keep_Learning.png'
import studying_text from '../imgs/studying_text.png'
import studying_img from '../imgs/studying_img.png'
import Studying from '../imgs/Studying.png'
import Good_vibe from '../imgs/Good_vibe.png'
import universe_text from '../imgs/universe_text.png'
import universe from '../imgs/universe.png'
import blender from '../imgs/blender.png'
import Design_review_cover from '../imgs/Design_review_cover.png'
import A_memorable_trip_text from '../imgs/A_memorable_trip_text.png'
import A_memorable_trip from '../imgs/A_memorable_trip.png'
import '../Canada/Canada.css'








const Canada = () => {

    const navigate = useNavigate()


    const [ishovered, setIshovered] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0); // 當組件掛載時滾動到頂部
    }, []);

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

    const handle_to_next = () => {
        navigate('/shoushan')
    }









    return (
        <div className='canada_background'>
            <Menu></Menu>
            <div className='A_memorable_trip'>
                <img src={A_memorable_trip} className='A_memorable_trip_title'></img>
                <img src={A_memorable_trip_text} className='A_memorable_trip_text'></img>
            </div>

            <div className='Design_review'>
                <img src={Design_review_cover} className='Design_review_cover'></img>
                <img src={blender} className='blender'></img>

                <div className='universe_container'>
                    <img src={universe_text} className='universe_text'></img>
                    <img src={universe} className='universe'></img>
                </div>
            </div>

            <div className='Good_vibe'>
                <img src={Good_vibe} className='Good_vibe_title'></img>
                <img src={Studying} className='Studying'></img>

                <div className='Studying_container'>
                    <img src={studying_text} className='Studying_text'></img>
                    <img src={studying_img} className='studying_img'></img>
                </div>
            </div>

            <div className='Keep_Learning'>
                <img src={Keep_Learning} className='Keep_Learning_title'></img>
                <img src={design} className='design' ></img>

                <div className='design_container'>
                    <img src={me_and_kevin} className='me_and_kevin'></img>
                    <img src={ishovered ? me_and_kevin_together_img : me_designing} className='me_designing'
                        onMouseEnter={() => setIshovered(true)}
                        onMouseLeave={() => setIshovered(false)}></img>
                </div>
            </div>

            <div className='mountain'>
                <img src={NEXT} className='NEXT' onClick={handle_to_next}></img>
                <img src={sun} className='sun'></img>
                <img src={mountain} className='mountain_img'></img>

            </div>
        </div>
    )
}

export default Canada
