import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiLogInCircle } from "react-icons/bi";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {


    const handleSubmitLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
    }
    return (
        <div className='w-50 mx-auto shadow-lg p-5 rounded mt-5'>
            <h3 className='text-center text-secondary'>Login Now</h3>
            <Form onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Login <BiLogInCircle />
                </Button>
            </Form>

            <ButtonGroup className='mt-3'>
                <Button variant="info" className='me-3 rounded'><FaGoogle />  Login With Google</Button>
                <Button variant="info" className='me-3 rounded'><FaGithub /> Login With Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;