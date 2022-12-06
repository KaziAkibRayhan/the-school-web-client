import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { MapContainer, Marker, Popup, TileLayer, } from "react-leaflet";

const Blog = () => {
    return (
        <Container className='mt-5'>
            <h3 className='text-center text-secondary mb-4'>Some question and Answer</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. What is cors?</Accordion.Header>
                    <Accordion.Body>
                        (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                        CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p className='text-info'>Why are you using firebase?</p>
                        It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.
                        <p className='text-info mt-2'>What other options do you have to implement authentication?</p>
                        Other ways to authenticate can be through <span className='text-primary'>cards, retina scans, voice recognition, and fingerprints.</span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. What is Node JS? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        <p className='text-info'>What is Node JS?</p>
                        Node.js is an open-source, cross-platform,
                        back-end JavaScript runtime environment
                        that runs on the V8 engine and executes
                        JavaScript code outside a web browser.
                        <p className='text-info mt-2'>How does Node work?</p>
                        It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <div className="container mx-auto mt-5 p-5">
                <MapContainer style={{ width: '60vw', height: '60vh' }} center={[23.814417418340486, 90.41440049990749]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </Container>
    );
};

export default Blog;