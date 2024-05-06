import React, { useState, useRef } from 'react';

const ContactDetails = ({ onNextStep }) => {
  const [promoCode, setPromoCode] = useState(['', '', '', '', '', '']); 
  const inputRefs = useRef([]); 

  const handleInputChange = (index, value, e) => {
    const updatedPromoCode = [...promoCode];
    updatedPromoCode[index] = value;
    setPromoCode(updatedPromoCode);

    if (value.length === 1 && index < promoCode.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (e.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyClick = () => {
    const joinedCode = promoCode.join(''); 
   
  };

  const handleNextClick = () => {
    onNextStep(); 
  };  

  return (
    <div className=" p-4  rounded-lg">
      <h2 className="text-base  font-semibold text-[#222222]">Contact Details</h2>
      <p className="text-sm text-[#222222] font-normal mb-8">We'll use this information to send you confirmation and updates about your booking.</p>
      <div className="mb-4 flex flex-wrap">
        <div className="mb-6 flex-grow mr-4">
          <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">
            <label htmlFor="firstName" className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border-none text-base ml-3 font-normal text-[#222222] focus:outline-none bg-transparent"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6 flex-grow">
          <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">
            <label htmlFor="lastName" className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border-none text-base ml-3 font-normal text-[#222222] focus:outline-none bg-transparent"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6 flex-grow mr-4">
          <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">
            <label htmlFor="email" className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border-none text-base ml-3 font-normal text-[#222222] focus:outline-none bg-transparent"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6 flex-grow">
          <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">
            <label htmlFor="phone" className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]">
              Phone Number
            </label>
            <select
              id="countryCode"
              className="w-20 p-2 border-none text-base ml-2 font-normal text-[#787878] focus:outline-none bg-transparent"
              required
            >
              <option value="+1">+91</option>
              <option value="+91">+1</option>
            </select>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border-none text-base ml-3 font-normal text-[#222222] focus:outline-none bg-transparent"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-4 flex-grow">
          <h2 className="text-base font-semibold text-[#222222] ">Promo Code</h2>
          <p className="text-sm font-normal text-[#222222] mb-8">Have a promo code? Enter it here.</p>
          <div className="border-[1px] border-[#C2C2C2] rounded-lg h-14 w-96 relative flex items-center">
          <label htmlFor="phone" className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]">
          Enter Promo code
            </label>
            {promoCode.map((char, index) => (
              <input
                key={index}
                type="text"
                className="w-8 h-8 border-none text-center text-xs ml-5 font-medium text-[#DCDCDC] focus:outline-none bg-transparent   mb-2"
                value={char}
                maxLength={1}
                onChange={(e) => handleInputChange(index, e.target.value, e)}
                ref={(input) => (inputRefs.current[index] = input)} 
                style={{ borderBottom: '1px solid grey' }} 
              />
            ))}
            <button
              className="bg-white text-[#FF0000] text-xs mx-auto font-medium px-4 py-2 rounded-lg "
              onClick={handleVerifyClick}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
      <button className="bg-[#1ED760] w-96 text-[#222222] text-base font-semibold px-4 py-3 rounded-xl" onClick={handleNextClick}>
        Next
      </button>
      <div className="mt-4">
        <h2 className="text-base text-[#222222] font-semibold ">Cancellation Policy</h2>
        <p className="text-sm font-normal text-[#222222] mb-2">
        Free cancellation and refund before 01/02/2024. {' '}
          <a href="#" className="text-blue-700 text-sm font-semibold  underline">
          Learn more
          </a>.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
