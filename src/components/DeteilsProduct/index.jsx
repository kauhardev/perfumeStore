import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { addToBasket } from '../../redux/reducers/basketSlice';


const DeteilsProduct = () => {
    const {deteils} = useSelector((s) =>s.add)
    const {basket} = useSelector((s) => s.bas)
    const nav = useNavigate()
    const dispatch = useDispatch()
    let {title,url,des,rating,price} = deteils
    const allNumbers = [1,2,3,4,5]
    const someBasket = basket.some((item) => item.id === deteils.id);


    return (
        <div className='relative py-[50px]'>
                <a  onClick={() => nav('/product')} className="text-[40px] text-white font-bold  absolute left-[60px] top-7">
        <HiOutlineArrowLeft />{" "}
      </a>
            <div className="conteiner">
                <div className="w-[90%] h-[65vh] mx-auto bg-gray-300 rounded-3xl pt-[80px] px-[80px] flex items-start justify-around">
                    <div className=" relative  ">
                        <div className="  w-[400px] h-[400px] rounded-full bg-[#6960e0] "></div>
                        <img src={url} alt="img"  className=' absolute top-10 left-[50px] w-[300px] h-[400px]' />
                    </div>
                    <div className="flex items-center flex-col gap-[20px] w-[50%]">
                    <div className="flex">
            {
                    allNumbers?.map((num) => (
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <div className="star" style={{
                          background: num <= rating  ? 'rgb(255, 179, 0)' : 'gray'
                      }} key={num}></div>
                                   
                                </div>
                    ))
                  }
                              <h1 className="py-[4px] px-2 rounded-lg text-white bg-[#6960e0] ml-[10px]">{rating}</h1>

            </div>
            <h1 className='text-3xl font-bold font-serif'>{title}</h1>
            <p className='text-xl'> <i>{des}</i></p>
            <div className="flex items-center justify-between gap-[10px] relative py-1">
          {price > 270 ? 
            <h1 className=" max-[1200px]:text-xl text- font-semibold text-[25px] text-red-600 font-mono"> ${Math.floor(price / 100 )* 80}</h1>
           : null}
        <h1 className={`${price > 270 ? 'font-mono max-[1024px]:text-sm text-xl absolute top-[-10px] right-[-50px] line-through text-gray-600' : 'font-semibold text-3xl font-mono'}`}>${price}</h1>
        </div>            <div className="flex items-center justify-between gap-[20px] py-[20px]">
<h1 className='py-[12px] px-[30px] bg-black text-white'>30ml</h1>
<h1 className='py-[12px] px-[30px] bg-white'>50ml</h1>
<h1 className='py-[12px] px-[30px] bg-white'>90ml</h1>

            </div>
            <button onClick={() => dispatch(addToBasket(deteils))}  className={`py-[12px] px-[32px] ${someBasket ? 'bg-red-500' : 'bg-[#6960e0]'} rounded-xl text-[17px] text-white font-medium uppercase`}>{someBasket ? 'Go to basket' : 'Add To Basket'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeteilsProduct;