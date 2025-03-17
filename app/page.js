import Link from "next/link";
import Navbar from "./components/navbar";
import services from "./services";

export default function Home() {
  return (
 <div>
  <Navbar /> 
    
    <div className="home">

    {services.map((item) => (
    <div className="display-items" key={item.id}> 

      <img src={item.image} alt={item.description || "Service image"} className="service-img" /> 
      
     <div className="details"> 
      <h1>{item.heading}</h1>
      <p>{item.description}</p>
     </div>
    </div>
  ))}

    </div>

  </div>
      
  );
}

