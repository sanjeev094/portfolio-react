import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>
                        As a passionate learner just beginning my journey in tech, I'm dedicated
                        to mastering core programming skills and exploring new technologies. I'm
                        currently focused on building a solid foundation in frontend development
                        and honing my problem-solving abilities through Data Structures and
                        Algorithms in C++.
                    </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Sanjeev Singh. All rights reserved. | Designed and Developed by Sanjeev Singh.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;