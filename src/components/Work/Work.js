import { React, useState, useEffect } from 'react'
import Secura_logo from '../imgs/secura_logo.png'
import Until_logo from '../imgs/Until_logo.png'
import Until from '../imgs/Until.png'
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

  //跳轉到頁面動畫
  const handle_to_work_page = (work_title, page_src) => {
    // 先刪除可能存在的舊動畫元素,因為Vercel 託管的應用在返回時可能會保留前一頁的 DOM 狀態,因此 circle_fill 和 circle_title 仍然存在
    document.querySelectorAll(".circle_fill, .circle_title").forEach(el => el.remove());
  
    document.body.style.overflow = "hidden";
  
    // 記錄狀態 (處理返回鍵)
    sessionStorage.setItem("navigated", "true");
  
    // 創建填充動畫的圓形
    const circle = document.createElement("div");
    circle.classList.add("circle_fill");
  
    // 創建動態標題
    const dynamic_title = document.createElement("p");
    dynamic_title.textContent = work_title;
    dynamic_title.classList.add("circle_title");
  
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
  
  // 確保從 `page_src` 返回時清除動畫
  window.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("navigated") === "true") {
      sessionStorage.removeItem("navigated");
      document.body.style.overflow = "auto";
  
      document.querySelectorAll(".circle_fill, .circle_title").forEach(el => el.remove());
    }
  });
  




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
          <div className='Until' onClick={() => handle_to_work_page('Until', './until')}>
            <div className="gradient_fill_until"></div>
            <img src={Until} ></img>
          </div>


          <div className='Secura_work' onClick={() => handle_to_work_page('Secura', '/secura')}>
            <div className="gradient_fill"></div>
            <img src={Secura_work} ></img>
          </div>


          <div className='chishime' onClick={() => handle_to_work_page('Chishime', './chishime')}>
            <div className="gradient_fill_chishime" ></div>
            <img src={chishime} ></img>
          </div>

          <div className='childcare'>
            <div className="gradient_fill_childcare"></div>
            <img src={childcare} ></img>
          </div>

          <div className='metro'>
            <div className="gradient_fill_metro"></div>
            <img src={metro} ></img>
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
