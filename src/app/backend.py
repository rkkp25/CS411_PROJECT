import flask
from flask import Flask, Response, jsonify, request, render_template, redirect, url_for
from flask_cors import CORS, cross_origin  # Import CORS
import mysql.connector
import math
import os, base64
import mysqlx
import requests
import random
import json
from dotenv import load_dotenv

#THIS IS AN EXAMPLE TO HOW TO CALL USING THE IMAGGA API (GIVEN WE HAVE AN IMAGE FROM HARVARD API)
# response = requests.post(
#     'https://api.imagga.com/v2/colors',
#     auth=(api_key, api_secret), <-- api_key and api_secret in here msut match the ones above
#     files={'image': open(image_path, 'rb')}) <-- image_path will be the variable to store harvard api call
# print(response.json())


load_dotenv()
IMAGGA_API = os.getenv('IMAGGA_API_KEY')
IMAGGA_SECRET = os.getenv('IMAGGA_SECRET_KEY')
GOOGLEAUTH = os.getenv('googleauthid')
GOOGLESECRET = os.getenv('googleauthsecret')

#mysql = mysqlx()
# Create a client with a connection URL or a dictionary
#client = mysqlx.get_client({"host": "localhost", "user": "root", "password": "your_password", "schema": "your_schema"}, pooling=True)
# Get a session from the client
#session = client.get_session()

app = Flask(__name__)
CORS(app)  # Enable CORS for your Flask app
CORS(app, resources={r"/api/*": {"origins": "*", "allow_headers": ["Content-Type", "Authorization"], }})
app.secret_key = 'holy guacamole' #CHANGE THIS TO SOMETHING SECURE

#these are for database credentials
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'outthewazoo'
app.config['MYSQL_DATABASE_DB'] = 'historicolor'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
##mysql.init_app(app)

##conn = mysql.connect()
##cursor = conn.cursor()


#GLOBAL VARIABLES FOR WHATEVER
img_append = '/full/843,/0/default.jpg' #needed for constructing the image url, pulled from chicago api documentation
IMG_POOL = 250 #this is how many possible images the method will pull from (img # 2 will always be the same image)
score = 0 #this is the global score variable that will eventually be stored into the database if the user chooses
colors = None #this will hold the colors of the generated image, for frontend to display (INITIALIZED TO NONE FOR A REASON)
imgurl = None

app.route('/')
def historicolor():
    return render_template('page.js')
#THIS IS TEMPLATE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE
    # cursor = connection.cursor()
    # cursor.execute("SELECT * FROM your_table")
    # result = cursor.fetchall()
#THIS IS TEMPLACE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE

# def calc_score(colors, actual_colors, score): #most simple function i could ever possibly write
#     assert actual_colors != None
#     assert colors != None
#     for i in range(len(colors)):
#         score += calc_ind_score(colors[i], actual_colors[i])
#     return score

#def calc_score(colors, actual_colors, score): #most simple function i could ever possibly write
 #   assert actual_colors != None
 #   assert colors != None
 #   for i in range(len(colors)):
 #       score += calc_ind_score(colors[i], actual_colors[i])
 #   return score

def hex_to_rgb(hex_color):
    #   Convert a hex color string to an RGB tuple.
    hex_color = hex_color[1:]
    hlen = len(hex_color)
    return tuple(int(hex_color[i:i+hlen//3], 16) for i in range(0, hlen, hlen//3))

def calc_score(guess_colors, actual_colors, score):
    # Mithat is trying something

    assert actual_colors is not None
    assert guess_colors is not None

    rgb_guess_colors = guess_colors #the user's guessed colors are already in rgb format
    rgb_actual_colors = [hex_to_rgb(color) for color in actual_colors] #the api returns the color in hex format so we need to change it to rgb

    for i in range(len(rgb_guess_colors)):
        score += calc_ind_score(rgb_guess_colors[i], rgb_actual_colors[i])

    return score

def calc_ind_score(guess_color, actual_color):
    score = 0
    assert len(guess_color) == len(actual_color)
    for i in range(len(guess_color)):
        score += calc_helper(guess_color[i], actual_color[i])
    return score

def calc_helper(guess, actual):
    max_score = 100
    max_deviation = 30

    deviation = abs(guess - actual)

    # force the deviation to not exceed max_deviation
    deviation = min(deviation, max_deviation)

    # trying out an exponential decay function to calculate the score
    score = max_score * math.exp(-deviation / max_deviation)
    return math.floor(score)
    # for some reason once you make a score thats worse than a certain
    # threshhold it always returns a score of 36, dont wanna tweak rn


def display_scores():
    cursor = conn.cursor()
    cursor.execute("SELECT name, score FROM scores ORDER BY score LIMIT 10")
    return cursor.fetchall()

def save_user_score(name, score):
    assert type(name) == str
    cursor = conn.cursor()
    cursor.execute("INSERT INTO scores (name, score) VALUES (%s, %s)", (name, score))
    conn.commit()
    return

def randomInt(top):
    return random.randint(1, top)

def getRandomArtwork(seed, fields=["id", "title", "artist_id", "artist_title", "image_id"]):
    try:
        queryParams = {"fields": ",".join(fields)}
        response =  requests.post(
            "https://api.artic.edu/api/v1/artworks/search",
            json={"size": 1, "from": seed},
            params=queryParams
        )
        result = response.json()
        return (result['config']['iiif_url'] + '/' +  result['data'][0]['image_id'] + img_append)
    except Exception as error:
        print("Error:", error)

def get_image(): #this returns the image url, which we want for imagga api
    return getRandomArtwork(randomInt(IMG_POOL))

def getColorFromArtwork(image_url):
    try:
        response = requests.get(
            'https://api.imagga.com/v2/colors?image_url=%s' % image_url,
            auth=(IMAGGA_API, IMAGGA_SECRET),)
        result = response.json()
        if result['status']['type'] != 'success':
            print('API response was not successful, trying again...')
            return getColorFromArtwork(get_image())
        else:
            return [result['result']['colors']['image_colors'][i]['html_code'] for i in range(3)]
    except Exception as error:
        print("Error:", error)


# colors = getColorFromArtwork(get_image())


#DONT ACTUALLY NEED THIS FUNCTION, JUST USE THE ONE ABOVE
# def getactualimage(iiif, img_id, append):
#     try:
#         query = iiif + '/' + img_id + append
#         image = requests.post(
#             query
#         )
#         return image
#     except Exception as error:
#         print("Error:", error)

@app.route('/api/getRandomArtwork', methods=['GET'])
def api_getRandomArtwork():
    seed = randomInt(IMG_POOL)
    try:
        artwork = getRandomArtwork(seed)
        colors = getColorFromArtwork(artwork)
        return jsonify({"artworkUrl": artwork, "topColors": colors[:3]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/getColorFromArtwork', methods=['GET'])
def api_getColorFromArtwork():
    try:
        imgurl = get_image()
        colors = getColorFromArtwork(imgurl)
        return jsonify({"colors": colors})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/submitColorGuesses', methods=['POST'])
def submit_color_guesses():
    data = request.json
    guessed_colors = data.get('guesses', [])
    actual_colors = data.get('actualColors', [])
    
    initial_score = 0  # Initialize score
    final_score = calc_score(guessed_colors, actual_colors, initial_score)
    
    # You can further process the score here (e.g., store in database)
    print("Final Score:", final_score)
    return jsonify({"score": final_score}), 200

    
# Start the Flask app
if __name__ == '__main__':
    app.run(debug=True)  # Set debug to False in a production environment




    
