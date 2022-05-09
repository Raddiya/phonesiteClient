import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';

const MyItems = () => {
    const [services, setServices] = useState([]);
    const token =localStorage.getItem('auth_token')
    useEffect(() => {
      console.log(token);
      axios.get("myitems",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
        .then((res) => setServices(res.data.result))
    }, [token]);
    return (
        <div className='container'>
            <div className="row row-cols-md-2 row-cols-lg-3 g-4">

            {
            Array.isArray(services) &&  services.map(
              (item, index) =>
                <MyCard key={index} product={item}></MyCard>
            )}
          </div>
        </div>
    );
};

export default MyItems;