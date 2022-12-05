import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiLogInCircle } from "react-icons/bi";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Login = () => {
    const { googleSignIn, githubSignIn, signIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const providerGoogle = new GoogleAuthProvider()
    const providerGithub = new GithubAuthProvider()

    const handleGoogleLogin = () => {
        googleSignIn(providerGoogle)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                setError('')
                toast("Successfully Login !")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGithubLogin = () => {
        githubSignIn(providerGithub)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                setError('')
                toast("Successfully Login !")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
                setError('')
                toast("Successfully Login !")
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
                toast("email or password error! Make sure email and password.")
            })
    }
    return (
        <Container className='w-70 mx-auto shadow-lg p-5 rounded mt-4'>
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
                <p className='text-danger fw-bold'>
                    {error}
                </p>
                <Button variant="success" type="submit">
                    Login <BiLogInCircle />
                </Button>
            </Form>
            <ButtonGroup className='mt-3'>
                <Button onClick={handleGoogleLogin} variant="info" className='me-3 rounded'><FaGoogle />  Login With Google</Button>
                <Button onClick={handleGithubLogin} variant="info" className='me-3 rounded'><FaGithub /> Login With Github</Button>
            </ButtonGroup>
            <p className='mt-3'>Don't have an account? <Link className='btn btn-primary' to={'/register'}>Register <BiLogInCircle /></Link></p>
        </Container>
    );
};

export default Login;