import React from 'react'


function Search ({handleSearchChange}) {



    return(

            <div>
            
            <form>
            
            <input type = "search" onChange = { e => handleSearchChange(e)} />
            
            
            </form>
            </div>


    )




}

export default Search 