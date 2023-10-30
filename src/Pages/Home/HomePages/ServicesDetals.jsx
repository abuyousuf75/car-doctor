import { Link, useLoaderData } from "react-router-dom";
import banner from '../../../assets/images/banner/4.jpg'



const ServicesDetals = () => {
    const allInfo = useLoaderData();
    const {img,description,price,facility,title,_id} = allInfo;
   
    
    return (
        <div className="md:pt-12 pb-10 md:mb-32 pt-5">
          <div className="hero rounded-xl h-[200px] md:min-h-[300px]" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay overlay rounded-xl"></div>
                    <div className="hero-content text-neutral-content ">
                        <div className=" md:absolute md:left-56">
                            <h1 className="mb-5 md:text-6xl text-2xl font-bold text-white">Service Details</h1>
                           
                        </div>
                    </div>
                </div>
            {/* services details info start here */}
        <div className="w-full md:flex mt-32 gap-6">
            <div className=" md:w-3/4 rounded-lg">
                <img className="rounded-lg  w-4/5" src={img} alt="sevice img" />
                <h2 className="mt-10 text-4xl font-bold">{title}</h2>
            </div>
            <div className="border md:w-1/4 bg-[#F3F3F3] px-6 py-4 rounded-xl">
                <h2 className="text-2xl font-bold">Services</h2>
                <ul className="pt-2">
                    <li className="bg-[#fff] mt-4 mb-4 p-4 text-lg font-bold rounded-lg hover:bg-[#FF3811] hover:text-white cursor-pointer">Full Car Repair</li>
                    <li className="bg-[#fff] mt-4 mb-4 p-4 text-lg font-bold rounded-lg hover:bg-[#FF3811] hover:text-white cursor-pointer">Engine Repair</li>
                    <li className="bg-[#fff] mt-4 mb-4 p-4 text-lg font-bold rounded-lg hover:bg-[#FF3811] hover:text-white cursor-pointer">Automatic Services</li>
                    <li className=" rounded-lg hover:bg-[#FF3811] hover:text-white cursor-pointer bg-[#fff] mt-4 mb-4 p-4 text-lg font-bold">Automatic Services</li>
                    <li className="bg-[#fff] mt-4 mb-4 p-4 text-lg font-bold rounded-lg hover:bg-[#FF3811] hover:text-white cursor-pointer">Battery Charge</li>
                </ul>
            </div>
        </div>
        {/* service info */}
        <div className="w-full md:flex mt-10 gap-6 relative">
            <div className="md:w-3/4 rounded-lg">
                <p className="md:pr-12">{description}</p>
            </div>
            <div className="border md:w-1/4 bg-[#000] mt-10 md:mt-0 px-6 py-4 rounded-xl md:absolute right-0 text-white">
                <h2 className="text-xl font-bold ">Price : $ {price}</h2>
               <Link to={`/checkout/${_id}`}>
               <button className="w-full bg-[#FF3811] mt-5 mb-5 px-8 py-4 rounded-xl font-bold">Proceed Checkout</button>
               </Link>
            </div>
        </div>

        </div>
    );
};

export default ServicesDetals;