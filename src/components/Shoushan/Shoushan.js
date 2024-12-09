import React, { useState , useEffect } from 'react'
import Menu from '../Menu/Menu'
import go_WORK from '../imgs/go_WORK.png'
import go_CANADA from '../imgs/go_CANADA.png'
import first_hiking from '../imgs/first_hiking.png'
import '../Shoushan/Shoushan.css'
import { useNavigate } from 'react-router-dom';
import img3 from '../imgs/first_hiking_img3.png'
import img2 from '../imgs/first_hiking_img2.png'
import img1 from '../imgs/first_hiking_img1.png'
import kh from '../imgs/kh.png'
import kh1_1 from '../imgs/kh1_1.png'
import kh2_1 from '../imgs/kh2_1.png'
import where from '../imgs/where.png'
import contact from '../imgs/contact.png'





const Shoushan = () => {


  const navigate = useNavigate()

  const handle_to_canada = () => {
    navigate('/canada')
  }


  const handle_to_work = () => {
    navigate('/work')
  }
  const handle_to_contact = () =>{
    navigate('/contact')
  }

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


  return (
    <div className='shoushan_background'>
      <Menu></Menu>

      <div className='first_hiking'>

        <img className='first_hiking_img' src={first_hiking}></img>
        <div className='first_hiking_imgs'>
          <img className='first_hiking_img1' src={img1}></img>
          <img className='first_hiking_img2' src={img2}></img>
          <img className='first_hiking_img3' src={img3}></img>
        </div>
      </div>

      <div className='kh'>

        <img className='kh_img' src={kh}></img>
        <div className='kh_container'>
          <img className='kh1_1' src={kh1_1} ></img>
          <img className='kh2_1' src={kh2_1}></img>
        </div>
      </div>

      <div className='where'>
        <img src={go_CANADA} className='go_CANADA' onClick={handle_to_canada}></img>
        <img src={go_WORK} className='go_WORK' onClick={handle_to_work}></img>
        <img src={contact} className='contact_img' onClick={handle_to_contact}></img>
        <img className='where_img' src={where}></img>
      </div>

    </div>
  )
}

export default Shoushan
