import React from 'react';

const PersonalInfo = ({ formData, setFormData, errors }) => {
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,15}$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={formData.phone}
          onChange={handlePhoneChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
    </div>
  );
};

export default PersonalInfo;
