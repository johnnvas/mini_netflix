<!-- ABOUT THE PROJECT -->
## About Mini-Flix

![Product Name Screen Shot](https://github.com/johnnvas/mini_netflix/blob/main/public/miniflix.landing.png)
![Product Name Screen Shot](https://github.com/johnnvas/mini_netflix/blob/main/public/single_movie_page.png)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
* [React.js](https://reactjs.org/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

PLease check the version of node you are using 
* npm
  ```sh
  node -v
  ```

### Installation

1. Get a free API Key at [http://www.omdbapi.com/]((http://www.omdbapi.com/))
2. Clone the repo
   ```sh
   git clone https://github.com/johnnvas/mini_netflix
   ```
3. Install NPM packages
   ```sh
    npm i -g sass 
    npm i -g gulp-sass 
   ```
4. OPTIONAL - to contribute to the ```scss``` files and watch for changes made
   ```sh
    cd mini_netflix/src/components/
    gulp
   ```
   This will watch for changes made to the ```scss``` files and update the corresponding css files that were generated
   
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To start the app 
   ```sh
    cd mini_netflix
    npm start
   ```

This is a very simple minimalist app that allows a user to click on a movie thumbnail then navigate to a ``` movie details (movie/:movieId)``` page where the movie poster, title, description, and rating will be displayed. If it is the first time A user navigates to the page the api call will be fired. If the user has already navigated to the page and wants to view it again, there will not be an aditional ```fetch``` call. All the movie details will be extracted from a local storage that holds all the previous data calls. 

<p align="right">(<a href="#top">back to top</a>)</p>
