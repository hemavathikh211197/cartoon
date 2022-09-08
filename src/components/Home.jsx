import Animeslist from "./Animeslist";
import useFetch from "./useFetch";

const Home = () => {

    let {data : animes, pending, error}=useFetch("https://api.jikan.moe/v4/anime")
    return ( 
        <div>
          
          {pending && <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading....</span>
            
            </div>}
          {animes && <Animeslist animes={animes}/>}
        </div>
     );
}
 
export default Home;