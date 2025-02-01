import React from 'react'








const Chishime = () => {
  return (
    <div>
          <Back_work_btn></Back_work_btn>
            <Menu></Menu>

            <div className='Title'>
                <div className='Title_leftsection'>
                    <p className='Project_name'>Until Android ver.</p>
                    <p className='Project_description'>
                        Until is an <a href='https://apps.apple.com/us/app/until/id1533755230'><span className='Highlight_text'
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>iOS application</span>
                        </a> created by the brilliant designer Kevin Clark in Montreal. He graciously granted me the honor of designing its Android version, which has been a truly rewarding experience for me.
                        Until is an app that helps you count down to the important moments in your life. You can add multiple events and track them effortlessly from your home screen or smartwatch.
                    </p>
                    <div
                        className={`until_ios_follow ${mouseoniosapp ? 'show' : ''}`}
                        style={{
                            top: `${mousePosition.y + 10}px`, // 距离鼠标稍下
                            left: `${mousePosition.x + 10}px`, // 距离鼠标稍右
                        }}
                    >
                        Until
                    </div>
                </div>
                <div className='Title_rightsection'>
                    <div className='Project_info'>
                        <p className="Project_info_label slide-in-left">Role</p>
                        <p className="Project_info_value slide-in-left">{Project_info.role}</p>
                        <p className="Project_info_label slide-in-right">Credits</p>
                        <p className="Project_info_value slide-in-right">{Project_info.credit}</p>
                        <p className="Project_info_label slide-in-left">Location & year</p>
                        <p className="Project_info_value slide-in-left">{Project_info.location_year}</p>
                    </div>
                </div>
            </div>


            <div className='Display_device'
                onMouseEnter={() => setDisplay_device_ishoverd(true)}
                onMouseLeave={() => setDisplay_device_ishoverd(false)}>

                <div className='Display_leftpage_android'>
                    <img className='Display_twosides_device_android' src={Until_sreenshot1}></img>
                </div>
                <div className='Display_mainpage_android'>
                    <img className='Display_mainpage_device_android' src={Until_sreenshot3}></img>
                </div>

                <div className='Display_rightpage_android'>
                    <img className='Display_twosides_device_android' src={Until_sreenshot2}></img>
                </div>

            </div>

            <div className='Background_section'>

                <p className='Background_title'>Background Design</p>
                <p className='Background_description'>I designed background illustrations transitioning from sunrise to midnight to better convey the atmosphere of waiting.</p>
                <div class="Wireframe_mainpage_title_underline"></div>

              <div className='Display_background_section'>
                    <img className='Background_img_background' src={Background_img_background}></img>
                    
                   <div className='Until_background_img'>
                        <img className='Until_background Until_background1' src={Until_background1}></img>
                        <img className='Until_background Until_background2' src={Until_background2}></img>
                        <img className='Until_background Until_background3' src={Until_background3}></img>
                        <img className='Until_background Until_background4' src={Until_background4}></img>
                        <img className='Until_background Until_background5' src={Until_background5}></img>
                   </div>
              </div>

            </div>

    </div>
  )
}

export default Chishime
