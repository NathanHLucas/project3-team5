#import flask
from flask import Flask
from flask_sqlalchemy import SQLAlchemy




#Create the app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:nicole24@localhost:5432/carCharging_db'
db = SQLAlchemy(app)



#Define the home route
@app.route("/")
def index():
    #use render_template to render in our HTML file.
    return flask.render_template('index.html')

#Run the app
if __name__ == '__main__':
    app.run(debug=True)
    
