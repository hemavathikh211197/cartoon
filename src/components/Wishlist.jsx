import { useEffect, useState } from "react";
import Animeslist from "./Animeslist";
import useFetch from "./useFetch";
const Wishlist = () => {
        let {data: animes , error , pending } = useFetch("https://api.jikan.moe/v4/anime");
        const [wish , setwish]=useState(null)
        useEffect(()=>{
            let wish = localStorage.getItem("wish");
            wish = JSON.parse(wish);
            setwish(wish);
        } ,[])

    
        return ( 
                <div>
                    {pending && <div class="spinner -border text-anger" role="status">
                        <span class="visually-hidden">Loading...</span></div>}
                        {animes && <Animeslist animes={animes.filter((anime)=>{return wish.includes(anime.mal_id)})}/>}
                </div>
               );
}
 
export default Wishlist;