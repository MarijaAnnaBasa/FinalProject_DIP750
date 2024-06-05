from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/history')
def history():
    return render_template('history.html')

@app.route('/extra')
def extra():
    return render_template('extra.html')  # Renders the extra page template

if __name__ == "__main__":
    app.run(debug=True)
