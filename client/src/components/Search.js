import React from "react"



function Search({search, setSearch, word }) {

    

    return(
        <div className="search_bar">
            <input
                type="text"
                placeholder={word}
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                className="search_input"
                />
        </div>
    )
}

export default Search;