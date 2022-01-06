import { createBrowserHistory } from 'history'
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const history = createBrowserHistory();
    const [prods,setProds] =useState([]);


    const callSearchApi = (query) => { 
        setSearchQuery(query)
        if (query.length <3){
            return
        }

        const url='https://mayankapis.bakewish.in/api/floweraura/flowers'+'?q='+query;
          axios.get(url)
          .then((response) => {
            const prodItems= response.data.data.results
            setProds(prodItems);
            props.newProds(prodItems);
          })
          .catch(error => {
            console.error(`Error: $error`);
            setProds([]);
          }
          );
      }
 
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();

    }

return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search products</span>
        </label>
        <input
            value={searchQuery}
            // onChange={e =>setSearchQuery(e.target.value)}
            onChange={e => callSearchApi(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        {searchQuery}
    
        <button type="submit">Search</button>
    </form>
);
};
export default SearchBar;