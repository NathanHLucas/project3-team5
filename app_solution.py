#import flask
import flask

#Create the app
app = flask.Flask(__name__)

#Define the home route
@app.route("/")
def index():
    #use render_template to render in our HTML file.
    return flask.render_template('index.html')

#Run the app
if __name__ == '__main__':
    app.run(debug=True)