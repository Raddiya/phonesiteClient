import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageInventory = () => {
    const [services, setServices] = useState([]);
    const { _id, name, price, quantity, supplier, about } = services

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);


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
                                <td> <Button varient='danger'>Remove</Button> </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;