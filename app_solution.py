#import flask
import flask

#Create the app
app = flask.Flask(__name__)

#Import all the necessary data
from fetch_data import blnk_data_dict
from fetch_data import chpt_data_dict
from fetch_data import evgo_data_dict

#Define the home route
@app.route("/")
def index():
    #use render_template to render in our HTML file.
    return flask.render_template('index.html')

# Define the get data route to serve data to the page
@app.route("/blnk_data")
def serveBLNKData():
    #Return the data jsonify to access it
    return flask.jsonify(blnk_data_dict)

@app.route("/chpt_data")
def serveCHPTData():
    #Return the data jsonify to access it
    return flask.jsonify(chpt_data_dict)

@app.route("/evgo_data")
def serveEVGOData():
    #Return the data jsonify to access it
    return flask.jsonify(evgo_data_dict)

#Run the app
if __name__ == '__main__':
    app.run(debug=True)