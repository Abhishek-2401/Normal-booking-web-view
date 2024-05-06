import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import BookingPage from './components/Book-now';
import ContactDetails from './components/Contact-details';
import PaymentDetails from './components/Payment-details';
import ReviewOrderDetails from './components/Order-details';
import './styles.css'

const App = () => {
  const [step, setStep] = useState(1); 

  const handleNextStep = () => {
    setStep(step + 1); 
  };

  return (
    <div className="pr-4">
      <Navbar />
      <Breadcrumbs />
      <BookingPage activeStep={step} onNextStep={handleNextStep} />
      <div className="container mx-auto mt-4 flex justify-between">
        <div className="w-1/2 pr-4">
          {step === 1 ? (
            <ContactDetails onNextStep={handleNextStep} /> 
          ) : (
            <PaymentDetails />
          )}
        </div>
        <div className="w-1/2 pl-64  ">
          <ReviewOrderDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
