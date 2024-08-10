import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "../BasketCard";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basket } = useSelector((s) => s.bas);
  const nav = useNavigate();
  let totalPrice = basket.reduce((acc, el) => {
    let sale= el.price > 3000
      ? el.price - (el.price / 100) * 20
      : el.price
    return acc + Number(sale) * el.quantity;
  }, 0);

  return (
    <div className="py-[30px]">
      <div className="conteiner">
        {basket.length ? (
          <div className="flex items-start flex-col gap-[20px] ">
            <div className="flex items-start justify-between gap-[40px] text-white">
              <h1 className="text-[28px] font-mono ">TotalPrice:</h1>
              <h1 className="text-2xl font-bold">{totalPrice}$</h1>
            </div>

            <div className="basket relative  shadow-md sm:rounded-lg w-full overflow-y-scroll h-[500px]">
              <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-[16px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400 ">
                  <tr>
                    <th scope="col" className="px-6 py-5 ">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Action
                    </th>
                  </tr>
                </thead>
                {basket.map((el) => (
                  <BasketCard el={el} key={el.id} />
                ))}
              </table>
            </div>
            <div className="flex items-center justify-between gap-[20px]">
              <button onClick={() => nav('/product')}
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Добавить новый продукт
              </button>

              <button onClick={() => nav('/orderTg')}
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col mt-[50px]">
            <h1 className="text-3xl text-white font-semibold">
              Your cart is empty
            </h1>
            <img
              src={`https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp`}
              alt="img"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
