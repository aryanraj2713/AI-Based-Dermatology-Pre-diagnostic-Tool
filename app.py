import os
from typing import Any
from flask import Flask, jsonify, request
from keras.models import model_from_json
from flask_cors import CORS
from PIL import Image

import logging
import numpy as np
from termcolor import colored

class Logger:
  def __init__(self, name):
    self.logger = logging.getLogger(name)
    self.logger.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.DEBUG)
    console_handler.setFormatter(formatter)
    self.logger.addHandler(console_handler)

  def info(self, message):
    self.logger.info(colored(message, 'green'))

  def error(self, message):
    self.logger.error(colored(message, 'red'))

logger = Logger('app')

app = Flask(__name__)

CORS(app, supports_credentials=True, origins="*")

SKIN_CLASSES = {
  0: 'Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowen’s disease)',
  1: 'Basal Cell Carcinoma',
  2: 'Benign Keratosis',
  3: 'Dermatofibroma',
  4: 'Melanoma',
  5: 'Melanocytic Nevi',
  6: 'Vascular skin lesion'
}

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

# load model from json file
json_file = open("model/model.json", 'r')
loaded_model_json = json_file.read()
json_file.close()


model: Any = model_from_json(loaded_model_json)
model.load_weights("model/weights.h5")

logger.info('Model loaded')

def allowed_mime_type(mimetype: str):
  return mimetype.rsplit('/')[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
  return {
    "status": "success",
    "message": "Welcome to Skin Disease Classification API"
  }


@app.route('/predict', methods=['POST'])
def predict():
  try:
    file = request.files.get('image')

    if not file:
      resp = jsonify({
        "status": "error",
        "message": "File not found",
      })
      return resp

    if not allowed_mime_type(file.mimetype):
      resp = jsonify({
        "status": "error",
        "message": "File type not allowed",
      })
      return resp

    # make prediction
    img = Image.open(file.stream)

    img = img.resize((640, 310))

    img = np.array(img)
    img = np.expand_dims(img, axis=0)
    # img = img.reshape((1, 224, 224, 3))
    # img = img / 255

    prediction = model.predict(img)

    pred = np.argmax(prediction)

    disease = SKIN_CLASSES[pred]
    accuracy = prediction[0][pred]

    logger.info(f'Prediction: {disease} - {accuracy * 100:.2f}%')

    resp = jsonify({
      "status": "success",
      "message": "Prediction successful",
      "data": {
        "disease": disease,
        "accuracy": "{:.2f}".format(accuracy * 100)
      }
    })
    resp.status_code = 200
    return resp
  except Exception as e:
    logger.error(e)
    resp = jsonify({
      "status": "error",
      "message": "Something went wrong",
    })
    return resp


if __name__ == '__main__':
  app.run(host="0.0.0.0", port=int(os.getenv('PORT') or 5000))