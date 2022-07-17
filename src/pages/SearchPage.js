import React from 'react';
import './SearchPage.css';
import {useStateValue} from "../StateProvider/StateProvider";
import useGoogleSearch from '../component/useGoogleSearch';

// get the custom google key api from 'https://developers.google.com'
// to enable the search the entire page go to 'cse.google.com' and get context id

/*
    Now How the Search Works? 😎
    (1) when we typing any word in input felid it redirect to /searchPage 
    (2) it well push the search-term in to Data Layer 
    (3) it well pulled by using useStateValue and we use the Custom Hook pass to it
    (4) then the hook call to googleSearch_API 
    (5) Now You Get Fully Response from google
*/
function SearchPage(){ 
const [{term}, dispatch] = useStateValue(); 
const { data } = useGoogleSearch(term); // it use Custom Hook , term pulled from data layer
 


console.log(data);
return(
        <div className='search-page'>
             <div className='search-page_header'>
                <h1>{term}</h1>
                {console.log(term)}
            </div>
            
            <div className='search-page_results'>
                
            </div>
        </div>
    )
}

export default SearchPage;