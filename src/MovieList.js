import React from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component{

    constructor(){
        super();
        //Creating the state object 
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  src:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  src:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  src:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  stars: 0,            
                  fav: false,
                  cart: false                  
                }]
        } 
  }

  handleCart=(movie)=>{
    //form 1 to set state of stars
    // if(this.state.stars<10){
    // this.setState({
    //     stars: this.state.stars+0.5
    // });

    // form 2 to set state of stars
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].cart=!movies[mid].cart;
    this.setState({
        movies
    });
  }

  handleFav=(movie)=>{
    //form 1 to set state of stars
    // if(this.state.stars<10){
    // this.setState({
    //     stars: this.state.stars+0.5
    // });

    // form 2 to set state of stars
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav;
    this.setState({
        movies
    });
  }

  decStars=(movie)=>{
    //form 1 to set state of stars
    // if(this.state.stars<10){
    // this.setState({
    //     stars: this.state.stars+0.5
    // });

    // form 2 to set state of stars
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars>0){
    movies[mid].stars-=0.5;
    }
    this.setState({
        movies
    });
  }

    addStars=(movie)=>{
    //form 1 to set state of stars
    // if(this.state.stars<10){
    // this.setState({
    //     stars: this.state.stars+0.5
    // });

    // form 2 to set state of stars
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars<5){
    movies[mid].stars+=0.5;
    }
    this.setState({
        movies
    });
  }
    render(){

        const {movies}=this.state;
        return (
            <>
              <h1>Movie List</h1>
              {movies.map((movie)=> <MovieCard movie={movie} addStar={this.addStars} decStar={this.decStars} handleCarts={this.handleCart} handleFavs={this.handleFav} />)}
            </>
        )
    }
}