import React from 'react';

const AddressInfo = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <div>
        <label>Address Line 1:</label>
        <input
          type="text"
          value={formData.address1}
          onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
        />
        {errors.address1 && <p>{errors.address1}</p>}
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type="text"
          value={formData.address2}
          onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
        {errors.state && <p>{errors.state}</p>}
      </div>
      <div>
        <label>Zip Code:</label>
        <input
          type="text"
          value={formData.zip}
          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        />
        {errors.zip && <p>{errors.zip}</p>}
      </div>
    </div>
  );
};

export default AddressInfo;