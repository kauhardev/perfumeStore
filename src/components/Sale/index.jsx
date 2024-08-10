import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi2";


const Sale = () => {
    const {product} = useSelector((s) => s.add)
    const nav = useNavigate()
    return (
        <div className='py-[60px] relative'>
            <a  onClick={() => nav('/')} className="text-4xl text-white font-bold  absolute left-[40px] top-7">
        <HiOutlineArrowLeft />{" "}
      </a>
            <div className="conteiner">
                <div className="flex items-center flex-wrap gap-[50px] mt-[30px]">
{
    product.map((el) => el.price > 270 ? <ProductCard el={el} key={el.id}/> : null)
}
                </div>
            </div>
        </div>
    );
};

export default Sale;