#Import sqlalchemy dependencies
from sqlalchemy import create_engine, text

# SQLite database paths
blnk_path = 'Resources/BLNK.db'
chpt_path = 'Resources/CHPT.db'
evgo_path = 'Resources/EVGO.db'

# Create a SQLAlchemy engine.
engine = create_engine(f'sqlite:///{blnk_path}')

# Create a connection to the database.
connection = engine.connect()

# Defining the SQL query
sql_query = text("SELECT * FROM data") 

# Execute the query and fetch all the data.
result = connection.execute(sql_query)
#data contains all the info in the database
blnk_data = result.fetchall()
# Close the database connection when you're done.
connection.close()

#Convert the data into a dict form to allow it to be jsonify'd
blnk_data_dict = [
    {
        'Date': row[0],
        'Open': row[1],
        'High': row[2],
        'Low': row[3],
        'Close': row[4],
        'Adj Close': row[5],
        'Volume': row[6]
    }
    for row in blnk_data
]

# Create a SQLAlchemy engine.
engine = create_engine(f'sqlite:///{evgo_path}')

# Create a connection to the database.
connection = engine.connect()

# Defining the SQL query
sql_query = text("SELECT * FROM data") 

# Execute the query and fetch all the data.
result = connection.execute(sql_query)
#data contains all the info in the database
evgo_data = result.fetchall()
# Close the database connection when you're done.
connection.close()

#Convert the data into a dict form to allow it to be jsonify'd
evgo_data_dict = [
    {
        'Date': row[0],
        'Open': row[1],
        'High': row[2],
        'Low': row[3],
        'Close': row[4],
        'Adj Close': row[5],
        'Volume': row[6]
    }
    for row in evgo_data
]

# Create a SQLAlchemy engine.
engine = create_engine(f'sqlite:///{chpt_path}')

# Create a connection to the database.
connection = engine.connect()

# Defining the SQL query
sql_query = text("SELECT * FROM data") 

# Execute the query and fetch all the data.
result = connection.execute(sql_query)
#data contains all the info in the database
chpt_data = result.fetchall()
# Close the database connection when you're done.
connection.close()

#Convert the data into a dict form to allow it to be jsonify'd
chpt_data_dict = [
    {
        'Date': row[0],
        'Open': row[1],
        'High': row[2],
        'Low': row[3],
        'Close': row[4],
        'Adj Close': row[5],
        'Volume': row[6]
    }
    for row in chpt_data
]