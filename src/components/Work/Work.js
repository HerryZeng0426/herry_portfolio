import { React, useState, useEffect } from 'react'
import { gsap } from 'gsap';
import Page_Transition from '../Page_Transition/Page_Transition'
import work_metro from '../imgs/work_metro.png'
import work_childcare from '../imgs/work_childcare.png'
import work_chishime from '../imgs/work_chishime.png'
import work_secura from '../imgs/work_secura.png'
import Mobile_link from '../imgs/Mobile_link.png'
import until from '../imgs/work_until.png'
import { useMediaQuery } from 'react-responsive';
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


  const Mobile_mode = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    window.scrollTo(0, 0); // 當組件掛載時滾動到頂部
  }, []);

  const [mouseOnWork, setMouseOnWork] = useState(false)
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

  const handleMouseMove_Work = (e) => {
    gsap.to('.work_follow' , {
      x:e.clientX + 5 ,
      y : e.clientY + 5 , 
      duration : 0.7 , 
      ease:'power2.out'
    })
  };

  const handleMouseEnter_Work = () => {
    setMouseOnWork(true);
  };

  const handleMouseLeave_Work = () => {
    setMouseOnWork(false);
  };

  const handleMouseMove_Contact = (e) => {
    gsap.to(".contact_follow", {
      x: e.clientX + 5,
      y: e.clientY + 5,
      duration: 0.7, // 設定動畫持續時間，讓它緩緩跟隨
      ease: "power2.out",
    });
  };

  const handleMouseEnter_Contact = () => {
    setMouseOnContact(true);
  };

  const handleMouseLeave_Contact = () => {
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



  // //跳轉到頁面動畫
  // const handle_to_work_page = (work_title, page_src) => {
  //   // 先刪除可能存在的舊動畫元素 , Vercel託管會保留上一個dom，如果按了返回鍵，會保留.circle_fill, .circle_title動畫
  //   //solution:在 handle_to_work_page 跳轉前刪除舊的動畫元素：
  //   document.querySelectorAll(".circle_fill, .circle_title").forEach(el => el.remove());

  //   document.body.style.overflow = "hidden";

  //   // 記錄狀態 (處理返回鍵)
  //   sessionStorage.setItem("navigated", "true");

  //   // 創建填充動畫的圓形
  //   const circle = document.createElement("div");
  //   circle.classList.add("circle_fill");

  //   // 創建動態標題
  //   const dynamic_title = document.createElement("p");
  //   dynamic_title.textContent = work_title;
  //   dynamic_title.classList.add("circle_title");

  //   document.body.appendChild(circle);
  //   document.body.appendChild(dynamic_title);

  //   // 啟動動畫
  //   setTimeout(() => {
  //     circle.classList.add("active");
  //     dynamic_title.classList.add("show");
  //   }, 10);

  //   // 1.3 秒後跳轉
  //   setTimeout(() => {
  //     window.location.href = page_src;
  //   }, 1300);
  // };

  // //在返回時 (pageshow 事件) 確保動畫被移除
  // // 監聽 `pageshow` 確保返回時清除動畫
  // window.addEventListener("pageshow", () => {
  //   if (sessionStorage.getItem("navigated") === "true") {
  //     sessionStorage.removeItem("navigated");
  //     document.body.style.overflow = "auto";

  //     document.querySelectorAll(".circle_fill, .circle_title").forEach(el => el.remove());
  //   }
  // });


  // // 確保從 `page_src` 返回時清除動畫
  // window.addEventListener("DOMContentLoaded", () => {
  //   if (sessionStorage.getItem("navigated") === "true") {
  //     sessionStorage.removeItem("navigated");
  //     document.body.style.overflow = "auto";

  //     document.querySelectorAll(".circle_fill, .circle_title").forEach(el => el.remove());
  //   }
  // });



  const Works_info = [
    { name: "Until", image: Until, path: "/until", gradientClass: "gradient_fill_until" },
    { name: "Secura", image: Secura_work, path: "/secura", gradientClass: "gradient_fill_secura" },
    { name: "Chishime", image: chishime, path: "/chishime", gradientClass: "gradient_fill_chishime" },
    { name: "Childcare", image: childcare, path: "/childcare", gradientClass: "gradient_fill_childcare" },
    { name: "Metro", image: metro, path: "/metro", gradientClass: "gradient_fill_metro" }
  ]




  return (
    <div>
      <Page_Transition page_title='Work'></Page_Transition>

      {!Mobile_mode && <div>
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
            {Works_info.map((work) => (
              <div
                key={work.name}
                className={work.name}
                onClick={() => navigate(work.path)}
                onMouseMove={handleMouseMove_Work}
                onMouseEnter={handleMouseEnter_Work}
                onMouseLeave={handleMouseLeave_Work}
              >
                <div className={work.gradientClass}></div>
                <img src={work.image} alt={work.name} />
              </div>
            ))}

            {mouseOnWork && (
              <p className="work_follow" >View</p>
            )}
          </div>



        </div>

        <div className="To_Be_Continued_Container" onClick={() => navigate('/contact')}
          onMouseMove={handleMouseMove_Contact}
          onMouseEnter={handleMouseEnter_Contact}
          onMouseLeave={handleMouseLeave_Contact}>
          <p className="To_Be_Continued">
            To Be Continued <span class="dots"></span>
          </p>

          {mouseOnContact && (
            <p className="contact_follow" >Contact me</p>
          )}

        </div>
      </div>}

      {Mobile_mode &&
        <div className='Mobile_work_background'>

          <Menu></Menu>

          <img src={Work_Title} className='Work_Title'></img>

          <div className='All_Work_section'>

            <div className='Work_section' onClick={() => navigate('/until')}>
              <img className='Work_img' src={until}></img>
            </div>

            <div className='Work_section' onClick={() => navigate('/secura')}>
              <img className='Work_img' src={work_secura}></img>
            </div>

            <div className='Work_section' onClick={() => navigate('/chishime')}>
              <img className='Work_img' src={work_chishime}></img>
            </div>

            <div className='Work_section'>
              <img className='Work_img' src={work_childcare} onClick={() => navigate('/childcare')}></img>
            </div>

            <div className='Work_section'>
              <img className='Work_img' src={work_metro} onClick={() => navigate('/metro')}></img>
            </div>



          </div>

        </div>

      }

    </div>
  )
}

export default Work
