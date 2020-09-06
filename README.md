# CheckMagnificent


CheckMagnificent monitors the health of the Magnificent Server. I am building this app as a coding test for Sauce Labs Open Source team.

## My goal

The Magnificent server fails 25% of the time, I want to write an app that monitors the health of the Magnificent Server.

__The app should:__ 
* Once started, run forever, until the user decides to stop it manually. 
* Show the user the output of every check made to the Magnificent server. 
* The user should be able to enter the number of seconds to wait between checks as an argument to the command. 
* Show the user the amount of failed and successful checks and the total of checks.


## Start CheckMagnificent
__Prerequisites__ 

* You have installed Python
* You have installed node v12.12.0 or higher
* Install twisted
``` sh
$ pip install twisted
```

* Clone this project and navigate to the directory

``` sh
$ git clone git@github.com:BOZ2323/CheckMagnificent.git

$ cd CheckMagnificent

$ npm install

```
__Get started__ 

1. Start server.py
``` sh
$ python server.py 
```

2. Start the app in a new terminal window
``` sh
$ node checkMagnificent.js 
```
3. If you wish to enter a number of seconds to wait between checks, use this argument in addition
``` sh
$ node checkMagnificent.js --seconds=3
```

__In case of errors:__ 
if you encounter errors, you may need to remove a code snippet that I added in server.py to be able to run it with python 3 on macOS.
Go to server.py, line 16 and remove:
``` sh
.encode('utf-8')
```
## Dependencies

axios
yargs

## Support
For support please feel free to send me an email: lillibaaske@gmx.de

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Roadmap
my future improvements would be:

* writing tests
* dockerizing the app
* create a config file

and if this was the project I'd be working on for the next months I'd have some notification appear on the user's screen.


## My decisions

I decided to use axios for the http requests.
As command line parsing tool I used yargs.


Since running the server.py on MacOS with Python 3, I ran into a blocker, the app didn't compile. When I tried to run it on my old Linux machine, using Python 2, server.py ran successfully. I then tried to retrieve the response data with curl, but this gave me an error as well.
In the browser their was the error message: "Request did not return bytes". 
I added utf-8 encoding to the "Magnificent"-string and this solved the issue for me. 



I added the total number of checks to the output, although it was not in the requirements.
    
