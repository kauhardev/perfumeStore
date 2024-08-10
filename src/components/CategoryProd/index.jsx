import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const CategoryProd = () => {
    const nav = useNavigate()
  const { categTitle } = useParams();
  const { product } = useSelector((s) => s.add);
  let filterCat = product.filter((el) => el.category === categTitle);

  return (
    <div className="py-[80px] relative">
      <a  onClick={() => nav('/product')} className="text-4xl text-white font-bold  absolute left-[60px] top-5">
        <HiOutlineArrowLeft />{" "}
      </a>

      <div className="conteiner">
        <div className="flex items-center flex-wrap  justify-between  gap-[30px]">
          {filterCat.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProd;
