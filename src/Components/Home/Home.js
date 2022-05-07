import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyCard from '../MyCard/MyCard';
import Image from '../Image/smartphone.jpg'
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
   axios.get('/products')
   .then(res=>setServices(res.data.result))
  }, []);
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

      <div className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">WHAT OUR PATIENTS SAYS</h5>
              <p className="card-text">Thisis the only dental clinic I have ever been to where i felt like they were telling me the truth about my teeth and not trying to get money out of me! Dr.Rahman 
              is very gentle and told me excatly what he was doing and was very attentive to my
              needs.</p>
              <p className="card-text">Usually used for the treatment of adolescent patients who will require a more permanent design once they are fully grown. The lifespan of a composite veneer is approximately 4 years. In contrast, a porcelain veneer may only be indirectly fabricated. A full veneer crown is described as “a restoration that covers all the coronal tooth surfaces. Laminate veneer, on the other hand, is a thin layer that covers only the surface of the tooth and is generally used for aesthetic purposes. These typically have better performance and aesthetics and are less plaque retentive.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;