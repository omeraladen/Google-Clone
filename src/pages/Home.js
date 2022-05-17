import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Home () {
   return(
    <div className='home'>

        <div className='home__header'>

            <div className='home__headerLeft'> {/* We Use a Link Not a Tage BeCose the link not Refresh the page */}
                <Link to ='/about'>about</Link>
                <Link to ='/store'>Store</Link>
            </div>

            <div className='home__headerRight'>
                <Link to ='/gmail'>Gmail</Link>
                <Link to ='/images'>Images</Link>
                <AppsIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
        
        <div className='home__body'>

        </div>
    </div>
   )
}
export default Home;