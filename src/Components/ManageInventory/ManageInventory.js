import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageInventory = () => {
    const [services, setServices] = useState([]);
    const [reload, setReload] = useState(true);
    const { _id, name, price, quantity, supplier, about } = services

    useEffect(() => {
        axios.get('/products')
        .then(res=>{
            setServices(res.data.result)
            setReload (false)
        })
    }, [reload]);
 const handleRemove=(id)=>{
    axios.delete(`/product/${id}`)
    .then (res=>setReload(true) )  
 } 

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Supplier Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => (
                            <tr>
                                <td> {service.name} </td>
                                <td> {service.supplier} </td>
                                <td> {service.price} </td>
                                <td> {service.quantity} </td>
                                <td> <Button onClick={ ()=> handleRemove(service._id)} varient='danger'>Remove</Button> </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;