import React from 'react';
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap';
import maleTouist from '../assets/images/male-tourist.jpg'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe Now For Latest Updates</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email"/>
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Drop your email here</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTouist} alt=""/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
