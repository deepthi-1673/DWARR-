import React from "react";
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg001 from '../assets/images/hero-img001.jpg';
import heroImg002 from '../assets/images/hero-img002.jpg';
import heroImg003 from '../assets/images/hero-img003.jpg';
import worldImg from '../assets/images/world.png';
import experienceImg from'../assets/images/experience.jpg';
import Subtitle from './../shared/Subtitle';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../components/services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/images-gallery/MasonaryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {

    return <>
        {/* hero section start */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Dwarr-The Entry Gatrway'} />
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>BE A TOURIST IN YOUR OWN
                                <span className="highlight"> TOWN</span></h1>
                            <p>Historical Monuments are the representation of India’s tradition and diverse cultural splendour. 
                                These monuments in India are the true guarding pillars of outstanding artistic talent. 
                                India is rich in culture, legacy structures, sanctuaries, posts, and royal residences. 
                                A large portion of the landmarks and fortifications in India reflects the cultural heritage.
                            </p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg001} alt="" />
                        </div>

                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <img src={heroImg003} alt="" controls/>
                        </div>

                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg002} alt="" />
                        </div>

                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/* hero section end*/}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">we offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>

        {/* featured tour section start */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-3">
                        <Subtitle subtitle={'Explore'}/>
                        <h2 className="featured__tour-title">Our featured tours</h2>

                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        {/* featured tour section end */}


        {/*experience section start*/}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'}/>

                            <h2>Dwarr Welcomes You All <br/>To Experience</h2>
                            <p>The History And Beauty Of India
                                <br/>
                                Magic Surrounds You.

                            </p>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>70k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>10k+</span>
                                    <h6>Monuments to Visit</h6>
                                </div>
                                <div className="counter__box">
                                    <span>10k+</span>
                                    <h6>reviews</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>


        {/*experience section end*/}
        {/* gallery section start */}
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={'Galllery'}/>
                        <h2 className="gallery__title">Historic Monuments-Tour Gallery</h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery/>

                    </Col>
                </Row>

            </Container>
        </section>
        {/* gallery section end */}
        {/*testimonial section start */}
        <section>
            <Container >
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className="testimonial__title">What our fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials/>
                    </Col>
                </Row>

                
            </Container>
        </section>
        {/*testimonial section start */}
        {/*Newsletter */}
        <Newsletter/>




    </>
}
export default Home;