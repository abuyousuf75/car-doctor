import { Link } from 'react-router-dom';
import signupImg from '../../assets/images/login/login.svg';
import { FaGithub, FaGoogle} from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
const {creteUsers} = useContext(AuthContext);

// for all information users
const handelSingUpUser = (event) =>{
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    const userInfo = {userName, userEmail, userPassword};
    console.log(userInfo);

    /// befor send info some authantications
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(userPassword.length < 6){
        Swal.fire({
        icon: 'error',
        text: 'Password must be 6 char or more',
    
      })
      return
    } else if (!passwordRegex.test(userPassword)) {
        Swal.fire({
            icon: 'error',
            text: 'Please give an strong password',
        
          })
          return
    } 

    /// funtion for crete user

    creteUsers(userEmail, userPassword)
    .then(res => {
        console.log(res.user);
        Swal.fire({
            icon: 'success',
            text: 'User creted sucessfuly'
        
          })
    })
    .catch(err => {
        console.log(err.message);
        Swal.fire({
            icon: 'error',
            text: err.message
        
          })
          return
    })
   form.reset()
}



    return (
        <div className="grid md:grid-cols-2 pb-10 pt-10 justify-center items-center">
            <div className="dd">
                <img src={signupImg} alt="" />
            </div>
            <div className='mt-4 md:mt-0'>
                <div className=" border-2 rounded-xl">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-4xl font-semibold text-[#444] pt-10 ">Sign Up</h1>

                        </div>
                        <div className="card  w-full max-w-sm md:max-w-full">
                            <form className="card-body" onSubmit={handelSingUpUser}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="Your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Confirm Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="Your password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary  border-0 text-white capitalize text-xl bg-[#FF3811]">Sign Up</button>
                                </div>
                            </form>
                            {/* social signup options */}
                            <div className='text-center'> 
                                <p className='font-semibold'> Or Sign Up with</p>
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
                                <h2>Already have an account?<Link to='/login'> <span className='text-[#FF3811] font-bold'>Login</span></Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;