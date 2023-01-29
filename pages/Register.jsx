import React, { useState } from "react";
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import register from '../assets/images/register.jpg';
import userIcon from '../assets/images/user.png';
const Register = () => {

    const [credentials, setCredentials] = useState({
        username:undefined,
        email: undefined,
        password: undefined,
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))

    };
    const handleClick = e => {
        e.preventdefault()
    }
    return <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <img src={register} alt="" />

                        </div>
                        <div className="login__form">
                            <div className="user">
                                <img src={userIcon} alt="" />
                            </div>

                            <h2>Register</h2>
                            <Form  onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                </FormGroup>
                                <Button className="btn secondary__btn auth__btn" type="submit">Login</Button>
                            </Form>
                            <p>Already have an account?<Link to='/login'>Create Account</Link></p>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
}
export default Register;