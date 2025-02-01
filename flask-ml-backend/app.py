from flask import Flask, request, jsonify
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Load the trained model
model_path = "model/soil_ml_model.pkl"
if os.path.exists(model_path):
    with open(model_path, "rb") as file:
        model_data = pickle.load(file)
        model = model_data["model"]
        scaler = model_data["scaler"]
else:
    raise FileNotFoundError("Trained model file not found. Run training first.")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Receive JSON input
        features = [
            float(data["N"]), float(data["P"]), float(data["K"]),
            float(data["temperature"]), float(data["humidity"]),
            float(data["ph"]), float(data["rainfall"])
        ]

        # Scale the input
        features_scaled = scaler.transform([features])

        # Make prediction
        prediction = model.predict(features_scaled)
        return jsonify({"success": True, "prediction": prediction[0]})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
