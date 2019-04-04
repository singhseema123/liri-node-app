require('dotenv').config();
const keys = require('./keys.js');
const axios = require('axios');

const fs = require('fs');
const logFile = './log.txt';

let inputCommand = process.argv[2];
fs.appendFile(logFile, `${inputCommand}\n`, function(logerr){});

const spotifySong = function(songName)
{
    const Spotify = require('node-spotify-api')
    const spotify = new Spotify(keys.spotify);
    if (!songName)
        songName = "What\'s my age again";
    fs.appendFile(logFile, `${songName}\n`, function(logerr){});

        spotify.search({type:'track', query: songName}, function(err, data){
        if (err)
        {
            let msg = `Error occurred during spotify artist search: ${err}`; 
            return console.log(msg);
            fs.appendFile(logFile, `${msg}\n`, function(logerr){});
        }
        else
        {
            console.log("Input Name: " + songName);
            fs.appendFile(logFile, `Input Name: ${songName}\n`, function(logerr){});
            console.log("Song Name: " + data.tracks.items[0].name);
            fs.appendFile(logFile, `Song Name: ${data.tracks.items[0].name}\n`, function(logerr){});
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            fs.appendFile(logFile, `Artist: ${data.tracks.items[0].artists[0].name}\n`, function(logerr){});
            console.log(data.tracks.items[0].external_urls.spotify); 
            fs.appendFile(logFile, `URL: ${data.tracks.items[0].external_urls.spotify}\n`, function(logerr){});
            console.log("Album Name: " + data.tracks.items[0].album.name); 
            fs.appendFile(logFile, `Album Name: ${data.tracks.items[0].album.name}\n`, function(logerr){});
        }     
    });
}

const aboutMovie = function(movieName)
{
   if (!movieName)
     movieName = "Mr. Nobody";
   fs.appendFile(logFile, movieName, function(logerr){});

   let OMDBKey = 'trilogy';
   let OMDBUrl=`http://www.omdbapi.com/?apikey=${OMDBKey}`;
   OMDBUrl += `&t=\"${movieName}\&r=json&y=&plot=short&tomatoes=true"`;
   console.log(OMDBUrl);
   axios.get(OMDBUrl).then(function(response) {

   // If the request is successful (i.e. if the response status code is 200)
   if (response.status === 200) 
   {
     console.log(`Title of the Movie: ${response.data.Title}`);
     fs.appendFile(logFile, `Title of the Movie: ${response.data.Title}\n`, function(logerr){});
     console.log(`Year the Movie Came Out: ${response.data.Year}`);
     fs.appendFile(logFile, `Year the Movie Came Out: ${response.data.Year}\n`, function(logerr){});
     console.log(`Imdb rating of the Movie: ${response.data.Rated}`);
     fs.appendFile(logFile, `Imdb rating of the Movie: ${response.data.Rated}\n`, function(logerr){});
     console.log(`Language of the Movie: ${response.data.Language}`);
     fs.appendFile(logFile, `Language of the Movie: ${response.data.Language}\n`, function(logerr){});
     console.log(`Country where movie was produced: ${response.data.Country}`);
     fs.appendFile(logFile, `Country where movie was produced: ${response.data.Country}\n`, function(logerr){});
     console.log(`Actors in the Movie: ${response.data.Actors}`);
     fs.appendFile(logFile, `Actors in the Movie: ${response.data.Actors}\n`, function(logerr){});
     console.log(`Plot of the Movie: ${response.data.Plot}`);
     fs.appendFile(logFile, `Plot of the Movie: ${response.data.Plot}\n`, function(logerr){});
   }
   });
}


if (inputCommand === 'spotify-this-song')
{
    let songName =  process.argv[3];
    spotifySong(songName);
}
else 
if (inputCommand === 'movie-this')
{
    let movieName = process.argv[3];
    aboutMovie(movieName);
}
else 
if (inputCommand === 'concert-this')
{
    let artist = process.argv[3];
    if (!artist)
        console.log("No band/artist provided");
    else
    {
        fs.appendFile(logFile, `${artist}\n`, function(logerr){});

        axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`
        ).then(function(response) {
            if (response.status === 200)
            {
                console.log("Artist/Band Name: " + response.data[0].lineup[0]);
                fs.appendFile(logFile, `Artist/Band Name: ${response.data[0].lineup[0]}\n`, function(logerr){});

                console.log("Concert Venue Name: " + response.data[0].venue.name);
                fs.appendFile(logFile, `Concert Venue Name: ${response.data[0].venue.name}\n`, function(logerr){});

                console.log("Concert Location: " + response.data[0].venue.country + " " + response.data[0].venue.city);
                fs.appendFile(logFile, `Concert Location: ${response.data[0].venue.country} ${response.data[0].venue.city}\n`, function(logerr){});
            }
        });
    }
}
else
if (inputCommand === 'do-what-it-says')
{
    let fileName = process.argv[3];
    fs.appendFile(logFile, fileName, function(logerr){});
    fs.readFile(fileName, 'utf8', function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
        console.log(data);
      
        // Then split it by commas (to make it more readable)
        const dataList = data.split(',');
        console.log(dataList);
        if (dataList[0] === 'spotify-this-song')
        {
          let songName = dataList[1];
          spotifySong(songName);
        }
        else
        if (dataList[0] === 'movie-this')
        {
          let movieName = dataList[1];
          aboutMovie(movieName);
        }
      });
}
