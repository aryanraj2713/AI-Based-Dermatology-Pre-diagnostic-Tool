from PIL import Image
import numpy as np
from keras.models import model_from_json
import keras
from keras import backend as K

SKIN_CLASSES = {
    0: 'Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowen’s disease)',
    1: 'Basal Cell Carcinoma',
    2: 'Benign Keratosis',
    3: 'Dermatofibroma',
    4: 'Melanoma',
    5: 'Melanocytic Nevi',
    6: 'Vascular skin lesion'
}

# Load the trained model
j_file = open('/content/drive/MyDrive/new model/modelnew.json', 'r')
loaded_json_model = j_file.read()
j_file.close()
model = model_from_json(loaded_json_model)
model.load_weights('/content/drive/MyDrive/new model/modelnew.h5')

# Function to perform image classification
def classify_skin_disease(image_path):
    try:
        img = Image.open(image_path)
        img = img.resize((224, 224))
        img = np.array(img)
        img = img.reshape((1, 224, 224, 3))
        img = img / 255
        prediction = model.predict(img)
        pred = np.argmax(prediction)
        disease = SKIN_CLASSES[pred]
        accuracy = prediction[0][pred] * 100
        return disease, accuracy
    except Exception as e:
        return "Error", str(e)

if __name__ == "__main__":
    # Provide the path to the image you want to classify
    image_path = "/content/drive/MyDrive/Data1H(with-noise)/basal cell carcinoma (bcc)/ISIC_0024457.jpg"
    disease, accuracy = classify_skin_disease(image_path)
    print("Predicted Disease: {}".format(disease))
    print("Prediction Accuracy: {:.2f}%".format(float(accuracy)))  # Convert accuracy to float
    K.clear_session()
