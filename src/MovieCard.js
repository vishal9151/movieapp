import React from "react";

class MovieCard extends React.Component {

  constructor(){
    
    super();
    console.log(this.props);
    
    this.state={
        title: "The Avengers",
        plot:"Nothing just check",
        price:"199",
        src: "https://th.bing.com/th/id/R.9532afb1a699d1c62f4592d0cf790a04?rik=OdVvofdfHSijhw&riu=http%3a%2f%2fwww.thinkhero.com%2fwp-content%2fuploads%2f2011%2f01%2fthe_avengers___poster_2_by_themadbutcher-d36eop9.jpg&ehk=u%2f5dJyaq%2fM4YMwRM%2bG%2bJuiOMzDcq%2bnUlsZKF2IpdGLM%3d&risl=1&pid=ImgRaw&r=0",
        rating: "8.9",
        stars: 0,
        fav: false,
        cart: false
    }
    this.addStars=this.addStars.bind(this);
    this.decreaseStars=this.decreaseStars.bind(this);
    this.handleFav=this.handleFav.bind(this);
    this.handleCart=this.handleCart.bind(this)
  }
  
  handleCart(){
    this.setState({
        cart: !this.state.cart
    })
  }

  handleFav(){
    this.setState({
        fav: !this.state.fav
    })
  }

  decreaseStars(){
    if(this.state.stars>0){
        this.setState((prev)=>{
            return {
                stars: prev.stars-0.5
            }
        })
    }
  }

  addStars(){
    //form 1 to set state of stars
    // if(this.state.stars<10){
    // this.setState({
    //     stars: this.state.stars+0.5
    // });

    // form 2 to set state of stars
    if(this.state.stars<10){
        this.setState((prev)=>{
            return {
                stars: prev.stars+0.5
            }
        })
    }
  }
  render() {
    const {title,plot,price,src,rating,stars,fav,cart}=this.state;
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
                    onClick={this.decreaseStars}
                    className="str-btn"/>
                    <img 
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                    className="stars"/>
                    <img 
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                    alt="increase" 
                    onClick={this.addStars}
                    className="str-btn"/>
                    <span>{stars}</span>
              </div>
              <div onClick={this.handleFav}>
                {fav?<button className="unfavourite-btn">unfavourite</button>:<button className="favourite-btn">favourite</button>}
              </div>
              
              <div onClick={this.handleCart}>
                {cart?<button className="uncart-btn">Remove from cart</button>:<button className="cart-btn">Add to cart</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
