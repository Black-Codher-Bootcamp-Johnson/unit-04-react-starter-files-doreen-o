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
            <p style={{color:"red"}}>
                <em>{keyword && "Keywords Typed: " + keyword}</em>
            </p>
            <label>Search</label>
            <input type="text" name="search" value={keyword} onChange={(e) => props.setKeyword(e.target.value)}
        />
        <input type="submit" value="submit"/>
            </form>
    </div>


};
export default Search;