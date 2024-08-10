import axios from "axios";
import React, { useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import range from "../../assets/images/range.png";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, sortProduct } from "../../redux/reducers/productSlice";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { product } = useSelector((s) => s.add);
  const dispatch = useDispatch();
  const nav = useNavigate()

  const getProduct = () => {
    return async (dispatch) => {
      const res = await axios.get(
        `https://api.elchocrud.pro/api/v1/1d2af59a43dc4fb96ff0ee7d6237f0db/perfumeStore`
      );
      const { data } = res;
      dispatch(createProduct(data));
    };
  };

  console.log(product, "da");

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className=" flex justify-between gap-[80px]">
      <div className=" sticky top-[20px] h-full w-[500px] bg-gray-500 p-[40px] border-r-[25px] flex items-start flex-col gap-[30px] ">
        <div className="flex items-start flex-col gap-[20px]">
          <h1 className="text-white font-bold text-3xl">CATEGORY</h1>
          <h1 onClick={() => nav('/category/male')} className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> MALE PERFUMES{" "}
          </h1>
          <h1 onClick={() => nav('/category/female')} className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> FEMALE PERFUMES{" "}
          </h1>
          <h1 onClick={() => nav('/category/uni')} className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> UNISEX{" "}
          </h1>
        </div>

        <div className="flex items-start flex-col gap-[20px]">
          <h1 className="text-white font-bold text-3xl">PRICE</h1>
          <img src={range} alt="img" />
          <div className="flex items-center justify-between gap-[30px] text-white">
            <h1 className=""> Price:0-25.000</h1>
            <h1 className="font-bold">Filter</h1>
          </div>
        </div>
        <div className="flex items-start flex-col gap-[20px]">
          <h1 className="text-white font-bold text-3xl">BRAND</h1>
          <h1 onClick={() => nav('/brand/DIOR')} className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight />
            DIOR{" "}
          </h1>
          <h1  onClick={() => nav('/brand/VERSACE')}className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> VERSACE
          </h1>
          <h1 onClick={() => nav('/brand/PRADA')} className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> PRADA{" "}
          </h1>
          <h1  onClick={() => nav('/brand/TOM FORD')}className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> TOM FORD{" "}
          </h1>
        </div>
        <div className="flex items-start flex-col gap-[20px]">
          <h1 className="text-white font-bold text-3xl">SORT</h1>
          <select onChange={(e) => dispatch(sortProduct(e.target.value))} className="py-[12px] px-[32px] bg-slate-400 text-white outline-none rounded-xl">
            <option value="" >SORT PRODUCT</option>
            <option value="cheap">Дешевые</option>
              <option value="expensive">Дорогие</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>

          </select>

        </div>
        <div className="flex items-start flex-col gap-[20px]">
          <h1 className="text-white font-bold text-3xl">TYPE</h1>
          <h1 className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight />
            ELIXIR{" "}
          </h1>
          <h1  className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> COLOGNE
          </h1>
          <h1  className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> PERFUME{" "}
          </h1>
          <h1 className="flex items-center justify-between gap-[20px] text-xl text-white">
            <FaCaretRight /> EAU DE TOILETTE{" "}
          </h1>
        </div>
      </div>
     
      <div className="conteiner">
          <div className=" py-[50px] flex  items-center flex-wrap  gap-[80px] ">
{
    product.map((el) => <ProductCard el={el} key={el.id}/>)
}
          </div>
        </div>
      </div>
  );
};

export default Product;
