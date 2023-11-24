import flask
from flask import Flask, Response, request, flask_login, render_template, redirect, url_for
import mysql.connector
import os, base64

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


#THIS IS TEMPLATE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE
cursor = connection.cursor()
cursor.execute("SELECT * FROM your_table")
result = cursor.fetchall()
#THIS IS TEMPLACE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE

def calc_score(hex_code):
    return

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

def get_image():
    return

def find_dominant_color(image):
    return


