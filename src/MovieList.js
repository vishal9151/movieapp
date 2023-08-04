import React from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component{
    
    render(){
        return (
            <>
              <h1>Movie List</h1>
              <MovieCard title="The Avengers" plot="Nothing just check" price="199" src="https://th.bing.com/th/id/R.9532afb1a699d1c62f4592d0cf790a04?rik=OdVvofdfHSijhw&riu=http%3a%2f%2fwww.thinkhero.com%2fwp-content%2fuploads%2f2011%2f01%2fthe_avengers___poster_2_by_themadbutcher-d36eop9.jpg&ehk=u%2f5dJyaq%2fM4YMwRM%2bG%2bJuiOMzDcq%2bnUlsZKF2IpdGLM%3d&risl=1&pid=ImgRaw&r=0" rating="8.9"    />
            </>
        )
    }
}