import flask
from flask import Flask, Response, request, render_template, redirect, url_for
import mysql.connector
import math
import os, base64
import requests
import random
import json

#THIS IS AN EXAMPLE TO HOW TO CALL USING THE IMAGGA API (GIVEN WE HAVE AN IMAGE FROM HARVARD API)
# response = requests.post(
#     'https://api.imagga.com/v2/colors',
#     auth=(api_key, api_secret), <-- api_key and api_secret in here msut match the ones above
#     files={'image': open(image_path, 'rb')}) <-- image_path will be the variable to store harvard api call
# print(response.json())

secrets = json.load(open('apikeys.json'))
api_key = secrets['imagga_key']
api_secret = secrets['imagga_secret']

mysql = MySQL()
app = Flask(__name__)
app.secret_key = 'holy guacamole' #CHANGE THIS TO SOMETHING SECURE

#these are for database credentials
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'outthewazoo'
app.config['MYSQL_DATABASE_DB'] = 'historicolor'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

conn = mysql.connect()
cursor = conn.cursor()


#GLOBAL VARIABLES FOR WHATEVER
img_append = '/full/843,/0/default.jpg' #needed for constructing the image url, pulled from chicago api documentation
IMG_POOL = 250 #this is how many possible images the method will pull from (img # 2 will always be the same image)
score = 0 #this is the global score variable that will eventually be stored into the database if the user chooses

#THIS IS TEMPLATE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE
    # cursor = connection.cursor()
    # cursor.execute("SELECT * FROM your_table")
    # result = cursor.fetchall()
#THIS IS TEMPLACE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE

def calc_score(colors, actual_colors, score): #most simple function i could ever possibly write
    for i in range(len(colors)):
        score += calc_ind_score(colors[i], actual_colors[i])
    return score

def calc_ind_score(guess_color, acutal_color):
    #not really sure how this will actually look when its fully implemented, but for now im
    #going to assume that the inputs are held as arrays of rbg values eg: [255, 255, 255]
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

def find_dominant_color(image):
    return



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

image= getRandomArtwork(randomInt(100))
print(image)


    
