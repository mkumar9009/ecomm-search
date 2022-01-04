import './App.css';
import Search from './components/search/search';
import { useState } from 'react';

const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }
  console.log(query)
  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

const App = () => {

  const searchurl = window.location.href;
  let query=''
  if (searchurl.includes('=')){
    query = searchurl.split('=')[1].split('&')[0]
  }
  else {
    query =''
  }
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts,searchQuery)

  return (
      <div className="search-area" >
          <Search 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ul>
              {filteredPosts.map((post) => (
                <li key={post.id}>{post.name}</li>
              ))}
          </ul>
      </div>
  );
}

export default App;
