import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Valid email is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) tempErrors.phone = 'Phone number must be 10 digits';
    if (step === 2) {
      if (!formData.address1) tempErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) tempErrors.city = 'City is required';
      if (!formData.state) tempErrors.state = 'State is required';
      if (!formData.zip) tempErrors.zip = 'Zip Code is required';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form submitted successfully:', formData);
      localStorage.removeItem('formData');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {step === 1 && <PersonalInfo formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 2 && <AddressInfo formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 3 && <Confirmation formData={formData} />}
          <div className="mt-3">
            {step > 1 && <button className="btn btn-secondary" onClick={handleBack}>Back</button>}
            {step < 3 && <button className="btn btn-primary ml-2" onClick={handleNext}>Next</button>}
            {step === 3 && <button className="btn btn-success ml-2" onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;