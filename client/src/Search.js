import React from "react"



function Search({search, setSearch}) {

    

    return(
        <div className="search_bar">
            <input
                type="text"
                placeholder="Search by book title or author name"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                className="search_input"
                />
        </div>
    )
}

export default Search