import React, { useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';

const MyItems = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
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

export default MyItems;