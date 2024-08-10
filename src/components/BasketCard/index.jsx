import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteBasket,
  minusBasket,
  plusBasket,
} from "../../redux/reducers/basketSlice";

const BasketCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="px-6 py-4 font-semibold text-gray-900 font-serif ">
          <div className="flex items-start flex-col gap-[10px]">
            <img
              src={el.url}
              className="w-16 md:w-32 max-w-full max-h-full"
              alt="image"
              width={90}
            />
            <h1> {el.title}</h1>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(minusBasket(el))}
              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-500 dark:focus:ring-gray-500"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <div>
              <h1 className="bg-gray-50 text-center w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {el.quantity}{" "}
              </h1>
            </div>
            <button
              onClick={() => dispatch(plusBasket(el))}
              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-500"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </td>
       <td className="px-6 py-4">
       {el.price > 270 ? (
          <div className="flex items-start py-4 px-6 flex-col ">
            <h1 className="text-green-600 font-semibold">Цена с учетом скидки:</h1>
          <td class="font-semibold text-red-600"> ${Math.floor(el.price / 100 )* 80}</td>
          </div>
        ) : (
          <td class="px-6 py-4 font-semibold text-gray-900 ">${el.price}</td>
        )}
       </td>
        <td className="px-6 py-4">
          <button
            onClick={() => dispatch(deleteBasket(el))}
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-[17px] px-5 py-2.5 text-center me-2 mb-2"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default BasketCard;
