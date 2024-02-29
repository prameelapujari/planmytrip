import React, { useState } from 'react';

const DestinationForm = ({ addDestination }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) return;
    addDestination({ name, address, details });
    setName('');
    setAddress('');
    setDetails('');
  };

  return (
    <div className="destination-form-container"> {/* Apply CSS class */}
      <h2>Add Destination</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
};

export default DestinationForm;