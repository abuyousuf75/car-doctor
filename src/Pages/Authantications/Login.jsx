import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/images/login/login.svg';
import { FaGithub, FaGoogle} from "react-icons/fa";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const {singnInUser,user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
   

    //handelLoginUser
    const handelLoginUser = (event) =>{
        event.preventDefault();
      const form = event.target;
      const userEmail = form.email.value;
      const userPassword = form.password.value;
      const userInfo = {userEmail, userPassword};
      console.log(userInfo);

      if(userPassword.length < 6){
        Swal.fire({
        icon: 'error',
        text: 'Password must be 6 char or more',
            
      })
      form.reset()
      return
    }
      //singnInUser
      singnInUser(userEmail,userPassword)
      .then(res => {
        console.log(res);
        Swal.fire({
            icon: 'success',
            text: 'User login succesfuly',
                
          })

          navigate(location?.state ?location?.state : '/')

        /// get acces token
        const loogdinUser = res.user;
        console.log(loogdinUser);
        const user = {userEmail};
        axios.post('http://localhost:5000/jwt',user,{withCredentials:
    true})
        .then(res => {
            console.log(res.data)
        })

        
      })
      .catch(err => {
        console.log(err.message);
        Swal.fire({
            icon: 'error',
            text: err.message,

          })
          form.reset()
      })
    }

    console.log(user)



    return (
        <div className="grid md:grid-cols-2 pb-10 pt-10 justify-center items-center">
            <div className="dd">
                <img src={signupImg} alt="" />
            </div>
            <div className='mt-4 md:mt-0'>
                <div className=" border-2 rounded-xl">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-4xl font-semibold text-[#444] pt-10 ">LogIn</h1>

                        </div>
                        <div className="card  w-full max-w-sm md:max-w-full">
                            <form onSubmit={handelLoginUser} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Confirm Password</span>
                                    </label>
                                    <input type="password" name ='password' placeholder="Your password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary  border-0 text-white capitalize text-xl bg-[#FF3811]">Log In</button>
                                </div>
                            </form>
                            {/* social signup options */}
                            <div className='text-center'> 
                                <p className='font-semibold'> Or Sign In with</p>
                                <div className='flex gap-4 justify-center pt-10 pb-10'>
                                    <div className="google text-center justify-center items-center flex w-16 h-16 bg-[#F5F5F8] rounded-full">
                                      <FaGoogle className='text-xl'></FaGoogle>
                                    </div>
                                    <div className="google text-center justify-center items-center flex w-16 h-16 bg-[#F5F5F8] rounded-full">
                                     <FaGithub className='text-xl'></FaGithub>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center pb-10'>
                                <h2>Don't have an account?<Link to='/signup'> <span className='text-[#FF3811] font-bold'>Sign Up</span></Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;