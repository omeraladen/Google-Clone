import React from 'react';
import './SearchPage.css';
import {useStateValue} from "../StateProvider/StateProvider";
import useGoogleSearch from '../component/useGoogleSearch';
import Response from '../response'
import { Link } from 'react-router-dom';
import Search from '../component/Search';
//icons =>  https://mui.com/material-ui/material-icons/?query=ma&selected=Room
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
                    <svg focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg>
                    <Link to="/all">All</Link>
                    <div className='bar'></div>
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
                                                         {/*--------Results ► Link , Title , Paragraph --------------*/}
             {true && (
                <div
                className='searchPage__results'>
                    <p
                    className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds)
                         {term}
                    </p>  

                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a className='searchPage__resultLink' href={item.link}> {item.displayLink}... <MoreVertIcon/> </a> 
                             
                            <a className='searchPage__resultTitle' href={item.link}> <h2>{item.title}</h2>  </a>

                            <p className='searchPage__resultSnippet'> {item.snippet} </p> 
                        </div>
                    ))}
                </div>
             )

             }
    </div>
    )
}

export default SearchPage;