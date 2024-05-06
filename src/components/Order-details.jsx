import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendarAlt, faChevronDown, faUsers } from '@fortawesome/free-solid-svg-icons'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const OrderDetails = () => {
  return (
    <div className="border rounded-lg p-4 border-[#D5D5D5] w-96 ">
      <h2 className="text-base font-medium text-[#222222] mb-4">Review Order Details</h2>
      <div className="bg-white rounded-lg">
        <div className="flex items-center mb-4">
          <img src="order-details-card-1.png" alt="Product" className="w-[92px] h-[92px] mr-4" />
          <div>
            <h3 className="text-base font-medium text-[#222222] ">6 Night 5 Days Honeymoon Package From Munnar</h3>
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                <FontAwesomeIcon icon={faStar} className="text-black mr-1" />
                <span className="text-xs font-semibold text-[#222222]">4.5/5</span>
              </div>
              <span className="text-[#787878] text-[10px] font-normal">(1k+ ratings)</span>
              <span className="">
                <img src="include-icon.png" alt="Info Icon" className="w-[10px] h-[10px] inline-block  ml-2" />
              </span>
            </div>
          </div>
        </div>
        <hr className="my-2 border-t border-[#E6E6E6]" />
        <div className="flex items-center space-x-2">
          <div className="relative flex-">
            <DatePicker className="w-28 h-7 p-1 border border-[#787878] rounded-lg text-sm font-normal text-[#404040]" placeholderText="" value="12/02/2024" />
            <img src="calender.icon.png" alt="Calendar Icon" className="absolute w-4 h-4 top-1 right-2 text-gray-500" />
          </div>
          <span className="text-[#404040] text-base font-normal">to</span>
          <div className="relative flex-">
            <DatePicker className="w-28 h-7 p-1 border border-[#787878] bg-[#78787824] rounded-lg text-sm font-normal text-[#404040]" placeholderText="" value="12/02/2024" />
            <img src="calender.icon.png" alt="Calendar Icon" className="absolute w-4 h-4 top-1 right-2 text-gray-500" />
          </div>
          <div className="relative flex items-center h-7 border border-[#787878] rounded-lg text-sm font-normal text-[#404040]  ">
            <FontAwesomeIcon icon={faUsers} className="text-[#404040] ml-2 mr-2" />
            <select className="w-10 appearance-none focus:outline-none bg-transparent">
              <option value="1">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FontAwesomeIcon icon={faChevronDown} className="text-[#404040]" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <p className="text-[#FF0000] text-base font-normal">-25%</p>
          <p className="text-[#787878] text-xs font-normal line-through">₹15000</p>
          <p className="text-[#404040] text-base font-normal">₹11250</p>
          <p className="text-[#404040] text-base font-normal">x 2 Adults</p>
        </div>
        <div className="mt-2 mb-10 space-y-2">
          <p className="text-2xl ext-[#222222] font-medium">Total ₹ 22500</p>
          <p className="text-xs text-[#404040] font-normal">(No additional taxes or booking fees)</p>
          <p className="text-xs font-medium text-[#1ED760]">Offers applied : 1 offer available</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
