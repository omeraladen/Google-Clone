import React, {useState} from 'react';
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/reducer';


function Search ({hideButtons = false}) {
    const [{}, dispatch] = useStateValue();
    const [input , setInput] = useState(""); 
    const navigate = useNavigate(); // replaced with useHistory();

    const search = (e) => { 
        e.preventDefault();  //prevent a browser reload/refresh

        console.log("you hit search button>>",input)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term : input
        })
        
        navigate('/search');
    };

    return(
    <form className='search'>

            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>

            {/* if we add hideButtons in <Search/> component in shows off 
                to use it in navbar after the user search and disable the buttons
            */}
           {!hideButtons ? (
            <div className='search__buttons'>
                <Button  type='submit' onClick={search}      variant="outlined">Google Search </Button>
                <Button  variant="outlined">I'm Feeling Lucky </Button>
            </div>
           ) : (
            <div className='search__buttons'>
                <Button className='search__buttonsHidden' type='submit' onClick={search}      variant="outlined">Google Search </Button>
                <Button className='search__buttonsHidden' variant="outlined">I'm Feeling Lucky </Button>
            </div>
           )}
    </form>

    )
    
}

export default Search;