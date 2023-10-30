import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServicesCards = ({ service }) => {
    const { img, description ,title,price,_id} = service;
    return (
        <div className="card  border-2">
            <figure className="px-6 cw pt-10">
                <img src={img} alt="services" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl font-bold text-[#444] ">{title}</h2>
               <div className="flex justify-between mt-2 text-xl font-bold text-[#FF3811]">
               <p className="card-title ">${price}</p>
               <Link to={`services/${_id}`}>
                   <FaArrowRight></FaArrowRight>
               </Link>
               </div>
            </div>
           
        </div>
    );
};

export default ServicesCards;