import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton"

import './Search.scss'


function Search() {
    return (
        <div className="search">

            <input className="search-form" />
            <IconButton className='search-icon'>
                        <SearchIcon fontSize="small" />
                    </IconButton>

        </div>
    )
}

export default Search
