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

apod = get_apod("2010-10-10")
idk wtf he wrong after this

```

## 10/20 Dis

- React: installation - https://react.dev/learn/start-a-new-react-project
- Angular: tour of heros

```
Desktop npx create-next-app@lastest
"What is your project names:" ...
"Would you like ot use Typescript:" No/Yes (NO)
"Would you like to use ESLint?" No/Yes (YES) this gives us the squiggly lines for errors
"Would you like to use Tailwind CSS?" No/Yes (YES)
"Would you liketo use src/directory: YES
WOuld you like to use App Router: YES
Would you like to custimze the default import blah blah NO
```

README: anything about our project goes in here, like a summary.
gitignore: anything we dont want to add to git we add here
package.json: 
package-lock.json: contains all the dependencies, version, integrity, this file is important so you can run "npm install" node will look for this directory and install everything in there. Bug with version issues: check package-lock.


public: contains all public facing assets/information
src: 
- layout.js: how everything is being displayed
	- RootLayout({ children }), makes everything else it's child (or vice versa)
	- this is like our main file
- globals.css: where we define the global theme for the project



npm run dev (dev is  ascript in package.json)

### think of a website of top left, right down


```
pip3 list
pip3 freeze > requirements.txt
pip install --upgrade pip
```

## 10/27 Dis

files in flask folder:
* virtualenv -p python3 venv ( this is a file)
* .env 
* main.py

make sure to do pip install flask

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```
OR
```
if __name__ == "__main__":
    app.run(port=8080, debug=True)

```

how to run it:
* flask-app flask --app main run --port=8080
    * its on 127.0.0.1:8080
* make sure that your server IS RUNNING when you test this

in .env file:
* do pip install env (i think)
```
DATA_GOV_API_KEY= (insert api key)
```

### Full main.py file:
```
import os

//from flask import Flask
import flask
from dotenv import load_dotenv


load_dotenv()
DATA_GOV_API_KEY = os.environ.get("DATA_GOV_API_KEY")

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>NASA APOD</h1>"

app.route("/apod/<date>", methods=["GET"])
def get_apod(date):
    url = f"https://api.nasa.gov/planetary/apod?date={date}" (this lets you querery (??) the date)
    params = {
        "api_key": DATA_GOV_APT_KEY
    }
    if flask.request.method == "GET"
        response = requests.get(url=url, params=params)
    response = request.get(url=url, params=params)
    return response.json()

if __name__ == "__main__":
    app.run(port=8080)
```

waitress: not necessary but you could import serve, and then when doing if __name__ ... do server(port=...) instead

when you add the apod route, and add /apod to your browser link, itll give you the output of the route

flask-app curl -X GET -G "http....apod" -> youll get the output on your terminal
flask-app curl -X GET -G "http://127.0.0.1:8080/apod-2023-10-26" -I (or no -I)
flask-app curl -X GET -G "http://127.0.0.1:8080/apod-2023-10-26" -D '{"date":"2023-10-26"}'
* gets the api output for oct 26 2023
