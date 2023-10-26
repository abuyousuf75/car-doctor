import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className="md:flex pb-5 gap-14  lg:pt-32 lg:pb-32 pt-10 md:pt-10">
            <div className="md:w-1/2 relative w-full">
                
                <img className='w-3/4 rounded-lg' src={person} alt="" />
                <img className='w-1/2 rounded-lg absolute right-4 border-4 border-[#fff] p-2 bg-[#fff] top-1/2' src={parts} alt="" />
       </div>
           <div className="w-1/2 text-center md:text-start m-auto md:m-0">
                <h3 className='text-[#FF3811] text-xl font-bold mt-14 md:mt-0'>About Us</h3>
                <h2 className='md:text-5xl text-2xl font-bold pt-7 md:pr-10 pb-7 text-[#151515]'>We are qualified & of experience in this field</h2>
                   <div className='text-[#737373]'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='pt-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                   </div>
                   <button className=" mb-5 px-8 py-4 mt-10 rounded-lg text-[#fff]  bg-[#FF3811] ml-4">Get More Info</button>
           </div>
        </div>
    );
};

export default AboutUs;