# Interactive Stock Information Dashboard

## Project 3 Overview

For this project, we will be providing an interactive and updateable dashboard for three Electric Vehicle Charger Station stocks. This project is a simple interactive website that utilizes JavaScript and Plotly to update plots dynamically based on user selections from a dropdown menu. The website is built using HTML and provides an engaging way to visualize data by allowing users to choose different options from the dropdown menu to update the displayed plots. The data for the plots is accessed through Python, using sqlalchemy, and displayed using the Flask API service in python.

## Project 3 Team

- Induja Mohandas

- Angleneke Grayson

- Rodneaa Reese

- Nathan Humphreys Lucas

- Nathaniel Cervantez

  
### Features
- Dropdown Menu: Users can select different options from the dropdown menu.

- Dynamic Plot Updates: The website uses Plotly to update the plots based on the user selection.

### Technologies Used

- HTML: The structure of the website is created using HTML, providing the layout and content structure.

- Python: Python was used in conjuction with SQLAlchemy and Flask in order to access and alter the data, and serve it to an endpoint that can be accessed with javascript.

- JavaScript: JavaScript is used to create functions that will generate and update plots using plotly.

- D3: The D3 library is used to read in data from a flask endpoint that contains a JSON dictionary. It will also allow the program to update the plots using an event listener.

- Plotly: Plotly is used to generate the plots with the given data generated from the Javascript and D3 program.

- Lodash - Lodash is a number manipulation library that allows for fast and accurate functional programming when handling data in arrays.

### Conclusion

This project was designed to provide a dashboard that could be used to display data for a user, for any stock they may be invested in, or would like data on. This program can be updated to use any stock the user wishes.
