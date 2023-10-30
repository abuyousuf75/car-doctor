import { useEffect, useState } from "react";
import ServicesCards from "./ServicesCards";





const Service = () => {
    const [services, setServices] = useState([]);
    const [looding,setLooding] = useState(true);
  

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLooding(false)
        })
      
    },[])

    if (looding) {
        return <div className="conatiner text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    
    return (
        <div className=" lg:pb-32 text-center">
            <h3 className='text-[#FF3811] text-xl font-bold mt-14 md:mt-0'>Service</h3>
            <h2 className="md:text-5xl font-bold">Our Service Area</h2>
            <p className="md:w-[600px] m-auto mt-5 text-lg">The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
               {
                 services.map(service =><ServicesCards key={service._id}service={service}></ServicesCards> )
               }
            </div>
            <div className="text-center md:pt-12 pt-5">
                
                <button className="px-6 py-3 rounded-lg border-[#FF3811] text-lg font-bold border-2 text-[#FF3811]">More Services</button>
               
            </div>
        </div>
    );
};

export default Service;