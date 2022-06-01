import React, {useState} from 'react';
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Search () {
    const [input , setInput] = useState(""); 
    const navigate = useNavigate(); // replaced with useHistory();

    const search = (e) => { 
        e.preventDefault();  //prevent a browser reload/refresh

        navigate('/search');

    }

    return(
    <form className='search'>

            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>

            <div className='search__buttons'>
                <Button type='submit' onClick={search}      variant="outlined">Google Search </Button>
                <Button variant="outlined">I'm Feeling Lucky </Button>
            </div>
    
    </form>

    )
    
}

export default Search;