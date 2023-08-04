import React from "react";

export default class MovieCard extends React.Component {

  
  render() {
    const {movie,addStar,decStar,handleCarts,handleFavs}=this.props;
    const {title,plot,src,rating,price,stars,fav,cart}=this.props.movie;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
            src={src}
              alt="Poster"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">${price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                    <img 
                    src="https://cdn-icons-png.flaticon.com/128/56/56889.png" 
                    alt="decrease"
                    onClick={()=>{decStar(movie)}}
                    className="str-btn"/>
                    <img 
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                    className="stars"/>
                    <img 
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                    alt="increase" 
                    onClick={()=>{addStar(movie)}}
                    className="str-btn"/>
                    <span>{stars}</span>
              </div>
              <div onClick={()=>{handleFavs(movie)}}>
                {fav?<button className="unfavourite-btn">unfavourite</button>:<button className="favourite-btn">favourite</button>}
              </div>
              
              <div onClick={()=>{handleCarts(movie)}}>
                {cart?<button className="uncart-btn">Remove from cart</button>:<button className="cart-btn">Add to cart</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


