import { React, useEffect, useState, useRef } from 'react'
import mountain from '../svgs/mountain.svg'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import canada5 from '../imgs/canada5.JPG'
import canada4 from '../imgs/canada4.JPG'
import canada3 from '../imgs/canada3.JPG'
import canada2 from '../imgs/canada2.jpeg'
import canada1 from '../imgs/canada1.png'
import workshop_3d_img from '../imgs/workshop_3d_img.png'
import workshop_ui_ux_img from '../svgs/workshop_ui_ux_img.svg'
import Me_and_Kevin from '../imgs/Me_and_Kevin.JPG'
import Me_and_uncle from '../imgs/Me_and_uncle.JPG'
import { gsap } from "gsap";
import Canada_main_img from '../imgs/Canada_main_img.JPG'
import Page_Transition from '../Page_Transition/Page_Transition';
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
import sun from '../imgs/Sun.png'
import NEXT from '../imgs/NEXT.png'
import me_and_kevin_together_img from '../imgs/me_and_kevin_together_img.png'
import me_and_kevin from '../imgs/me_and_kevin.png'
import me_designing from '../imgs/me_designing.png'
import '../Canada/Canada.css'

gsap.registerPlugin(ScrollTrigger);







const Canada = () => {

    const navigate = useNavigate()

    // 當組件掛載時滾動到頂部
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //管理放大視窗
    window.addEventListener('mousewheel', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // 管理放大視窗
    window.addEventListener('DOMMouseScroll', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });


    //管理 Canada_main_img_container 的動畫效果
    const Canada_main_img_container_Ref = useRef(null);
    const Canada_main_img_Ref = useRef(null);
    let Canada_main_img_yPos = 0;

    useEffect(() => {
        const handle_wheel_scroll = (event) => {
            const container = Canada_main_img_container_Ref.current;
            const image = Canada_main_img_Ref.current;
            if (!container || !image) return;

            const containerHeight = container.clientHeight;
            const imageHeight = image.clientHeight;
            const maxScroll = imageHeight - containerHeight;

            // 調整 y 軸位置（滾輪向上為負，向下為正）
            Canada_main_img_yPos -= event.deltaY * 0.5; // 控制移動速度
            Canada_main_img_yPos = Math.max(-maxScroll, Math.min(0, Canada_main_img_yPos)); // 限制範圍

            // 使用 GSAP 來平滑移動
            gsap.to(image, { y: Canada_main_img_yPos, duration: 0.5, ease: "power2.out" });
        };
        window.addEventListener("wheel", handle_wheel_scroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handle_wheel_scroll);
        };
    }, [])

    //管理 Me_and_Kevin_img 的動畫效果
    const Me_and_Kevin_img_container_Ref = useRef(null)
    const Me_and_Kevin_img_Ref = useRef(null)
    let Me_and_Kevin_img_yPos = 0
    const Me_and_Kevin_container_Ref = useRef(null)
    const [isenterMe_and_Kevin_container, setIsenterMe_and_Kevin_container] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsenterMe_and_Kevin_container(entry.isIntersecting);
                });
            },
            { threshold: 0.3 } // 當 30% 的 section 進入視窗時觸發
        );

        if (Me_and_Kevin_container_Ref.current) {
            observer.observe(Me_and_Kevin_container_Ref.current);
        }

        return () => {
            if (Me_and_Kevin_container_Ref.current) {
                observer.unobserve(Me_and_Kevin_container_Ref.current);
            }
        };
    }, [])
    useEffect(() => {
        const handle_wheel_scroll = (event) => {
            if (!isenterMe_and_Kevin_container) return;
            const container = Me_and_Kevin_img_container_Ref.current;
            const image = Me_and_Kevin_img_Ref.current;
            if (!container || !image) return;

            const containerHeight = container.clientHeight;
            const imageHeight = image.clientHeight;
            const maxScroll = imageHeight - containerHeight;

            // 調整 y 軸位置（滾輪向上為負，向下為正）
            Me_and_Kevin_img_yPos -= event.deltaY * 0.5; // 控制移動速度
            Me_and_Kevin_img_yPos = Math.max(-maxScroll, Math.min(0, Me_and_Kevin_img_yPos)); // 限制範圍

            // 使用 GSAP 來平滑移動
            gsap.to(image, { y: Me_and_Kevin_img_yPos, duration: 0.5, ease: "power2.out" });
        };
        window.addEventListener("wheel", handle_wheel_scroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handle_wheel_scroll);
        };
    }, [isenterMe_and_Kevin_container])


    //管理 Me_and_uncle_img 的動畫效果
    const Me_and_uncle_img_container_Ref = useRef(null)
    const Me_and_uncle_img_Ref = useRef(null)
    let Me_and_uncle_img_yPos = 0

    //管理視窗進到這裡才開始有動畫
    const Me_and_uncle_container_Ref = useRef(null)
    const [isenterMe_and_uncle_container, setIsenterMe_and_uncle_container] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsenterMe_and_uncle_container(entry.isIntersecting);
                });
            },
            { threshold: 0.3 } // 當 30% 的 section 進入視窗時觸發
        );

        if (Me_and_uncle_container_Ref.current) {
            observer.observe(Me_and_uncle_container_Ref.current);
        }

        return () => {
            if (Me_and_uncle_container_Ref.current) {
                observer.unobserve(Me_and_uncle_container_Ref.current);
            }
        };
    }, [])
    useEffect(() => {
        const handle_wheel_scroll = (event) => {

            if (!isenterMe_and_uncle_container) return;
            const container = Me_and_uncle_img_container_Ref.current;
            const image = Me_and_uncle_img_Ref.current;
            if (!container || !image) return;

            const containerHeight = container.clientHeight;
            const imageHeight = image.clientHeight;
            const maxScroll = imageHeight - containerHeight;

            // 調整 y 軸位置（滾輪向上為負，向下為正）
            Me_and_uncle_img_yPos -= event.deltaY * 0.5; // 控制移動速度
            Me_and_uncle_img_yPos = Math.max(-maxScroll, Math.min(0, Me_and_uncle_img_yPos)); // 限制範圍

            // 使用 GSAP 來平滑移動
            gsap.to(image, { y: Me_and_uncle_img_yPos, duration: 0.5, ease: "power2.out" });
        };
        window.addEventListener("wheel", handle_wheel_scroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handle_wheel_scroll);
        };
    }, [isenterMe_and_uncle_container])


    //管理 點了 What I learned btn 會出現的切換動畫
    const Workshop_section_Ref = useRef(null)
    const [isclick_workshop_btn, setIsclick_workshop_btn] = useState(false)
    const handle_click_workshop_btn = () => {
        setIsclick_workshop_btn(!isclick_workshop_btn)
        //點選 what I learned btn 會跳轉到 Workshop_section 部分 
        if (!isclick_workshop_btn) {
            setTimeout(() => {
                Workshop_section_Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 150); // 稍微延遲一下，確保展開動畫已開始
        }
        else {
            setTimeout(() => {
                Me_and_Kevin_container_Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 150); // 稍微延遲一下，確保展開動畫已開始
        }
    }

    //管理 workshop 照片的動畫效果


    //管理 hover 到 Workshop_section 會出現滑鼠旁的 View Work btn
    const [mouseonworkshop_section, setMouseonworkshop_section] = useState(false);
    const workbtnFollow_Ref = useRef(null);

    const handleMouseMove_Workshop_seciton = (e) => {
        if (workbtnFollow_Ref.current) {
            gsap.to(workbtnFollow_Ref.current, {
                x: e.clientX + 5,
                y: e.clientY + 5,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleMouseEnter_Workshop_seciton = () => {
        setMouseonworkshop_section(true);
        gsap.to(workbtnFollow_Ref.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    };

    // 滑鼠離開時隱藏 Work 圓形
    const handleMouseLeave_Workshop_section = () => {
        setMouseonworkshop_section(false);
        gsap.to(workbtnFollow_Ref.current, { opacity: 0, scale: 0.5, duration: 0.3, ease: "power2.out" });
    };


    //滾動到 Canada_imgs_container 會有的效果
    useEffect(() => {
        const animations = [
          { selector: ".canada1", y: -175 },
          { selector: ".canada3", y: -125 },
          { selector: ".canada5", y: -250 },
        ];
      
        animations.forEach(({ selector, y }) => {
          gsap.to(selector, {
            y,
            ease: "none",
            scrollTrigger: {
              trigger: ".Canada_imgs_container",
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
      

    const handle_to_work_page = () => {
        navigate('/work')
    }
    const handle_to_shoushan = () => {
        navigate('/shoushan')
    }


    return (
        <div className='canada_background'>
            <Page_Transition page_title='Canada'></Page_Transition>
            <Menu></Menu>
            <div className='Canada_title'>
                <p className="Canada_title1">
                    A journey that changed<br />my mind
                </p>
                <p className='Canada_title2'>Montreal, Canada</p>
                <div class="seperate_line"></div>
            </div>

            <div className='Canada_section1_container'>
                <div className='Canada_section1_img_container' ref={Canada_main_img_container_Ref}>
                    <img className='Canada_section1_img' ref={Canada_main_img_Ref} src={Canada_main_img}></img>
                </div>
                <div className='Canada_section1'>
                    <p className='Canada_section1_title'>Inspiration</p>
                    <p className='Canada_section1_text'>
                        In 2024, I traveled alone to Montreal, Canada to visit my uncle and his partner, where the lifestyle and confident people inspired ideas I want to bring back to Taiwan.                    </p>
                </div>
            </div>

            <div className='Canada_section2_container' ref={Me_and_uncle_container_Ref}>
                <div className='Canada_section2'>
                    <p className='Canada_section2_title'>Me & My uncle</p>
                    <p className='Canada_section2_text'>
                        My uncle is a well-rounded and highly capable person. I have benefited greatly from him, and I am truly grateful.                                </p>
                </div>
                <div className='Canada_section2_img_container' ref={Me_and_uncle_img_container_Ref} >
                    <img className='Canada_section2_img' ref={Me_and_uncle_img_Ref} src={Me_and_uncle}></img>
                </div>

            </div>


            <div className='Canada_section3_container' ref={Me_and_Kevin_container_Ref}>
                <div className='Canada_section3_img_container' ref={Me_and_Kevin_img_container_Ref}>
                    <img className='Canada_section3_img' ref={Me_and_Kevin_img_Ref} src={Me_and_Kevin} />
                </div>
                <div className='Canada_section3'>
                    <p className='Canada_section3_title'>Me & Kevin</p>
                    <p className='Canada_section3_text'>
                        Kevin is my uncle's great partner, an outstanding designer, and the UX Director at Shopify.
                        During this trip, I had the opportunity to attend his workshop, which was truly inspiring.
                        I am very grateful for his insights. In the workshop, I learned about :
                        <span className='view_workshop_btn' onClick={handle_click_workshop_btn}>→ What I learned</span>
                    </p>
                </div>
            </div>

            <div className={`Workshop_skills_section ${isclick_workshop_btn ? 'display' : ''}`}
                ref={Workshop_section_Ref} >
                {mouseonworkshop_section &&
                    (<p className="work_follow" ref={workbtnFollow_Ref}>Work</p>)
                }
                <div className='Workshop_ui_ux_section'
                    onClick={handle_to_work_page}
                    onMouseMove={handleMouseMove_Workshop_seciton}
                    onMouseEnter={handleMouseEnter_Workshop_seciton}
                    onMouseLeave={handleMouseLeave_Workshop_section}
                >
                    <img src={workshop_ui_ux_img} className='workshop_ui_ux_img' />
                    <div className='workshop_ui_ux_text_section'>
                        <p className='title'>UI & UX <br></br>Design & Development</p>
                        <p className='description'>I learned how to communicate goals to users clearly and instantly. Without relying on overly complex animations,
                            simply adding appropriate interactive effects can create a clean and user-friendly experience.
                        </p>
                    </div>
                </div>
                <div className='Workshop_3d_section'
                    onClick={handle_to_work_page}
                    onMouseMove={handleMouseMove_Workshop_seciton}
                    onMouseEnter={handleMouseEnter_Workshop_seciton}
                    onMouseLeave={handleMouseLeave_Workshop_section}
                >
                    <div className="Workshop_skills_background"></div>
                    <img src={workshop_3d_img} className='workshop_3d_img' />
                    <div className='workshop_3d_text_section'>
                        <p className='title'>3D Design</p>
                        <p className='description'>I used Blender to bring my ideas to life.This piece was inspired by the night view I saw through the window in Montreal. I imagined a future where the city is surrounded by AI,
                            and we must learn to coexist with it to create a better world.
                        </p>

                    </div>
                </div>
            </div>

            <div className='Canada_imgs_container'>
                <p className='Canada_imgs_title'>Scenery in the frame</p>
                <div className="Canada_imgs_container_background"></div>
                <div className='Canada_imgs_section'>
                    <img className='canada1' src={canada1}></img>
                    <img className='canada2' src={canada2}></img>
                    <img className='canada3' src={canada3}></img>
                    <img className='canada4' src={canada4}></img>
                    <img className='canada5' src={canada5}></img>
                </div>

            </div>

            <div className='mountain'>
                <p onClick={handle_to_shoushan}>Next</p>
                <img src={sun} className='sun'></img>
                <img src={mountain} className='mountain_img'></img>

            </div>
        </div>
    )
}

export default Canada
