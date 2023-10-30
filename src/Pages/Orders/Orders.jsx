import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import banner from '../../assets/images/banner/4.jpg';
import TableRow from "./TableRow";
import Swal from "sweetalert2";
import axios from "axios";
const Orders = () => {
    const [myorders, setOrders] = useState([])

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/order?email=${user?.email}`;

    useEffect(() => {
        axios.get(url,{
            withCredentials: true
        })
        .then(res =>{
            setOrders(res.data)
        })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setOrders(data))


    }, [url])

// handel delete
const hadelDelete = (_id) =>{
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then((result) => {
        if (result.isConfirmed) {
    
      fetch(`http://localhost:5000/order/${_id}`,{
        method : 'DELETE'
      })

      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount>0) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            // remaing
            const remaining = myorders.filter(order => order._id !==_id);
            setOrders(remaining)
          }
 
      })
    }})
}

//handelConfirmOrder
const handelConfirmOrder = (_id) =>{
    fetch(`http://localhost:5000/order/${_id}`,{
        method : 'PATCH',
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({status : 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount< 0) {
            //update state
            const remming = myorders.filter(orders => orders._id !==_id);
            updated.status = "confirm";
            const updated= myorders.find(orders => orders._id ===_id);
            const newOrders = [updated, ...remming];
            setOrders(newOrders)
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

            {/* orders start here */}
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-600 rounded-lg text-lg hont-bold text-white">
                        <tr>
                            <th>
                               Action
                            </th>
                            <th>Order</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                         myorders.map(orders => <TableRow key={orders._id} orders={orders} hadelDelete={hadelDelete} handelConfirmOrder={handelConfirmOrder}></TableRow>)
                       }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Orders;