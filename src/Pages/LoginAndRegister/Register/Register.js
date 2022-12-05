import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleSubmitRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const fullName = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileUpdate(fullName, photoURL)
                form.reset();
            })
            .catch(error => console.error(error))
    }

    const profileUpdate = (fullName, photoURL) => {
        const profile = {
            displayName: fullName,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-75 mx-auto shadow-lg p-4 rounded mt-3'>
            <h3 className='text-center text-secondary'>Register Now</h3>
            <Form onSubmit={handleSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="PhotoURL" required />
                </Form.Group>
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
                    Register <BiLogInCircle />
                </Button>
            </Form>
            <p className='mt-3'>Already have an account? <Link className='btn btn-primary' to={'/login'}>Login <BiLogInCircle /></Link></p>
        </div>
    );
};

export default Register;