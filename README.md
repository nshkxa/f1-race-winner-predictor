# f1-race-winner-predictor
# F1 Race Result Predictor

A comprehensive F1 Race Predictor application that simulates AI-based race predictions based on user-selected weather conditions, tire compounds, and track characteristics. The app features a modern, responsive interface with F1-inspired design elements and realistic prediction algorithms.

The prediction engine analyzes driver skills, weather effects, tire performance, and track characteristics to generate race results with position changes, reflecting how these factors would affect real race outcomes. The intuitive UI allows users to experiment with different conditions to see how they impact race results.

---

## Features

- Predict top 10 driver positions for upcoming races
- Interactive dashboard UI using Flask + HTML/CSS
- Real-time integration with FastF1 for race data
- Supports weather and tyre strategy inputs
- Custom visualizations and prediction confidence

---

## Tech Stack

| Layer         | Tools Used                                 |
|---------------|---------------------------------------------|
| Frontend      | HTML, CSS,                        |
| Backend       | Python, Flask, FastF1                       |
| ML Model      | Scikit-learn, Pandas                        |
| Data Source   | FastF1 API, Historical F1 CSV Datasets      |

---

##  Project Structure

f1-predictor/
│
├── static/ # CSS, JS, images
│ └── style.css
│
├── templates/ # HTML templates
│ ├── index.html
│ └── result.html
│
├── data/ # Dataset & preprocessing scripts
│ └── f1_data.csv
│
├── model/ # Trained model pickle file
│ └── race_predictor.pkl
│
├── app.py # Main Flask application
├── predictor.py # ML model logic
├── preprocess.py # Data cleaning & feature engineering
└── README.md


---

## How to Run Locally

1. Clone the Repo**
   ```bash
   git clone https://github.com/yourusername/f1-predictor.git
   cd f1-predictor
python -m venv venv
source venv/bin/activate  # on Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

OUTPUT
Race: Monaco Grand Prix
Weather: Dry
Tyre Strategy: Medium → Soft
Prediction:
Verstappen
Norris
Leclerc
Hamilton
...
