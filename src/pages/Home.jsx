import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate ();
  const goToProducts = () => {
    navigate("/product")
  }
  return (
    <div>
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "75vh",
        width: "100%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: "column", 
        
      }}>
        <h1 className='font-display flex text-4xl text-amber-600 text-center'>
          Good Food.<samp className=" font-display text-red-700"> Great Mood.  </samp>  
        </h1>
        <div className="flex items-center" >

        <button
        onClick={goToProducts}
        className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-2xl "
      >
        order now
      </button>
     
      </div>
    </div>
     <Footer />
    </div>
    
  );
}

export default Home;
