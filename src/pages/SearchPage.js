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
const { data } = useGoogleSearch(term); 
 
// const data = Response;

console.log(data);
return(
    <div className="searchPage">
   
    <div className="searchPage_header">
        <div className='header__links'>
            <img src='https://cdn.iconscout.com/icon/free/png-256/apps-3114467-2598245.png'/>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>
            <img src="https://avatars.githubusercontent.com/u/95741514?s=40&amp;v=4" alt="@omeraladen" className='user_name'></img>
        </div>

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
             {term && (
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