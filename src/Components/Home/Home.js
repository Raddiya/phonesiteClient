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
    <Accordion.Header>What is a Pay Monthly or Contract Phone deal?</Accordion.Header>
    <Accordion.Body>
    A pay monthly deal is where you pay a set amount of money each month for a phone that has a monthly allowance of minutes, texts and data. With pay monthly phones, Normally this ll be over a period of 24 months.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What are the advantages of a Pay Monthly contract?</Accordion.Header>
    <Accordion.Body>
    The main advantage of a pay monthly contract - compared with SIM free or pay as you go - is that you can get one of the latest phones without paying the full amount. The cost of the phone is covered by your monthly payments, and you pay it off over the course of your contract.

 

If you love talking, texting and going online, you can get a bigger bundle of calls, texts and data on a pay monthly contract than a pay as you go one. So you’ll always be connected. And there’s no topping up, just one monthly hassle-free payment by Direct Debit.

 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How do Pay Monthly phone contracts work? </Accordion.Header>
    <Accordion.Body>
    We offer 24 month agreements.
You’ll be charged a fixed monthly fee for:

Line rental to your chosen network

A set amount of minutes, texts and internet data
Some deals require a one-off charge for your phone upfront.

We’ll ask for a credit check before you can take out a contract.

    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      {/* <!-- Ques part end --> */}
    <hr/>
 
    <div class="card text-center mt-5">

        <div class="card-body">
            <h5 class="card-title">For any kind of information contact Us</h5>
            <p class="card-text">Email:psbd.bd@gmail.com</p>
            <p class="card-text">Mirpur ,2,dhaka</p>
        </div>
        <div class="card-footer border-0">
            +8801710854376
        </div>
    </div>
      </div>

  );

};

export default Home;