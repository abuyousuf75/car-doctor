import { useLoaderData } from "react-router-dom";
import banner from '../../assets/images/banner/4.jpg'
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id ,img} = service;
    const {user} = useContext(AuthContext);

    //hadelOrderForm
    const hadelOrderForm = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const number = form.number.value;
        const orderHistory = {name,date,email,number, price, _id , title ,img};
        form.reset()
        console.log(orderHistory);

        fetch('http://localhost:5000/order',{
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(orderHistory)

        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Thanks we got your order',
               
              })
           }
        })
    }


    return (
        <div className="md:mt-20 md:mb-20 mt-6 mb-6">
            <div className="hero rounded-xl h-[200px] md:min-h-[300px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay overlay rounded-xl"></div>
                <div className="hero-content text-neutral-content ">
                    <div className=" md:absolute md:left-56">
                        <h1 className="mb-5 md:text-6xl text-2xl font-bold text-white">Check Out</h1>
                    </div>
                </div>
            </div>

            {/* input form start here */}
            <div className="bg-[#F3F3F3] px-24 py-24 rounded-lg md:mt-16 md:mb-10">
                <form onSubmit={hadelOrderForm}>
                   <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
                   <div className="form-control">
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" defaultValue={user?.displayName}  required />
                    </div>
                   <div className="form-control">
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                   <div className="form-control">
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered" defaultValue={user?.email} required />
                    </div>
                   <div className="form-control">
                        <input type="text" name="number" placeholder="Number" className="input input-bordered" required />
                    </div>
                   </div>
                   <div className="form-control mt-6">
                   <input className="bg-[#FF3811] px-8 py-4 text-white rounded-xl btn-block cursor-pointer  mt-10" type="submit" value="Order Confirm" />
                   </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;