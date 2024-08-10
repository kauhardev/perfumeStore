import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { HiOutlineArrowLeft } from "react-icons/hi2";


const Brand = () => {
    const {brandTitle} = useParams()
    const {product} = useSelector((s) => s.add)
    const nav = useNavigate()
    let fillterBrand = product.filter((el) => el.brand.toUpperCase()  === brandTitle)
    console.log(fillterBrand,'bra');
    
    return (
        <div className='py-[60px] relative'>
              <a  onClick={() => nav('/product')} className="text-4xl text-white font-bold  absolute left-[60px] top-7">
        <HiOutlineArrowLeft />{" "}
      </a>
            <div className="conteiner">
                <div className="flex items-center flex-wrap gap-[60px]">
                    {
                        fillterBrand.map((el) => <ProductCard el={el} key={el.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brand;