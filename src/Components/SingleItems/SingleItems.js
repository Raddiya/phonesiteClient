import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SingleItems = () => {
    const [product, setProduct] = useState({})
    const [add, setAdd] = useState('')
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
    const handleAdd = () => {
        if(parseInt(add)<=0){
            return window.alert('must be positive number');
        }
        const updatedQuntity = parseInt(quantity) + parseInt(add)
        axios.put(`/product/${id}`, { quantity: updatedQuntity })
            .then(res =>{
                setReload(true)
                setAdd('')
            });
    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Quantity:{parseInt(quantity)>0?quantity:'sold out'}
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
                    <div className='mt-4'>
                    <input type={'number'} onChange={(e)=>setAdd(e.target.value)}/>
                    <Button onClick={handleAdd} varient='success'>Add quantity</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleItems;