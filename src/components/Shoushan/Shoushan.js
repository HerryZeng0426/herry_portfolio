import React, { useState, useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hike6 from '../imgs/hike6.JPG'
import { gsap, selector } from "gsap";
import hike5 from '../imgs/hike5.JPG'
import hike4 from '../imgs/hike4.JPG'
import hike3 from '../imgs/hike3.JPG'
import hike2 from '../imgs/hike2.JPG'
import hike1 from '../imgs/hike1.JPG'
import Page_Transition from '../Page_Transition/Page_Transition'
import Menu from '../Menu/Menu'
import go_WORK from '../imgs/go_WORK.png'
import go_CANADA from '../imgs/go_CANADA.png'
import '../Shoushan/Shoushan.css'
import { useNavigate } from 'react-router-dom';
import where from '../imgs/where.png'
import contact from '../imgs/contact.png'


gsap.registerPlugin(ScrollTrigger);


const Shoushan = () => {

  const navigate = useNavigate()

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

  //管理 Hike1 的動畫效果
  const Shoushan_section1_img_container_Ref = useRef(null)
  const Shoushan_section1_img_Ref = useRef(null)
  let Shoushan_section1_img_yPos = 0

  //管理視窗進到這裡才開始有動畫
  const Shoushan_section1_container_Ref = useRef(null)
  const [isenterShoushan_section1_container, setIsenterShoushan_section1_container] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsenterShoushan_section1_container(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // 當 30% 的 section 進入視窗時觸發
    );

    if (Shoushan_section1_container_Ref.current) {
      observer.observe(Shoushan_section1_container_Ref.current);
    }

    return () => {
      if (Shoushan_section1_container_Ref.current) {
        observer.unobserve(Shoushan_section1_container_Ref.current);
      }
    };
  }, [])
  useEffect(() => {
    const handle_wheel_scroll = (event) => {

      if (!Shoushan_section1_container_Ref) return;
      const container = Shoushan_section1_img_container_Ref.current;
      const image = Shoushan_section1_img_Ref.current;
      if (!container || !image) return;

      const containerHeight = container.clientHeight;
      const imageHeight = image.clientHeight;
      const maxScroll = imageHeight - containerHeight;

      // 調整 y 軸位置（滾輪向上為負，向下為正）
      Shoushan_section1_img_yPos -= event.deltaY * 0.5; // 控制移動速度
      Shoushan_section1_img_yPos = Math.max(-maxScroll, Math.min(0, Shoushan_section1_img_yPos)); // 限制範圍

      // 使用 GSAP 來平滑移動
      gsap.to(image, { y: Shoushan_section1_img_yPos, duration: 0.5, ease: "power2.out" });
    };
    window.addEventListener("wheel", handle_wheel_scroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handle_wheel_scroll);
    };
  }, [isenterShoushan_section1_container])

  //滾動到 Shoushan_imgs_container 會開始照片向上像是階梯移動
  const Shoushan_imgs_container_Ref = useRef(null)

  useEffect(() => {
    const animations = [
      { selector: ".hike2", y: -0 },
      { selector: ".hike3", y: -125 },
      { selector: ".hike4", y: -225 },
      { selector: ".hike5", y: -350 },
      { selector: ".hike6", y: -475 }
    ];

    animations.forEach(({ selector, y }) => {
      gsap.to(selector, {
        y,
        ease: "none",
        scrollTrigger: {
          trigger: ".Shoushan_imgs_container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  const handle_to_canada = () => {
      navigate('/canada')
  }
  const handle_to_work = () => {
    navigate('/work')
  }
  const handle_to_contact = () => {
    navigate('/contact')
  }




  return (
    <div className='shoushan_background'>


      <Page_Transition page_title='Shoushan'></Page_Transition>
      <Menu></Menu>

      <div className='Shoushan_title'>
        <p className="Shoushan_title1">
          No rest until the top , <br />just like life
        </p>
        <p className='Shoushan_title2'>Shoushan, Kaohsiung</p>
        <div class="seperate_line"></div>
      </div>

      <div className='Shoushan_section1_container' ref={Shoushan_section1_container_Ref}>
        <div className='Shoushan_section1_img_container' ref={Shoushan_section1_img_container_Ref}>
          <img src={hike1} className='Shoushan_section1_img' ref={Shoushan_section1_img_Ref}></img>
        </div >

        <div className='Shoushan_section1'>

          <p className='Shoushan_section1_title'>First Hiking</p>
          <p className='Shoushan_section1_text'>
            Shoushan is a well-known mountain in my hometown, Kaohsiung.
            During my first hike, I felt exhausted and nearly gave up,
            but imagining the view at the top kept me going.
            It taught me that stepping out of my comfort zone is both challenging and rewarding.
          </p>
        </div>

      </div>
      <div className='Shoushan_imgs_container'>
        <p className='Shoushan_imgs_title'>Scenery in the frame</p>
        <div className="Shoushan_imgs_container_background"></div>
        <div className='Shoushan_imgs_section'>
          <img className='hike2' src={hike2}></img>
          <img className='hike3' src={hike3}></img>
          <img className='hike4' src={hike4}></img>
          <img className='hike5' src={hike5}></img>
          <img className='hike6' src={hike6} ></img>

        </div>

      </div>


      <div className='where'>
        <img src={go_CANADA} className='go_CANADA' onClick={handle_to_canada}></img>
        <img src={go_WORK} className='go_WORK' onClick={handle_to_work}></img>
        <img src={contact} className='contact_img' onClick={handle_to_contact}></img>
        <img className='where_img' src={where} ></img>
      </div>

    </div>
  )
}

export default Shoushan
