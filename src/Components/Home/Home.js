import React, { useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';
import './Home.css';
import axios from 'axios';
import { Accordion, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   axios.get('/products')
   .then(res=>{setServices(res.data.result)
  setLoading (false);
  
  })
  }, [loading]);
  if (loading) {
    return <Spinner animation="border" variant="primary" />
}

  return (
    <div>
      <div className="banner">
        <span className='intro' >
          <h3>Your smile is our passion.</h3>
          <p>We are here to help you.</p>
        </span>
      </div>
      {
        <div className="container mb-5">
          <h1 className="text-center text-secondary fw-bold mt-5">
            WHAT WE CAN OFFER
            <span className="d-block services">OUR SERVICES</span>
          </h1>
          <div className="row row-cols-md-2 row-cols-lg-3 g-4">
            {services.map(
              (item, index) =>
                index < 6 && <MyCard key={index} product={item}></MyCard>
            )}
          </div>
        </div>
      }

<div className='text-center'>
    <Link to='/inventory' className='btn btn-primary'>See all inventory</Link>
</div>

      {/* <!-- Ques part start --> */}
    <h2 class="text-center fw-bold m-5">FREQUENTLY ASKED QUESTION</h2>
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      {/* <!-- Ques part end --> */}
    <hr/>
 
    <div class="card text-center mt-5">

        <div class="card-body">
            <h5 class="card-title">For any kind of information contact Us</h5>
            <p class="card-text">Email:dcc.bd@gmail.com</p>

        </div>
        <div class="card-footer border-0">
            +8801710854376
        </div>
    </div>
      </div>

  );

};

export default Home;