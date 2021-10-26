import React from "react";
import AuthorCard from "./AuthorCard"

function AuthorList({filteredAuthors}){

    const authors = filteredAuthors.map(author =>
        <AuthorCard authorObj={author} key={author.id} />)


    return(
        <div className='authors-container'>
            <ul className="author-cards">
                {authors}
            </ul>
        </div>
    )
}

export default AuthorList;