import { React, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import Page_Transition from '../Page_Transition/Page_Transition'
import work_metro from '../imgs/work_metro.png'
import work_childcare from '../imgs/work_childcare.png'
import work_chishime from '../imgs/work_chishime.png'
import work_secura from '../imgs/work_secura.png'
import Mobile_link from '../imgs/Mobile_link.png'
import work_until from '../imgs/work_until.png'
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
import { use } from 'react';








const Work = () => {
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
    gsap.to('.work_follow', {
      x: e.clientX + 5,
      y: e.clientY + 5,
      duration: 0.7,
      ease: 'power2.out'
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



  const Works_info = [
    { category: 'Development', name: "Until", image: Until, path: "/until", gradientClass: "gradient_fill_until" },
    { category: 'Development', name: "Secura", image: Secura_work, path: "/secura", gradientClass: "gradient_fill_secura" },
    { category: 'Design', name: "Chishime", image: chishime, path: "/chishime", gradientClass: "gradient_fill_chishime" },
    { category: 'Design', name: "Childcare", image: childcare, path: "/childcare", gradientClass: "gradient_fill_childcare" },
    { category: 'Design', name: "Metro", image: metro, path: "/metro", gradientClass: "gradient_fill_metro" }
  ]

  const Works_info_mobile = [
    { category: 'Development', name: "Until", image: work_until, path: "/until" },
    { category: 'Development', name: "Secura", image: work_secura, path: "/secura" },
    { category: 'Design', name: "Chishime", image: work_chishime, path: "/chishime" },
    { category: 'Design', name: "Childcare", image: work_childcare, path: "/childcare" },
    { category: 'Design', name: "Metro", image: work_metro, path: "/metro" }
  ]

  const Work_categories = ['All', 'Design', 'Development']

  const [Work_categoriesindex, setWork_categoriesindex] = useState(0);

  const [hoverIndex, setHoverIndex] = useState(null);

  const [trigger_change_category_anim, setTrigger_change_category_anim] = useState(false)

  const btnRef = useRef(null);

  const [iscategory_btn_animating, setIscategory_btn_animating] = useState(false)

  const Work_categories_changes_Ref = useRef(null);

  //適用於mobile裝置的提示按鈕動畫
  


  const handle_click_categories_btn = () => {
    if (iscategory_btn_animating) return
    setIscategory_btn_animating(true); // 設置為動畫進行中，避免連續點擊

    setWork_categoriesindex((preindex) => (preindex + 1) % Work_categories.length)
    setHoverIndex(null)
    gsap.to(btnRef.current,
      { rotation: "+=360", duration: 1, ease: 'power1.out', onComplete: () => setIscategory_btn_animating(false) });
  }

  const handleCategoryClick = () => {
    setTrigger_change_category_anim(true); // 設定動畫觸發狀態
    handle_click_categories_btn(); // 切換分類
  };

  const handleCategoryClick_mobile = () => {
    setWork_categoriesindex((preindex) => (preindex + 1) % Work_categories.length)
    setTrigger_change_category_anim(true); // 設定動畫觸發狀態

  };

  const Filter_work_categories = Works_info.filter(work =>
    Work_categories[Work_categoriesindex] === "All" || work.category === Work_categories[Work_categoriesindex]
  )

  useEffect(() => {
    if (trigger_change_category_anim && Work_categories_changes_Ref.current) {
      gsap.fromTo(
        Work_categories_changes_Ref.current.children,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.2, ease: "power3.in" } // 更快顯示

      );
      setTrigger_change_category_anim(false); // 動畫執行後重置狀態
    }
  }, [Filter_work_categories, trigger_change_category_anim]); // 只有在點擊後變化時才會播放動畫

  const handle_mouseon_categorybtn = () => {
    setHoverIndex((Work_categoriesindex + 1) % Work_categories.length);
  }

  const handle_mouseleave_categorybtn = () => {
    setHoverIndex(null);
  };

  const Filter_work_categories_mobile = Works_info_mobile.filter(work =>
    Work_categories[Work_categoriesindex] === 'All' || work.category === Work_categories[Work_categoriesindex]
  )


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

          <div className='Work_top_section'>
            <div className='Work_title'>
              <p className='Work_title_1'>Imperfect,<br></br>But Striving.</p>
              <p className='Work_title_2'>Always Learning and Improving.</p>
            </div>

            <div className='Work_category'>
              <div className={`Work_category_btn category${Work_categoriesindex} ${hoverIndex !== null ? "hover_text" : ""}`}
                ref={btnRef}
                onClick={handleCategoryClick}
                onMouseEnter={handle_mouseon_categorybtn}
                onMouseLeave={handle_mouseleave_categorybtn}>
                {hoverIndex !== null ? Work_categories[hoverIndex] : Work_categories[Work_categoriesindex]}
              </div>
            </div>
          </div>

          <div className='works' ref={Work_categories_changes_Ref}>
            {Filter_work_categories.map((work) => (
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

          <div className='Work_top_section'>
            <div className='Work_title'>
              <p className='Work_title_1'>Imperfect,<br></br>But Striving.</p>
              <p className='Work_title_2'>Always Learning and Improving.</p>
            </div>

            <div className='Work_category'>
              <div className={`Work_category_btn category${Work_categoriesindex}`}
                onClick={handleCategoryClick_mobile}
                onMouseEnter={handle_mouseon_categorybtn}
                onMouseLeave={handle_mouseleave_categorybtn}>
                {Work_categories[Work_categoriesindex]}
              </div>

            </div>


          </div>

          <div className="All_Work_section" ref={Work_categories_changes_Ref}>
            {Filter_work_categories_mobile.map((work) => (
              <div key={work.name} className="Work_section" onClick={() => navigate(work.path)}>
                <img className="Work_img" src={work.image} alt={work.name} />
              </div>
            ))}
          </div>

        </div>

      }

    </div>
  )
}

export default Work
