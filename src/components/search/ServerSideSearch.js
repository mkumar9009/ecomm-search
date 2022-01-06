import '../../App.css';
import SearchBar from './search';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ServerSideSearch = () => {

  const url = 'https://mayankapis.bakewish.in/api/floweraura/cakes/regular'
  const [prods,setProds] = useState([]);

  useEffect (() => {
    getPopularProds();
    },[])

  const getPopularProds = () => {
    axios.get(url)
    .then((response) => {
      const prodItems=response.data.data.results;
      console.log('in effect',prodItems);
      setProds(prodItems);
  })
  .catch (error => console.error(`Error: $error`));
  }
  
  const searchurl = window.location.href;
  let query=''
  if (searchurl.includes('=')){
    query = searchurl.split('=')[1].split('&')[0]
  }
  else {
    query =''
  }

  const updateProds = ( newProds) => {
    setProds(newProds)
  }

// prods is used as a state 
// once the searchQuery is being changed we will render the component
// and when the searchApi is updating prods will it call the component to re-render?

  
  // if (searchQuery.length>0) 
  // {
  //   getMatchingProds(searchQuery)
  // }

  return (
      <div className="search-area" >
          <SearchBar newProds={updateProds} />
          <ul>
              {prods.map((prod) => (
                <li key={prod.nid}>{prod.title}</li>
              ))}
          </ul>
      </div>
  );
}

export default ServerSideSearch;
