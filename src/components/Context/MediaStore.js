import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";

export let MediaContext = createContext(null);
export default function MediaContextProvider(props){

    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);
    const [trending, setTrending] = useState([]);
    

    
      const getTrendingItems = async (mediaType , callback) => {
          const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?language=en-US&api_key=8dd3f283ba8e54964c4f468ff4668f65`);
          callback(data.results);
      };
    
      useEffect(() => {
        getTrendingItems('movie', setTrendingMovies);
        getTrendingItems('tv', setTrendingTv);
        getTrendingItems('person', setTrendingPeople);
        getTrendingItems('all', setTrending);
      }, []);



return <MediaContext.Provider value={{trendingMovies , trendingPeople , trendingTv , trending}}>
    {props.children}
</MediaContext.Provider>

}