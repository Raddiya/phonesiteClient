import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import './Checkout.css'

const Checkout = () => {
    const{id} =useParams()
    const [services, setServices] = useState({});
    useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
            const selected =data.find(item=> item.id==id)
            setServices(selected)
        });
    }, [id]);
    console.log(services)
    return (
        <div className='checkout'>
            <Card product={services}></Card>
        </div>
    );
};

export default Checkout;