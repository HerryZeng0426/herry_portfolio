import { React, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import what_service from '../imgs/what_service.png'
import what_your_gmail from '../imgs/what_your_gmail.png'
import what_your_name from '../imgs/what_your_name.png'
import seperate_line from '../imgs/seperate_line.png'
import letmeknow from '../imgs/letmeknow.png'
import work from '../imgs/work.png'
import instagram from '../imgs/contact_instagram.png'
import social from '../imgs/Socail.png'
import gmail_mobile from '../imgs/contact_gmail_mobile.png'
import phone_number_mobile from '../imgs/contact_phone_mobile.png'
import gmail from '../imgs/contact_gmail.png'
import phone_number from '../imgs/contact_phone.png'
import Contact_Info from '../imgs/Contact_Info.png'
import contact_me from '../imgs/contact_me.png'
import Menu from '../Menu/Menu'
import '../Contact/Contact.css'
import emailjs from 'emailjs-com'; // 引入 EmailJS 库
import back_to_main from '../imgs/back_to_main.png'
import my_logo from '../imgs/my_logo.png'
import { use } from 'react';






const Contact = () => {

    const Mobile_mode = useMediaQuery({ maxWidth: 768 })

    const navigate = useNavigate()

    const handle_to_work_page = () => {
        navigate('/work')
    }

    const [issendit, setIssendit] = useState(false)

    const [isckeck_input, setIsckeck_input] = useState(false)

    const [inputNameValue, setInputNameValue] = useState(''); // 定义状态记录输入值

    const [inputGmailValue, setInputGmailNameValue] = useState(''); // 定义状态记录输入值

    const [inputServiceValue, setInputServiceValue] = useState(''); // 定义状态记录输入值

    const handleNameChange = (event) => {
        setInputNameValue(event.target.value); // 更新状态
    };

    const handleGmailChange = (event) => {
        setInputGmailNameValue(event.target.value); // 更新状态
    };

    const handleServiceChange = (event) => {
        setInputServiceValue(event.target.value); // 更新状态
    };

    const handle_submit_value = () => {
        if (inputNameValue.length > 0 && inputGmailValue.length > 0 && inputServiceValue.length > 0) {



            emailjs.send(
                'contact_form', // Service ID
                'new_contact', // Template ID
                {
                    name: inputNameValue,
                    email: inputGmailValue,
                    service: inputServiceValue
                },
                '2lK72btGvnCZabyxo' // 替换为正确的 Public Key
            )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        // 清空输入框
                        setInputNameValue('');
                        setInputGmailNameValue('');
                        setInputServiceValue('');
                        setIsckeck_input(false)

                    },
                    (err) => {
                        console.error('FAILED...', err);
                    }
                );


            console.log('Name : ', inputNameValue)
            console.log('Gmail : ', inputGmailValue)
            console.log('Service : ', inputServiceValue)
            setIssendit(true)

            setIsckeck_input(false)
        }
        else {
            setIssendit(false)
            setIsckeck_input(true)
        }

    }


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

    const handle_call_me = () => {
        window.location.href = "tel:0987887336"
    }


    return (
        <div>

            {!Mobile_mode &&
                <div className='Contact_page'>
                    <button className='back_work_btn' onClick={handle_to_work_page}>
                        <span className='work_page'>Work Page</span>
                        <img className='main_page_logo' style={{ width: '5%' }} src={my_logo}></img>
                    </button>

                    <div className='contact_container'>

                        <div className='Info'>

                            <div className='contact_info'>
                                <img src={contact_me} className='contact_me_img'></img>

                                <img src={Contact_Info}></img>
                                <img src={phone_number} className='phone_number'></img>
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=herry20030426@gmail.com'>
                                    <img src={gmail} className='gmail'></img>
                                </a>
                                <img src={social}></img>
                                <a href='https://www.instagram.com/herrynoinspiration/'>
                                    <img src={instagram} className='instagram'></img>
                                </a>

                            </div>

                        </div>

                        <div className='contact_form'>

                            <img src={work}></img>
                            <img src={letmeknow}></img>
                            <img src={seperate_line}></img>

                            <img src={what_your_name} className='what'></img>
                            <input value={inputNameValue} onChange={handleNameChange} className='answer' placeholder="*"></input>

                            <img src={seperate_line}></img>
                            <img src={what_your_gmail} className='what' ></img>
                            <input value={inputGmailValue} onChange={handleGmailChange} className='answer' placeholder="*"></input>

                            <img src={seperate_line}></img>
                            <img src={what_service} className='what_service'></img>
                            <input value={inputServiceValue} onChange={handleServiceChange} className='answer' placeholder="*"></input>
                            {isckeck_input &&
                                <p className='check_value'>Please check the input value!</p>
                            }
                            {issendit &&
                                <p className='check_value'>Looking forward to our collaboration!</p>
                            }
                            <button className='submit_btn' onClick={handle_submit_value}>
                                <span>Send it</span>
                            </button>
                        </div>
                    </div>

                </div>}

            {Mobile_mode &&

                <div className='Mobile_contact_page'>

                    <button className='Mobile_back_work_btn' onClick={handle_to_work_page}>
                        <span className='Mobile_work_page'>Work Page</span>
                        <img className='main_page_logo' style={{ width: '5%' }} src={my_logo}></img>
                    </button>

                    <div className='Info_container'>

                        <div className='Info_left_section'>
                            <img src={contact_me} className='mobile_contact_me_img'></img>
                        </div>

                        <div className='Info_right_section'>
                            <img src={Contact_Info}></img>

                            <img onClick={handle_call_me} src={phone_number_mobile} className='phone_number'></img>

                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=herry20030426@gmail.com'>
                                <img src={gmail_mobile} className='gmail'></img>
                            </a>

                            <img src={social}></img>

                            <a href='https://www.instagram.com/herrynoinspiration/'>
                                <img src={instagram} className='instagram'></img>
                            </a>

                        </div>
                    </div>

                    <div className='Mobile_contact_form'>

                        <img className='contact_tittle_1' src={work}></img>
                        <img className='contact_tittle_2' src={letmeknow}></img>
                        <img className='Mobile_seperate_line' src={seperate_line}></img>

                        <img className='Mobile_qeus_1' src={what_your_name}></img>
                        <input value={inputNameValue} onChange={handleNameChange} className='answer' placeholder="*"></input>

                        <img className='Mobile_seperate_line' src={seperate_line}></img>
                        <img className='Mobile_qeus_2' src={what_your_gmail} ></img>
                        <input value={inputGmailValue} onChange={handleGmailChange} className='answer' placeholder="*"></input>

                        <img className='Mobile_seperate_line' src={seperate_line}></img>
                        <img className='Mobile_qeus_3' src={what_service} ></img>
                        <input value={inputServiceValue} onChange={handleServiceChange} className='answer' placeholder="*"></input>
                        <img className='Mobile_seperate_line' src={seperate_line}></img>

                        {isckeck_input &&
                            <p className='check_value'>Please check the input value!</p>
                        }
                        {issendit &&
                            <p className='check_value'>Looking forward to our collaboration!</p>
                        }


                    </div>
                    
                    <div className='Mobile_submit_btn_section'>
                        <button className='Mobile_submit_btn' onClick={handle_submit_value}>
                            <span>Send it</span>
                        </button>
                    </div>

                </div>
            }

        </div>
    )
}

export default Contact