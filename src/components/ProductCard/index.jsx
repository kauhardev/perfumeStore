import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, deteilsProd } from '../../redux/reducers/productSlice';
import axios from 'axios';
import { addToBasket } from '../../redux/reducers/basketSlice';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({el}) => {
    const dispatch = useDispatch()
const nav = useNavigate()
const {basket} = useSelector((s) => s.bas)

    const deleteProd = async () => {
        const { data } = await axios.delete(
          `https://api.elchocrud.pro/api/v1/1d2af59a43dc4fb96ff0ee7d6237f0db/perfumeStore/${el._id}`
        );
        dispatch(deleteProduct(data));
      };
      const someBasket = basket.some((item) => item.id === el.id);


      const toDeteils = () =>{
        dispatch(deteilsProd(el))
        nav('/deteils')
      }

    return (
        <div className='w-[500px] h-[400px] bg-slate-200 rounded-2xl flex items-center flex-col gap-[10px] p-[30px] relative'>
            <div className="flex items-center justify-between gap-[10px] absolute top-[15px] right-4 text-2xl">
              {
                el.price > 270 ?   <h1 className='bg-red-600 text-white text-[17px] py-[5px] px-[10px] border-2 border-black rounded-3xl'>Sale 20%</h1> : null

              }
                <a onClick={() => dispatch(deleteProd(el._id))} className='text-3xl' ><TiDeleteOutline /> </a>
            </div>
            <img src={el.url} alt="img" width={150} className=' h-[200px]' />
            <h1 onClick={() => toDeteils()} className='text-xl  font-medium'>{el.title} ({el.category})</h1>
            <div className="flex items-center justify-between gap-[10px] relative py-1">
          {el.price > 270 ? 
            <h1 className=" max-[1200px]:text-xl text- font-bold text-[23px] text-red-600 font-mono"> ${Math.floor(el.price / 100 )* 80}</h1>
           : null}
        <h1 className={`${el.price > 270 ? 'font-mono max-[1024px]:text-sm text-xl absolute top-[-10px] right-[-50px] line-through text-gray-600' : 'font-bold text-[23px] font-mono'}`}>${el.price}</h1>
        </div>
            <button onClick={() => dispatch(addToBasket(el)) } className={`py-[12px] px-[32px] bg-gray-500 rounded-xl text-[17px] text-white font-medium uppercase`}> {someBasket ? 'Go to basket' : 'Add To Basket'}</button>
        </div>
    );
};

export default ProductCard;