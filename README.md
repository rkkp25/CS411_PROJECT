# CS411_PROJECT

## Team 42 Members: Kris Peters, Ashton Fox, Valentina Haddad, Mithat Kus

### Ideas

1. Color Matching Game

learning about hex, but also learning about famous artists

User: user_score

APIS: 
 - image(artwork)
 - history api
 - color picker

Logic: - pull image get colors (a list)
 - randomly pick one
 - show it, give guesses
 - after show the history.

## 9/29 Dis

api_test pip3 list -> lists out all of the packets you've installed
pip install -> install some packet or lib

NEVER GIT PUSH THE .ENV FILE
example .env file
```
NASA_API_KEY= (blah blah the api key)
```
git ignore should not push the env file.


### api.py file:
```
import os
from dotenv import load_dotenv

load_dotenv()

NASA_API_KEY = os.getenv("NASA_API_KEY")

def get_apod(date, api_key):
	url = "https://api.nasa.gov/planetary/apod"
	params = {
		"date": date,
		"api_key": api_key
	}
	response = requests.get(url=url, params=params)
	return response.json() 

```


