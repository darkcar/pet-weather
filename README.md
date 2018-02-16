# Pet Weather App

## Description 

Pets and weather application. You can view the pets list which stored in another app, add your own pets with locations. Accroding to the weather service provided by DarkSky, you will the pets need an Umbrella or not. 

## Service in use: 

* Google Maps API

* DarkSky API
 
## Deployed to Heroku

Demo Link: [https://protected-chamber-33421.herokuapp.com/](https://protected-chamber-33421.herokuapp.com/) - Waiting for serveral seconds to load the homepage data.


## Use in your local system?

1. Clone this repo to local machine. 

2. Before you run, make sure you have installed node.js.

3. Install the missing dependency. 

4. Navigate to project folder, simply run 'node index.js';

## In the end

* It will be slow the first time you visit the link demo. That's is becuase of Heroku dyno sleeping. Read this article [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku) for more information. 

* When you add your pet, the lat and long will be filled automatically if you fill a validate address and make the location field blur. 

* Since time is limited, I don't have time to make the interactive google map perfectly. Now it only shows the markers on the map.



