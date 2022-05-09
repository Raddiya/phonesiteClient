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

      {/* <!-- Ques part start --> */}
    <h2 class="text-center fw-bold m-5">FREQUENTLY ASKED QUESTION</h2>

        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="bs-left mt-2">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Where it is located?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Police Plaza Concord, (Beside Shooting Complex),
                                    Gulshan-1
                                    1213 Dhaka, Dhaka Division, Bangladesh</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    How much is the rent?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Around 4 lakh for hall 1,2.<br/>5.5 lakh for hall 3 4.
                                    Hall 1 has a capacity of 2500. <br/>
                                    Hall 23 about 3000.<br/>
                                    Hall no:4 has 4000 .
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Why we Choose this convention center?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Dhaka International Convention Center (#DICC) is the
                                    perfect
                                    #Venue for you!
                                    We are accepting your booking for #weddings and other programs. We have a
                                    stunning
                                    cityscape view. It will make your #programs more existing and memorable.venues.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    What is the time of opening?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">For any query regarding booking, please call us :
                                    📱 01713334057,
                                    📱 01713334044,
                                    📱 01713334070
                                    Email: info@diccbd.com
                                    Web: www.diccbd.com</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6 ">
                <img src="images/wedding.png" class="img-fluid m-3 w-75" alt=""/>
            </div>
        </div>

 
    {/* <!-- Ques part end --> */}
    <hr/>
    {/* <!-- extra part  --> */}
    <section class="container">
        <h2 class="text-center fw-bold m-5">Google review summary</h2>
        <div class="row align-items-center">

            <div class="col-lg-7">
                <div class="row g-0 align-items-center">
                    <div class="col-1 mb-2 text-center">
                        5
                    </div>
                    <div class="col-11">
                        <div class="progress  mb-2">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 100%"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-0 align-items-center">
                    <div class="col-1 mb-2 text-center">
                        4
                    </div>
                    <div class="col-11">
                        <div class="progress  mb-2">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-0 align-items-center">
                    <div class="col-1 mb-2 text-center">
                        3
                    </div>
                    <div class="col-11">
                        <div class="progress  mb-2">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 25%"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-0 align-items-center">
                    <div class="col-1 mb-2 text-center">
                        2
                    </div>
                    <div class="col-11">
                        <div class="progress  mb-2">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 5%" aria-valuenow="25"
                                aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-0 align-items-center">
                    <div class="col-1 mb-2 text-center">
                        1
                    </div>
                    <div class="col-11">
                        <div class="progress  mb-2">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 10%"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="col-lg-5 bg-dark pt-5 ">
                <div class="row">
                    <h1 class="fs-1 text-center text-light fw-bold">4.5</h1>
                    <div class="container ">
                        <div class="row justify-content-center row-cols-auto">
                            <div class="col"> <i class="fas fa-star text-warning"></i></div>
                            <div class="col"> <i class="fas fa-star text-warning"></i></div>
                            <div class="col"> <i class="fas fa-star text-warning"></i></div>
                            <div class="col"> <i class="fas fa-star text-warning"></i></div>
                            <div class="col"> <i class="fas fa-star-half-alt text-warning"></i></div>

                        </div>
                    </div>
                    <p class="text-muted text-center">
                        (680 people voted)
                    </p>
                </div>


            </div>
        </div>
    </section>

{/* 
    <!-- extra part end --> */}

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