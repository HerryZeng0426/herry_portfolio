import React from 'react'
import chishime from '../imgs/chishime.png'
import metro from '../imgs/metro.png'
import childcare from '../imgs/childcare.png'
import Secura_work from '../imgs/Secura_work.png'
import Work_Title from '../imgs/Work_Title.png'
import Menu from '../Menu/Menu'
import '../Work/Work.css'








const Work = () => {
  return (
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
  )
}

export default Work
