import React from 'react';
import './SearchPage.css';
import {useStateValue} from "../StateProvider/StateProvider";






function SearchPage(){ 
const [{term}, dispatch] = useStateValue(); 
   

return(
        <div className='search-page'>
             <div className='search-page_header'>
                <h1>{term}</h1>
            </div>
            
            <div className='search-page_results'>
                <h1> Search Page </h1>
            </div>
        </div>
    )
}

export default SearchPage;