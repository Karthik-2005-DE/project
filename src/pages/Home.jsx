import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ProductPage from './ProductPage';

function Home() {
  return (
    
    <div >
      <h1 className='font-display p-11 text-2xl flex justify-center  '>Your Hunger, Our Delivery</h1>


      <div className='flex justify-center mt-5'>
        <div className="w-[350px] h-[220px] md:w-[500px] md:h-[500px] overflow-hidden rounded-[50%] shadow-xl" >
         <Carousel data-bs-theme="dark" controls={true} indicators={true} interval={1500} >
      <Carousel.Item>
        <img
          className="d-block w-full h-full object-cover"
          src="https://imgs.search.brave.com/FUEuVL0Ks-CA3Dyj3WoXNDMCFfBgRKo9O71lvcEvKbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZGVs/aWNpb3VzLWJ1cmdl/ci1mb29kLW1lbnUt/c29jaWFsLW1lZGlh/LWJhbm5lci10ZW1w/bGF0ZV8xMDYxNzYt/NTczLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA"
          
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-full h-full object-cover"
          src="https://imgs.search.brave.com/zdjKhidxhGFLm-Bz64rxYEzDHkRZwQFKOuXuTWhb6eY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYmlnLWRlYWxz/LWZvb2QtbWVudS1i/YW5uZXItdGVtcGxh/dGVfMjI1OTI4LTg0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA"
         
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-full h-full object-cover"
          src="https://imgs.search.brave.com/3HcfiX8gQM4Mmc5g6HSZoGMO3mAZm0zq335ulhVzLCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/ZGVsaWNpb3VzLWZv/b2QtcmVzdGF1cmFu/dC1zcXVhcmUtZmx5/ZXJfMjMtMjE0OTQ4/NjU0MS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
   
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

      </div>
       <ProductPage />    

   <br /> </div> 
   
  )
}

export default Home