import { useEffect , useState } from "react";

const Animeslist = ({animes}) => {
    let [wish , setWish] =useState([]);
    useEffect(()=>{
        if(localStorage.getItem("wish")==null)  //if wish array is not present before
        {
          localStorage.setItem("wish","[]");
        }
    },[])
    let handleWishlist = (id) =>{
      let x =  localStorage.getItem("wish");
      x = JSON.parse(x);
      if( !x.includes(id))    //if id is not present
      {
        alert("added to wishlist")
      x.push(id);
      x = JSON.stringify(x);
      localStorage.setItem("wish",x);
      console.log(x,typeof x);
      }
      else{
        alert("remove from wishlist")
        let i=x.indexOf(id);
        x.splice(i,1);
        x=JSON.stringify(x);
        localStorage.setItem("wish",x);
      }

    }
    return (
<div  className="animes-list">
    {
        animes.map((anime)=>{
            return (
                <div key={anime.mal_id} className="anime">
                    <img src={anime.images.jpg.image_url} alt=" poster not found"/>
                    <h2>Anime : {anime.title}</h2>
                    <h2>Ratings : {anime.score}</h2>
                    <button onClick={()=>{handleWishlist(anime.mal_id)}}>&#10084;</button>
                </div>
            )
        })
    }
</div>
      );
}
 
export default Animeslist ;