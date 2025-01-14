import './App.css';
import SearchBar from './components/search/search';
import { useEffect, useState } from 'react';
import axios from 'axios';

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }
  console.log(query)
  return posts.filter((post) => {
      const postTitle = post.title.toLowerCase();
      return postTitle.includes(query);
  });
};

const App = () => {

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
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(prods,searchQuery)

  return (
      <div className="search-area" >
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ul>
              {filteredPosts.map((post) => (
                <li key={post.nid}>{post.title}</li>
              ))}
          </ul>
      </div>
  );
}

export default App;
