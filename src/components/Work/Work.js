import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import chishime from '../imgs/chishime.png'
import metro from '../imgs/metro.png'
import childcare from '../imgs/childcare.png'
import Secura_work from '../imgs/Secura_work.png'
import Work_Title from '../imgs/Work_Title.png'
import Menu from '../Menu/Menu'
import '../Work/Work.css'








const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 當組件掛載時滾動到頂部
  }, []);





  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOnContact, setMouseOnContact] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToWork = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    if (isAnimating) {
      console.log("Animation ended, navigating...");
      navigate('/contact'); // 替換為實際路徑
    }
  };
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setMouseOnContact(true);
  };

  const handleMouseLeave = () => {
    setMouseOnContact(false);
  };

  const navigate = useNavigate()

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








  return (
    <div>

      {isAnimating && <div
        className='ani_circle_fill'
        onAnimationEnd={handleAnimationEnd} // 监听动画结束事件
      >
        <p className='ani_circle_fill_contactme'>Contact Me</p >
      </div>

      }
      <div className='Work_background'>

        <Menu></Menu>
        
        <img src={Work_Title} className='Work_Title'></img>

        <div className='works'>
          <div className='Secura_work'>
            <div class="gradient_fill"></div>
            <img src={Secura_work} ></img>
          </div>
          <div className='childcare'>
            <div class="gradient_fill_childcare"></div>
            <img src={childcare} ></img>
          </div>
          <div className='metro'>
            <div class="gradient_fill_metro"></div>
            <img src={metro} ></img>
          </div>
          <div className='chishime'>
            <div class="gradient_fill_chishime"></div>
            <img src={chishime} ></img>
          </div>
        </div>

      </div>

      <div className="To_Be_Continued_Container" onClick={handleToWork}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <p className="To_Be_Continued">
          To Be Continued <span class="dots"></span>
        </p>
        {mouseOnContact && (
          <p className='contact_follow'
            style={{
              top: mousePosition.y + 5, // 动态设置 top
              left: mousePosition.x + 5, // 动态设置 left
            }}
          >
            Contact me
          </p>
        )}

      </div>

    </div>
  )
}

export default Work
