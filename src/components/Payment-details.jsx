import React, { useState } from "react";

const PaymentDetails = () => {
  const [expiryDate, setExpiryDate] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName); 
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d/]/g, "");
    if (value.length > 2 && value.indexOf("/") === -1) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }
    setExpiryDate(value);
  };

  const handleTermsCheck = (e) => {
    setTermsChecked(e.target.checked);
  };

  const handlePay = () => {
    if (termsChecked) {
      alert("");
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-base text-[#222222] font-semibold mb-2 ">
        Payment Details
      </h2>
      <p className="text-sm text-[#222222] font-normal mb-6">
        Complete your purchase with confidence. Your transactions are encrypted
        for a safe and seamless payment experience.
      </p>
      <div className="flex items-center justify-between space-x-4">
        <button
          className={`flex items-center justify-center bg-transparent border w-40 ${
            selectedButton === "Card"
              ? "border-[#222222] border-[2px]"
              : "border-[#C2C2C2]"
          } text-black px-4 py-2 rounded-lg`}
          onClick={() => handleButtonClick("Card")}
          disabled={selectedButton === "Card"}
        >
          <div className="flex items-center ">
            <img src="card-icon.png" alt="Card Icon" className="w-7 h-5 mr-1" />
            <span className="text-base">Card</span>
          </div>
        </button>
        <button
          className={`flex items-center bg-transparent border w-40 ${
            selectedButton === "UPI"
              ? "border-[#222222] border-[2px]"
              : "border-[#C2C2C2]"
          } text-black px-4 py-2 rounded-lg`}
          onClick={() => handleButtonClick("UPI")}
          disabled={selectedButton === "UPI"}
        >
          <img src="upi-icon.png" alt="UPI Icon" className="w-16 h-6 mx-auto" />
        </button>
        <button
          className={`flex items-center bg-transparent border w-40 ${
            selectedButton === "GooglePay"
              ? "border-[#222222] border-[2px]"
              : "border-[#C2C2C2]"
          } text-black px-4 py-2 rounded-lg`}
          onClick={() => handleButtonClick("GooglePay")}
          disabled={selectedButton === "GooglePay"}
        >
          {" "}
          <img
            src="google-pay-icon.png"
            alt="GPay Icon"
            className="w-16 h-6 mx-auto"
          />{" "}
        </button>
        <button className="bg-transparent  flex items-center justify-center border w-14 border-[#C2C2C2] text-[#040303] text-xl font-medium px-2 py-2  rounded-lg">
          :
        </button>
      </div>
      <div className="mt-8">
        <label
          htmlFor="cardNumber"
          className="block text-base text-[#0A0909] font-medium tracking-wider mb-2"
        >
          Card number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="border border-[#C2C2C2] px-2 py-1 text-base font-normal text-[#787878] tracking-wider rounded-lg h-12 w-full"
          placeholder="1234 1234 1234 1234"
          style={{
            backgroundImage: `url('cards-icon.png')`,
            backgroundSize: "126px 30px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
          }}
        />
      </div>
      <div className="mt-6 flex justify-between space-x-4">
        <div>
          <label
            htmlFor="expiryDate"
            className="block text-base text-[#0A0909] font-medium tracking-wider mb-2"
          >
            Exp. date
          </label>
          <input
            type="text"
            id="expiryDate"
            className="border border-[#C2C2C2] px-2 py-1 text-base font-normal text-[#787878] tracking-wider rounded-lg h-12 w-64"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <div>
          <label
            htmlFor="securityCode"
            className="block text-base text-[#0A0909] font-medium tracking-wider mb-2"
          >
            Security code
          </label>
          <div className="relative">
            <input
              type="text"
              id="securityCode"
              className="border border-[#C2C2C2] px-2 py-1 text-base font-normal text-[#787878] tracking-wider rounded-lg h-12 w-64"
              placeholder="CVV"
            />
            <img
              src="cvv-icon.png"
              alt="Security Icon"
              className="absolute top-4 right-4 h-5 w-"
            />
          </div>
        </div>
      </div>
      <button
        className=" w-full h-14 bg-[#1ED760] text-[#222222] text-xl font-semibold px-4 py-2 rounded-lg mt-6"
        onClick={handlePay}
      >
        Pay ₹ 22500
      </button>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="termsCheckbox"
          checked={termsChecked}
          onChange={handleTermsCheck}
          className="mr-2 "
        />
        <label
          htmlFor="termsCheckbox"
          className="text-xs font-normal text-gray-400"
        >
          Agree with{" "}
          <button className="text-xs font-semibold text-blue-600 cursor-pointer">
            Terms & Conditions{" "}
          </button>
        </label>
      </div>
    </div>
  );
};

export default PaymentDetails;
