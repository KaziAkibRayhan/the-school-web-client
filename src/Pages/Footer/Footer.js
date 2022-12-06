import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdPhone, MdPlace } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";

import Logo from '../../assets/web logo/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
                <p className="about">
                    <span> About the all courses</span>
                    Learn valuable, practical skills from the courses. Explore tech essentials and keep pace with change. Become more focused and productive. Top it off with courses that round out your skills and enrich your day to day.
                    Every course we have is professional, we take every course from small to big with care, so that everyone can benefit from doing his desired course.
                </p>
                <div className="icons">
                    <Link><BsFacebook /></Link>
                    <Link><BsTwitter /></Link>
                    <Link><BsLinkedin /></Link>
                    <Link><BsInstagram /></Link>
                    <Link><BsGithub /></Link>
                </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <div>
                    <p className='bg-dark p-1 rounded-5 me-2 mb-2'><MdPlace className='fs-2 ' /></p>
                    <p><span> Bangla Bazar and  Road 112/b</span> Dhaka, Bangladesh</p>
                </div>
                <div>
                    <p className='bg-dark p-1 rounded-5 me-2 mb-2'><MdPhone className='fs-2' /></p>
                    <p> (+00) 0000 000 000</p>
                </div>
                <div>
                    <p className='bg-dark p-1 rounded-5 me-2'><AiFillMail className='fs-2' /></p>
                    <p><Link to={'/'}> theschool@web.com</Link></p>
                </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <h2> The School Web<span> <img src={Logo} style={{ width: '60px' }} alt="" /> </span></h2>
                <p className="menu">
                    <Link to={'/'}>Home</Link>|
                    <Link to={'/blog'}>Blog</Link>|
                    <Link to={'/faq'}>FAQ</Link>
                </p>
                <p className="name"> The School Web &copy; 2022</p>
            </div>
        </footer>
    );
};

export default Footer;