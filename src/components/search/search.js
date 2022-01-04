import { createBrowserHistory } from 'history'


const SearchBar = ({searchQuery,setSearchQuery}) => {
    const history = createBrowserHistory();
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
            onInput={e =>setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);
};
export default SearchBar;