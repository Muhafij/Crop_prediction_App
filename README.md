# Crop Prediction System

## Overview
This project is a **Crop Prediction System** that helps farmers determine the most suitable crop for cultivation based on soil and environmental conditions. It consists of a machine learning model trained on soil data and a Flask-based API for making predictions.

## Features
- **Machine Learning Model**: A trained model using soil parameters to predict suitable crops.
- **Flask API**: A backend API to handle requests and provide crop recommendations.
- **Frontend**: A React-based UI for user interaction.
- **Cross-Origin Support**: Enabled using Flask-CORS to allow communication between the frontend and backend.

## Files and Directories
- **app.py**: Main Flask application file for handling API requests.
- **crop_predict.py**: Another Flask application variant for handling predictions.
- **model/**: Contains `soil_ml_model.pkl`, the trained machine learning model.
- **CropRecommendation.csv**: Dataset used for training the model.
- **frontend/**: React.js frontend for user input and displaying predictions.

## Installation & Setup

### Prerequisites
Ensure you have **Python 3.x** and **Node.js** installed.

### Backend Setup
1. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate   # On macOS/Linux
   venv\Scripts\activate     # On Windows
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```sh
   python app.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm start
   ```

## API Endpoints
- **POST `/predict`**: Accepts soil parameters (N, P, K, temperature, humidity, pH, rainfall) and returns the recommended crop.

### **Request Body (JSON):**
```json
{
  "N": 50,
  "P": 30,
  "K": 40,
  "temperature": 25.0,
  "humidity": 60.5,
  "ph": 6.5,
  "rainfall": 200
}
```

### **Response (JSON):**
```json
{
  "success": true,
  "prediction": "Rice"
}
```

## Model Training
To retrain the model, use the `CropRecommendation.csv` dataset and create a new `soil_ml_model.pkl` using scikit-learn.

## License
This project is open-source and available under the **MIT License**.

---

# React + Vite

This template provides a minimal setup to get React working in **Vite** with **HMR** and some **ESLint rules**.

### Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Repository
[Crop_prediction_App/README.md at main](https://github.com/Muhafij/Crop_prediction_App)

