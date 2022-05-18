import React from 'react';
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';


function Search () {

    cont search = e => { e.preventDefault(); }

    return(
    <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input/>
                <MicIcon/>
            </div>

            <div className='search__buttons'>
                <Button onClick={search} variant="outlined">Google Search </Button>
                <Button variant="outlined">I'm Feeling Lucky </Button>
            </div>
    </div>

    )
    
}

export default Search;