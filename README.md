# LIRI-Bot
-----
Language Interpretation and Recognition Interface


This CLI application will fetch Spotify info, Concert info, Movie info and more - all right from the CLI of your choice.

View a demo 
----
![LIRI Demo](github.com/zmatthews33/LIRI-Bot/master/liri.png)


Requirements
-----
Node
NPM
A command line interface (like Terminal or Bash)

Installation
----
Clone or download the repository to your computer.

Open your CLI and navigate to the folder.

Run npm install

Add a .env file to the root of the directory with the following content:
SPOTIFY_ID=your spotify id here
SPOTIFY_SECRET=your spotify secret here
OMDB_KEY=your omdb key here

All dependencies should now be installed and LIRI is ready for use

Using LIRI
----
1. Get a song listing from Spotify
node liri spotify-this-song [song here]

LIRI returns a list of songs from Spotify. Results are from all artists with song titles matching your query, along with details like album, Spotify preview link and more.

2. Get a concert listing
node liri concert-this [band here]

Using the Bands In Town API, LIRI returns a list of upcoming concerts from bandsintown.com based on the user input.

3. Get movie info
node liri movie-this [movie here]

LIRI returns details from OMDB about the movie you've chosen.

4. Do what it says
node liri do-what-it-says

Runs a query based on contents .txt in the repo
