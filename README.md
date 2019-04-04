# liri-node-app
Liri Node App
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

# Pre-requisites
Before you start, you will need to download nodeJS to run liri on terminal command line.

# Usage
1. To search for concerts in town, type the following on terminal:
    `node liri.js concert-this '<artist/band name here>'`

* This will search the Bands in Town Artist Events API for the specified artist/band and render the following information to the terminal:

     * Name of the venue
     * Venue location

* The image below is an example of a commandline request and liri's response:
![Image of concert_this with band name](./images/liri_concert.png)

2. To search for information about songs in Spotify, type the following on terminal: 
    `node liri.js spotify-this-song '<song name here>'`

* This will show the following information about the specified song in your terminal/bash window

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from
   * If no song is provided then your program will default to "What's My Age Again" 

* The image below is an example of a commandline request with a song name and liri's response:
![Image of spotify song search with song name](https://github.com/singhseema123/liri-node-app/tree/master/images/liri_spotify.png)

* The image below is an example of a commandline request without a song name and liri's response. Please note, liri will use a default song:
![Image of spotify song search without song name](https://github.com/singhseema123/liri-node-app/tree/master/images/liri_no_songname.png)

3. To search for information about a movie in OMDB, type the following on terminal:
    `node liri.js movie-this '<movie name here>'`

* This will output the following information to your terminal/bash window:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie
   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

* The image below is an example of a commandline request with a movie name and liri's response:
![Image of OMDB search with no movie name](https://github.com/singhseema123/liri-node-app/tree/master/images/liri_movie.png)

* The image below is an example of a commandline request without a movie name and liri's response. Please note, liri will use a default movie:
![Image of spotify song search with song name](https://github.com/singhseema123/liri-node-app/tree/master/images/liri_no_movie.png)

4. You can also run commands from 2 (Spotify song search) and 3 (OMDB movie search)  from a text file by typing the following on terminal:
    `node liri.js do-what-it-says inputFileName`
    
* In order to make this work, you must have a file whose name is the same as inputFileName with one of the following 2 command types in it to perform music/movie search:
    * spotify-this-song,"I Want it That Way"
        OR
    * movie-this,"Some Like It Hot"

* The image below is an example of a commandline request to use a file for performing spotify song search and liri's response:
![Image of spotify song search from inputfile](https://github.com/singhseema123/liri-node-app/tree/master/images/liri_inputFromFile.png)

5. You can check log.txt for the requests you made on commandline and the information that liri returned to you. See image below for an example run:

![Image of reviewing activities from log.txt](https://github.com/singhseema123/liri-node-app/tree/master/images/liri_spotify.png)