from flask import Flask, request, jsonify, render_template
from algorithms import greedy_selection, brute_force_selection

app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/solve', methods=['POST'])
def solve():
    # Collect data from form submission
    method = request.form['method']
    abilities_needed = set(request.form['abilities_needed'].split(','))
    friends_data = request.form['friends']
    
    # Convert friends data into a dictionary
    friends = {}
    for line in friends_data.split('\n'):
        name, abilities = line.split(':')
        friends[name.strip()] = set(abilities.strip().split(','))

    # Solve using the selected method
    if method == 'greedy':
        result = greedy_selection(abilities_needed, friends)
    else:
        result = brute_force_selection(abilities_needed, friends)

    # Render results
    return render_template('index.html', result=result, method=method)

if __name__ == '__main__':
    app.run(debug=True)
