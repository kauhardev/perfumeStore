import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Search = () => {
  const { search } = useSelector((s) => s.add);
  return (
    <div className="py-[60px]">
      <div className="conteiner">
        <div className="flex items-center flex-wrap gap-[60px]">
          {search.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
