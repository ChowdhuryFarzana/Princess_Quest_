from flask import Flask, render_template, send_from_directory, request, jsonify
import os
from algorithms import greedy_algorithm, brute_force_algorithm

app = Flask(__name__)

# Route to serve the main HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Route to serve static files
@app.route('/<path:filename>')
def serve_static(filename):
    if filename.startswith("card/"):  # For image files in the card folder
        return send_from_directory("card", filename[5:])
    return send_from_directory(".", filename)

# Route for running the Greedy Algorithm
@app.route('/run_greedy', methods=['POST'])
def run_greedy():
    data = request.json  # Receive JSON data from the frontend
    result = greedy_algorithm(data)  # Call the Greedy Algorithm function
    return jsonify(result=result)

# Route for running the Brute Force Algorithm
@app.route('/run_brute_force', methods=['POST'])
def run_brute_force():
    data = request.json  # Receive JSON data from the frontend
    result = brute_force_algorithm(data)  # Call the Brute Force Algorithm function
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
