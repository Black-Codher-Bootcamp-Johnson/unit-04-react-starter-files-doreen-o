import React from 'react';

const Search = (props) => {
const { keyword, setKeyword } = props;
const handleSubmit = (event) =>{
    event.preventDefault();
    props.findBooks(keyword);
}; 

return
    <div class="search-bar">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Search</label>
            <p>
                <em>{keyword && "Keywords Typed: " + keyword}</em>
            </p>
            <input type="text" name="search" value={keyword} onChange={(e) => props.setKeyword(e.target.value)}
        />
        <input type="submit" value="submit"/>
            </form>
    </div>


};
export default Search;