import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/5.jpg';
import  './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {

    const swipper = <>
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper"
            slidesPerView={1}
           
          
        >

            <SwiperSlide>
                <div className="hero rounded-xl h-[450px] md:min-h-[80vh]" style={{ backgroundImage: `url(${banner4})` }}>
                    <div className="hero-overlay overlay rounded-xl"></div>
                    <div className="hero-content text-neutral-content ">
                        <div className="md:w-[450px] md:absolute md:left-20">
                            <h1 className="mb-5 md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="mb-8 text-lg text-[#fff]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                          <div className=''>
                          <button className=" mb-5 px-8 py-4 rounded-lg text-[#fff]  bg-[#FF3811] ml-4">Discover More</button>
                            <button className=" px-8 py-4 rounded-lg text-[#fff] border-2 bg-none ml-5">Latest Project</button>
                          </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="hero rounded-xl h-[450px] md:min-h-[80vh]" style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="hero-overlay overlay rounded-xl"></div>
                    <div className="hero-content text-neutral-content ">
                        <div className="md:w-[450px] md:absolute md:left-20">
                            <h1 className="mb-5 md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="mb-8 text-lg text-[#fff]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className=" px-8 py-4 rounded-lg text-[#fff]  bg-[#FF3811] ml-4">Discover More</button>
                            <button className=" px-8 py-4 rounded-lg text-[#fff] border-2 bg-none ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero rounded-xl h-[450px] md:min-h-[80vh]" style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="hero-overlay overlay rounded-xl"></div>
                    <div className="hero-content text-neutral-content ">
                        <div className="md:w-[450px] md:absolute md:left-20">
                            <h1 className="mb-5 md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="mb-8 text-lg text-[#fff]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className=" px-8 py-4 rounded-lg text-[#fff]  bg-[#FF3811] ml-4">Discover More</button>
                            <button className=" px-8 py-4 rounded-lg text-[#fff] border-2 bg-none ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero rounded-xl h-[450px] md:min-h-[80vh]" style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="hero-overlay overlay rounded-xl"></div>
                    <div className="hero-content text-neutral-content ">
                        <div className="md:w-[450px] md:absolute md:left-20">
                            <h1 className="mb-5 md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="mb-8 text-lg text-[#fff]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className=" px-8 py-4 rounded-lg text-[#fff]  bg-[#FF3811] ml-4">Discover More</button>
                            <button className=" px-8 py-4 rounded-lg text-[#fff] border-2 bg-none ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper></>

    return (
        <div className='w-full relative pt-4 md:pt-0'>
            {swipper}
        </div>
    );
};

export default Banner;