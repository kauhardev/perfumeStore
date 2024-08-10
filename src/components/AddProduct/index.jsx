import axios from "axios";
import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [productUrl, setProductUrl] = useState("");
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDes, setProdDes] = useState("");
  const [prodBrand, setProdBrand] = useState("");
  const [prodCategory, setProdCategory] = useState("");
  const [previev,setPreviev] = useState(false)
//   const { product } = useSelector((s) => s.add);

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };

  const errorMessage = () => {
    toast.error("Заполните пустые ячейки!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addProd = () => {
    if (
      prodName.trim() === "" ||
      prodPrice.trim() === "" ||
      prodDes.trim() === "" ||
      prodBrand.trim() === "" 
     
    ) {
      errorMessage();
    } else {
      let newProduct = {
        id: new Date(),
        url: productUrl,
        title: prodName,
        price : prodPrice,
        des: prodDes,
        brand: prodBrand,
        category: prodCategory,
        quantity:1,
        rating: Math.floor(Math.random() * 5)
      };
      axios.post(`https://api.elchocrud.pro/api/v1/1d2af59a43dc4fb96ff0ee7d6237f0db/perfumeStore`,newProduct)
      setProdBrand('')
      setProdCategory('')
      setProdName('')
      setProdPrice('')
      setProductUrl('')
      setProdDes('')
      setPreviev(false)
    }
  };
  return (
    <div className="py-[35px]">
      <div className="conteiner">
        <div className="flex items-start flex-col gap-[30px]">
          <div className="w-[80%] h-[350px] bg-gray-300">
            <h1 className="text-2xl font-bold py-[18px] bg-gray-400  text-white text-center">
              PRODUCT INFORMATION
            </h1>
                
            <div className="flex items-center justify-between  px-[30px] py-[20px]">
              <div className="flex items-start flex-col gap-[20px] text-xl font-medium">
              
                <h1>PRODUCT NAME:</h1>
                <h1>PRODTUCT PRICE:</h1>
                <h1>PRODUCT DESCRIPTION:</h1>
                <h1>PRODUCT BRAND:</h1>
             
              </div>
              <div className="flex items-start flex-col gap-[10px] ">
              
                <input
                  onChange={(e) => setProdName(e.target.value)}
                  value={prodName}
                  type="text"
                  className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
                />
                <input
                  onChange={(e) => setProdPrice(e.target.value)}
                  value={prodPrice}
                  type="text"
                  className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
                />
                <input
                  onChange={(e) => setProdDes(e.target.value)}
                  value={prodDes}
                  type="text"
                  className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
                />
                <input
                  onChange={(e) => setProdBrand(e.target.value)}
                  value={prodBrand}
                  type="text"
                  className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
                />
        
              </div>
              <div className="flex items-center flex-col gap-[10px]">
              <select
                  onChange={(e) => setProdCategory(e.target.value)}
                  className="py-[3px] px-[12px] text-white bg-gray-400 text-xl rounded-xl border-black border-2"
                >
                  <option value="">Category:</option>
                  <option value="male">MALE PERFUMES</option>
                  <option value="female">FEMALE PERFUMES</option>
                  <option value="unisex">UNISEX</option>
                </select>
                <div class="flex items-center justify-center w-[300px] ">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-500 rounded-lg cursor-pointer bg-transparent"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <p class="mb-2 text-sm text-gray-500 font-semibold">
                        Выберите файл:
                      </p>
                      <svg
                        class="w-20 h-10 mb-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                    
                    </div>
                    <input
                      onChange={onChange}
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                    />
                  </label>
                </div>

                <button
                  onClick={() => setPreviev(true)}
                  className="text-xl text-white py-[14px] px-[35px] bg-slate-400 rounded-3xl font-medium"
                >
                  PREVIEW PRODUCT
                </button>
              </div>
            </div>
         
          </div>

{
  previev ? 
  <div className="w-[80%] h-[350px] bg-gray-300">
  <h1 className="text-2xl font-bold py-[18px] bg-gray-400  text-white text-center">
    PRODUCT PREVIEW
  </h1>
      
  <div className="flex items-center justify-between  px-[30px] py-[10px]">
    <div className="flex items-start flex-col gap-[20px] text-xl font-medium">
    
      <h1>PRODUCT CATEGORY:</h1>
      <h1>PRODTUCT PRICE:</h1>
      <h1>PRODUCT DESCRIPTION:</h1>
      <h1>PRODUCT BRAND:</h1>
   
    </div>
    <div className="flex items-start flex-col gap-[10px] ">
    
      <h1
        className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
      >{prodCategory}</h1>
      <h1
        className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
      >{prodPrice}$</h1>  
      <h1
      className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
    >{prodDes.slice(0,25)}...</h1> 
     <h1
    className="py-[3px] px-[32px] w-[350px]  border-[3px] border-black bg-transparent text-xl"
  >{prodBrand}</h1>

    </div>
    <div className="flex items-center flex-col gap-[10px]">
 
      <div class="flex items-center flex-col gap-[10px] ">
        <h1>{prodName}</h1>
     <img src={productUrl} alt="img" width={130}/>
      </div>

      <button
        onClick={() => addProd()}
        className="text-xl text-white py-[14px] px-[35px] bg-slate-400 rounded-3xl font-medium"
      >
        POST PRODUCT
      </button>
    </div>
  </div>

</div> : null
}
         
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
