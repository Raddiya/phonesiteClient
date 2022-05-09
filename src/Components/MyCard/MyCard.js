
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyCard = (props) => {
  const { name, about, image, price, _id, supplier, quantity } = props.product;
  return (
    <div className='col'>
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
          <Link className='btn btn-primary' to={`/singleitems/${_id}`} >Manage Inventory</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;