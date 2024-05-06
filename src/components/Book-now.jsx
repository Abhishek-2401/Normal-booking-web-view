import React from 'react';
import '../styles.css'

const BookingPage = ({ activeStep }) => {
  return (
    <div>
      <div className="container mx-auto mt-6 ml-10 flex w-full items-center ">
        <h1 className="text-2xl font-medium text-[#222222] mb-6 mr-8">Book Now</h1>
        <div className="flex items-center justify-center flex-grow mb-6">
          <div className={`w-8 h-8 rounded-full flex mr-4 items-center justify-center text-[#222222] font-medium text-sm ${activeStep === 1 ? 'bg-[#1ED760]' : 'bg-[#1ED760]'}`}>1</div>
          <h2 className="text-sm font-medium text-[#222222] mr-16">Contact Details</h2>
          <div className={`w-8 h-8 rounded-full flex items-center mr-4 justify-center text-[#222222] font-medium text-sm ${activeStep === 2 ? 'bg-[#1ED760]' : 'bg-gray-300'}`}>2</div>
          <h2 className="text-sm font-medium text-[#222222] mr-16">Payment Details</h2>
        </div>
      </div>
      <hr className="w-full bg-gray-300 " />
     
    </div>
  );
};

export default BookingPage;
