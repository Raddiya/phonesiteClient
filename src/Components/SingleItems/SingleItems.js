import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SingleItems = () => {
    const [product, setProduct] = useState({})
    const [reload, setReload] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        axios.get(`/product/${id}`)
            .then(res => {
                setProduct(res.data.result)
                setReload(false)
            });

    }, [id, reload])






    const { name, about, image, price, _id, supplier, quantity } = product;
    console.log(product)
    const handleDeliver = () => {
        const updatedQuntity = parseInt(quantity) > 0 ? parseInt(quantity) - 1 : window.alert('Quantity must be greater than 0')
        axios.put(`/product/${id}`, { quantity: updatedQuntity })
            .then(res => setReload(true));
    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Quantity:{quantity}
                    </Card.Text>
                    <Card.Text>
                        price:{price}
                    </Card.Text>
                    <Card.Text>
                        Supplier: {supplier}
                    </Card.Text>
                    <Card.Text>
                        {about}
                    </Card.Text>

                    <Button onClick={handleDeliver} varient='danger'>Delivered</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleItems;