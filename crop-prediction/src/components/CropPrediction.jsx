import React, { useState } from 'react';
import axios from 'axios';
import './CropPrediction.css';

const CropPrediction = () => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
  });
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        setPrediction(response.data.prediction);
      } else {
        setError('Prediction failed. Please try again.');
      }
    } catch (err) {
      setError(
        err.response?.data?.error || 
        'There was an error connecting to the server. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { name: 'N', label: 'Nitrogen (N)', min: 0, max: 120, unit: 'ppm' },
    { name: 'P', label: 'Phosphorus (P)', min: 5, max: 145, unit: 'ppm' },
    { name: 'K', label: 'Potassium (K)', min: 15, max: 205, unit: 'ppm' },
    { name: 'temperature', label: 'Temperature', min: 8, max: 42, unit: '°C' },
    { name: 'humidity', label: 'Humidity', min: 14, max: 100, unit: '%' },
    { name: 'ph', label: 'pH Level', min: 3.5, max: 10, unit: '' },
    { name: 'rainfall', label: 'Rainfall', min: 20, max: 298, unit: 'mm' },
  ];

  return (
    <div className="container">
      <h2>Crop Prediction System</h2>
      <form onSubmit={handleSubmit}>
        {inputFields.map(({ name, label, min, max, unit }) => (
          <div className="form-group" key={name}>
            <label htmlFor={name}>{label} ({unit})</label>
            <input
              type="number"
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              min={min}
              max={max}
              step="0.01"
              required
            />
            <span className="range-info">Range: {min} - {max} {unit}</span>
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Predict Crop'}
        </button>
      </form>
      
      {error && <div className="error">{error}</div>}
      {prediction && (
        <div className="result">
          <h3>Recommended Crop: {prediction}</h3>
        </div>
      )}
    </div>
  );
};

export default CropPrediction;