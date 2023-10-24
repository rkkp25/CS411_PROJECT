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


