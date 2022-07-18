import React from 'react';
import './SearchPage.css';
import {useStateValue} from "../StateProvider/StateProvider";
import useGoogleSearch from '../component/useGoogleSearch';
import Response from '../response'
import { Link } from 'react-router-dom';
import Search from '../component/Search';

import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

// it use Custom Hook , term pulled from data layer (LIVE CALL API)
//const { data } = useGoogleSearch(term); 
 
const data = Response;

console.log(data);
return(
    <div className="searchPage">
    {/*<h1>This is search page WoW!!!!!</h1>*/}
    <div className="searchPage_header">
        <Link to="/">
            <img
                className="searchPage_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                alt=""/>
        </Link>
        <div className="searchPage_headerBody">
            <Search  hideButtons/>
          <div className="searchPage_options">


            <div className="searchPage_optionsLeft"> {/*--------searchPage left Side--------------*/}
                <div className="searchPage_option">
                    <SearchIcon/>
                    <Link to="/all">All</Link>
                </div>
                <div className="searchPage_option">
                    <DescriptionIcon/>
                    <Link to="/news">News</Link>
                </div>
                <div className="searchPage_option">
                    <ImageIcon/>
                    <Link to="/images">Images</Link>
                </div>
                <div className="searchPage_option">
                    <LocalOfferIcon/>
                    <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPage_option">
                    <RoomIcon/>
                    <Link to="/maps">Maps</Link>
                </div>
                <div className="searchPage_option">
                    <MoreVertIcon/>
                    <Link to="/more">More</Link>
                </div>
            </div>
        

            <div className="searchPage_optionsRight"> {/*--------searchPage Right Side--------------*/}
              <div className="searchPage_option">
                   <Link to="/settings">Settings</Link>
                    </div>
                 <div className="searchPage_option">
                 <Link to="/tools">Tools</Link>
                 </div>
            </div>

        </div>
        </div>
    </div>
    </div>
    )
}

export default SearchPage;