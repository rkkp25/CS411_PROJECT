import flask
from flask import Flask, Response, request, flask_login, render_template, redirect, url_for
import mysql.connector
import os, base64

host = "your_host"
user = "your_user"
password = "your_password"
database = "your_database"

# Establish a connection to the MySQL server
connection = mysql.connector.connect(
    host=host,
    user=user,
    password=password,
    database=database
)


#THIS IS TEMPLATE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE
cursor = connection.cursor()
cursor.execute("SELECT * FROM your_table")
result = cursor.fetchall()
#THIS IS TEMPLACE CODE FOR REFERENCE ON HOW TO PULL DATA FROM THE DATABASE

def calc_score(hex_code):
    return

def display_scores():
    return

def get_image():
    return

def find_dominant_color(image):
    return

def save_score():
    return



