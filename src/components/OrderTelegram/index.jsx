import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import iconTg from "../../assets/images/iconTg.svg";
import load from "../../assets/images/load.svg";
// import { FcApproval } from "react-icons/fc";

const OrderTelegram = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("+996");
  const [email, setEmail] = useState("");
  const [modalTg, setModalTg] = useState(false);
  const [text, setText] = useState(false);
  const [loader, setLoader] = useState(false);
  const [mess, setMess] = useState(false);

  const { basket } = useSelector((s) => s.bas);
  let totalPrice = basket.reduce((acc, el) => {
    let sale= el.price > 270
      ? el.price - (el.price / 100) * 20
      : el.price
    return acc + Number(sale) * el.quantity;
  }, 0);
  const errorMessage = () => {
    toast.error("Заполните пустые ячейки!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const resetState = () => {
    setLoader(false);
    setText(false);
    setMess(false);
  };
  const formSubmit = () => {
    const my_id = `-1002135791648`;
    const token = `6457990274:AAFGskP4i1VeckCLYcYi4tGMRysb3wICBiM`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    if (name.trim() === "" || phone.trim() === '' || email.trim() === '' || address.trim() === '' ) {
      errorMessage();
    } else {
      let newOrder = {
        chat_id: my_id,
        parse_model: "html",
        text: `order :
                name: ${name},
                phone: ${phone},
                address : ${address},
                email: ${email}
                `,
      };
      setTimeout(() => {
        axios.post(url_api, newOrder);
        setLoader(false);
        setMess(true);
      }, 2000);
      setText(true);
      setModalTg(true);
      setLoader(true);
      setAddress("");
      setEmail("");
      setPhone("+996");
      setName("");
    }
  };

  useEffect(() => {
    resetState();
  }, [modalTg]);

  const openModal = () => {
    if (name.trim() === "" || phone.trim() === '' || email.trim() === '' || address.trim() === '' ) {
        errorMessage();
      } else{
        setModalTg(true)
      }
  }

  return (
    <div className="py-[40px]">
      <div className="conteiner">
        <div className="flex items-start flex-col gap-[20px]">
          <div className="w-full h-[280px] bg-gray-300 flex items-center justify-between p-[50px]">
            {basket.map((el) => (
              <div className="flex items-center  justify-between gap-[20px]">
                <div className="flex items-center flex-col gap-[10px]">
                  <img src={el.url} alt="img" className="h-[180px]" />
                  <h1>{el.title}</h1>
                </div>
                <div className="flex items-center justify-between gap-[10px] relative py-1">
          {el.price > 270 ? 
            <h1 className=" max-[1200px]:text-xl text- font-bold text-[23px] text-red-600 font-mono"> {Math.floor(el.price / 100 )* 80}$</h1>
           : null}
        <h1 className={`${el.price > 270 ? 'font-mono max-[1024px]:text-sm text-xl absolute top-[-10px] right-[-50px] line-through text-gray-600' : 'font-bold text-[23px] font-mono'}`}>{el.price}$</h1>
        </div>              </div>
            ))}
          </div>

          <div className="w-full h-[420px] bg-gray-300 py-[30px] px-[80px] ">
            <h1 className="text-2xl text-center font-bold font-mono">
              PAYMENT DETAILS
            </h1>
            <div className="flex items-center justify-around">
              <div className="flex items-start flex-col gap-[20px]">
                <div className="flex items-center flex-col gap-1">
                  <h1 className="font-semibold">Full Name:</h1>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="py-[4px] px-[32px] w-[350px] border-2 border-gray-600 rounded-lg bg-transparent"
                  />
                </div>
                <div className="flex items-center flex-col gap-1">
                  <h1 className="font-semibold">E-mail address: </h1>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    className="py-[4px] px-[32px] w-[350px] border-2 border-gray-600 rounded-lg bg-transparent"
                  />
                </div>
                <div className="flex items-center flex-col gap-1">
                  <h1 className="font-semibold">Phone Number: </h1>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    maxLength={13}
                    type="text"
                    className="py-[4px] px-[32px] w-[350px] border-2 border-gray-600 rounded-lg bg-transparent"
                  />
                </div>
                <div className="flex items-center flex-col gap-1">
                  <h1 className="font-semibold">Address: </h1>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    type="text"
                    className="py-[4px] px-[32px] w-[350px] border-2 border-gray-600 rounded-lg bg-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center flex-col gap-[20px]">
                <h1 className="text-xl font-semibold">Shipping Method</h1>
                <div className="flex items-center justify-between gap-[20px]">
                  <div className="w-[30px] h-[30px] border-2 border-black flex items-center justify-center ">
                    <h1 className="text-green-500"> ✔️</h1>
                  </div>
                  <h1>At Home Delivery </h1>
                  <h1 className="font-bold">10$</h1>
                </div>
                <div className="flex items-center justify-around gap-[20px]">
                <div className="w-[30px] h-[30px] border-2 border-black flex items-center justify-center ">
                    {/* <h1 className="text-green-500"> ✔️</h1> */}
                  </div>                  
                  <h1>Pick up in Post Office</h1>
                  <h1 className="font-bold">FREE</h1>
                </div>

                <div className="w-[400px] h-[120px] border-2 border-black p-[15px] gap-5 font-mono">
                  <div className="flex items-center justify-between text-xl">
                    <h1>Subtotal</h1>
                    <h1>{totalPrice}$</h1>
                  </div>
                  <div className="flex items-center justify-between text-xl">
                    <h1>Shipping</h1>
                    <h1>0$</h1>
                  </div>
                  <div className="flex items-center justify-between text-xl">
                    <h1 className="font-bold">total</h1>
                    <h1>{totalPrice}$</h1>
                  </div>
                </div>
                <button
                  onClick={() => openModal()}
                  className="py-[12px] px-[32px] w-[200px] bg-gray-500 rounded-lg text-white border-2 border-gray-800"
                >
                  Отправить
                </button>
              </div>
              {modalTg ? (
                <div className="">
                  <div className="absolute w-[60%] h-[700px] bg-gray-500 text-white rounded-2xl top-[140px] left-[19%] z-[50] p-[30px] flex items-center justify-center flex-col gap-[10px]">
                    <a className="absolute top-5 right-8 text-3xl ">X</a>
                    {!text ? (
                      <div className="flex items-center flex-col gap-[35px]">
                        <h1 className="text-3xl  font-serif font-bold">
                          Проверьте свои данные:
                        </h1>
                          <h1 className="text-2xl">
                            {name},
                            {phone},
                            {email},
                            {address}
                          </h1>
                        <button
                          onClick={() => formSubmit()}
                          type="button"
                          className="text-3xl text-black py-[14px] px-[32px] bg-gray-400 border-2 border-gray-600 rounded-[40px] w-[300px] mt-[20px]"
                        >
                          Отправить
                        </button>
                      </div>
                    ) : null}
                    {loader ? <img src={load} alt="img" className="text-green-400" /> : null}
                    {mess ? (
                      <div className="flex items-center flex-col gap-[40px]">
                        <img src={iconTg} alt="img" className="w-[350px] " />
                        <h1 className="text-3xl text-black py-[14px] px-[32px] bg-gray-400 border-2 border-gray-600 rounded-xl">
                          {" "}
                          👌Заказ отправлен успешно
                        </h1>
                      </div>
                    ) : null}
                  </div>
                  <div onClick={() => setModalTg(false)} className="bg"></div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default OrderTelegram;
