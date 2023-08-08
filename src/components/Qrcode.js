import React, { useState } from "react";
import "./Qrcode.css";

const Qrcode = () => {
  const [value, setValue] = useState("");

  const image = document.getElementById("qr-image");

  // const input = document.getElementById("qr-input")
  // const button = document.getElementById("qr-button")

  // button.addEventListener('click',()=>{
  //   const inputValue = input.value;

  //   if(!inputValue){
  //     alert("please enter a valid url");
  //     return;
  //   }
  //   else{
  //     image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  //     image.alt = `QR Code For ${inputValue}`;
  //   }
  // })

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    if (value === "") {
      alert("please enter a valid url");
      return;
    } else {
      image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
      image.alt = `QR Code For ${value}`;
    }
  };

  return (
    <>
      <div className="qr-form">
        <div className="content-area">
          <h1 className="qr-title">QR Code Generator</h1>
          <input
            className="qr-input"
            id="qr-input"
            placeholder="Please enter your URL here"
            onChange={(e) => changeHandler(e)}
          ></input>
          <button className="qr-button" id="qr-button" onClick={submitHandler}>
            Click To Generate
          </button>
          <img src="" alt="" id="qr-image"></img>
        </div>
      </div>
    </>
  );
};

export default Qrcode;
