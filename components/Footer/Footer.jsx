import React from "react";
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"

const quick_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: 'tours',
        display: 'Tours'
    },
];
const quick_links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/Login',
        display: 'Login'
    },
    {
        path: '/register',
        display: 'Register'
    },
];

const Footer = () => {
    const year= new Date().getFullYear
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                    <img  className="flogo" src={logo} alt="" />
                    <p>For More Info</p>
                    <div className="social__links d-flex align-items-center gap-4">
                        <span>
                            <Link to="#"><i class="ri-youtube-fill"></i></Link>
                        </span>
                        <span>
                            <Link to="#"><i class="ri-github-fill"></i></Link>
                        </span>
                        <span>
                            <Link to="#"><i class="ri-facebook-circle-fill"></i></Link>
                        </span>
                        <span>
                            <Link to="#"><i class="ri-instagram-fill"></i></Link>
                        </span>
                    </div>

                </Col>
                <Col lg='3'>
                    <h5 className="footer__link-title">Discover</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick_links.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h5 className="footer__link-title">Quick Links</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick_links2.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer__link-title">Contact</h5>
                    <ListGroup className="footer__quick-links">
                        
                            
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-map-pin-3-fill"></i></span>
                                        Address:
                                    </h6>
                                    <p className="mb-0">Hyderabad,Telangana,India</p>
                                </ListGroupItem>
                                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-mail-open-fill"></i></span>
                                        Email:
                                    </h6>
                                    <p className="mb-0">karanamdeepthi59@gmail.com</p>
                                </ListGroupItem>
                                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-phone-fill"></i></span>
                                        Phone:
                                    </h6>
                                    <p className="mb-0">+91 7330727108</p>
                                </ListGroupItem>
                            
                        
                    </ListGroup>

                </Col>
                <Col lg='12' className="text-center pt-5">
                    <p className="copyright">CopyRight <span>&copy;</span> {year} Design and Developed By KARANAM DEEPTHI.<p>All rights reserved.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
}
export default Footer;