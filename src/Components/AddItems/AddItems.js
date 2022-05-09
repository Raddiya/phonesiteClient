import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const AddItems = () => {
    const [name, setName] = useState('');
    const [supplier, setSupplier] = useState('');
    const [about, setAbout] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [user]=useAuthState(auth)
    const handleAdd = (event) => {
        const email = user.email
        console.log(email)
        event.preventDefault()
        axios.post('/products', { name, about, image, price, quantity, email, supplier })
        .then (res =>console.log (res.data))
    }

    return (
        <div className='container'>
            <Form className='row' onSubmit={handleAdd}>
                <Col md={6}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="Supplier name" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>About</Form.Label>
                        <textarea rows='8' value={about} onChange={(e) => setAbout(e.target.value)} className="form-control" placeholder="About" />
                    </Form.Group>

                </Col>
                <Button variant="primary" type="submit">
                    Add Items
                </Button>
            </Form>
        </div>
    );
};

export default AddItems;