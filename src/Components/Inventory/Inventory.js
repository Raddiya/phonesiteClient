import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';

const Inventory = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      axios.get('/products')
   .then(res=>setServices(res.data.result))
    }, []);
    return (
        <div className='container'>
            <div className="row row-cols-md-2 row-cols-lg-3 g-4">
            {services.map(
              (item, index) =>
                <MyCard key={index} product={item}></MyCard>
            )}
          </div>
        </div>
    );
};

export default Inventory;