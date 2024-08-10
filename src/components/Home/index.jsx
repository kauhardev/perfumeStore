import React from "react";
import { useSelector } from "react-redux";
import line from '../../assets/images/Line 2.png'
import Footer from "../Footer";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Home = () => {
    const { product } = useSelector((s) => s.add);

    const sortedProduct = [...product].sort((a, b) => b._id - a._id);
    localStorage.setItem('product',JSON.stringify(sortedProduct))
  
    // const settings = {
    //   dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //   initialSlide: 0,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true,
    //       },
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
    // };

  return (
    <>
      <div className="py-[40px]">
          <div className="flex items-center justify-between mb-[30px]">
            <img src={line} alt="img" className="w-[40%] " />
            <h1 className="text-white text-4xl font-bold text-center font-mono">NEW IN ENSCENT</h1>
            <img src={line} alt="img" className="w-[40%]" />
        </div>
      <div className="conteiner">
      <div className="bg-[hsla(210,6%,85%,1)] w-full h-[400px] px-[40px] overflow-x-auto">
            <div className="">
            {/* <Slider {...settings}> */}
                <div className="flex items-center justify-between ">
                {sortedProduct.map((el, idx) => (
                <div key={idx} className="flex items-center flex-col gap-1">
                  <img
                    src={el.url}
                    alt={idx + 1}
                    width={300}
                    className=" h-[250px] object-contain mt-10"
                  />
                  <h1 className="flex items-center justify-center text-[25px] font-serif font-semibold">{el.title.slice(0,15)}</h1>
                  <h1 >{el.id}</h1>
                </div>
              ))}
                </div>
            
         {/* </Slider>  */}
            </div>
            
          </div>
      </div>
    </div>

    <Footer/>
    </>
  
  );
};

export default Home;
