import React from 'react';
import foto from '../Landing Page/hero-img.png.png';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
    function handleClick(e) {
        navigate('/createProduct');
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Simple header</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                <section className="section-1" style={{ display: 'flex' }}>
                    <div className="margin">
                        <h1 className="h1">Better Solutions For Your <br />Business<br /></h1>
                        <p className="text">We are team for talented designers making website with<br />Bootsrap</p>
                        <div className="button1">
                            <Button className="button" onClick={handleClick} target='_blank'>Get Started</Button>
                            <Button className="watch-video" onClick={showModal} >Watch Video</Button>
                        </div>
                        <img src={foto} alt="foto Alterra" />
                    </div>
                </section>
            </div>
            <div>
                <section className="section-2">
                    <div className="margin">
                        <h4 className="h4">Join Our Newsletter</h4>
                        <p className="paragraph">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <div className="subscribe">
                            <input className="box" type="text" id="text" required />
                            <Button className="button-3">subscribe</Button>
                        </div>
                    </div>
                </section>
            </div>
            <section className="footer-main">
                <div className="row">
                    <div className="footer-col">
                        <h4 className="header-footer">ARSHA</h4>
                        <span className="span-footer">A108 Adam Street<br /> New York, NY 535022<br />United States<br /><br /><b>Phone:
                        </b>+1 5589 55488
                            55<br /><b>Email: </b>info@example.com</span>
                    </div>
                </div>
                <div className="footer-col">
                    <p className="text-footer">Useful Links</p>
                    <div className="link-items">
                        <a className="links" href="#">Home</a><br />
                        <a className="links" href="#">About us</a><br />
                        <a className="links" href="#">Services</a><br />
                        <a className="links" href="#">Terms of Service</a><br />
                        <a className="links" href="#">Privacy policy</a>
                    </div>
                </div>
                <div className="footer-col">
                    <p className="text-footer">Our Services</p>
                    <div className="link-items">
                        <a className="links" href="#">Web Design</a><br />
                        <a className="links" href="#">Web Development</a><br />
                        <a className="links" href="#">Product Management</a><br />
                        <a className="links" href="#">Marketing</a><br />
                        <a className="links" href="#">Graphic Design</a>
                    </div>
                </div>
                <div className="footer-col">
                    <p className="text-footer2">Our Social Networks</p>
                    <span className="header-footer2">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                        valies</span>
                </div>
                <div className="medsos-links">
                    <div className="shape" href="#"></div>
                    <div className="shape" href="#"></div>
                    <div className="shape" href="#"></div>
                    <div className="shape" href="#"></div>
                    <div className="shape" href="#"></div>
                </div>
            </section>

            <div className="footer-2-texts">
                <p className="footer1">&copy;copyright <b>Arsha</b>. All Rights Reserved</p>
                <p className="footer2">Designed by <span>BoostrapMade</span></p>
            </div>

            {/* Modal */}
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p><b>Welcome to Our Page!</b></p>
            </Modal>
        </div>
    );
}

export default LandingPage;
