import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasketOutlined } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './Firebase'
function Header() {

    const [{basket,user}, dispatch]=  useStateValue()

    const handleSignOut =(e)=>{
        e.preventDefault();
        auth.signOut()
    }

  return (
    <div className="header">
        <Link to="/">        <img className="header_logo"
        src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
        </Link>

        <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className= "header__searchIcon" />
        </div>

        <div className ="header__nav">
            {user ? 
               <Link to={user && "/logout"}>
               <div className="header_option" onClick={handleSignOut}>
                   <span className="header__optionLineOne">Hello {user.email}</span>
                   <span className="header__optionLineTwo">Sign Out</span>
               </div>
               </Link>
            :
            <Link to={!user && "/login" }>
            <div className="header_option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign In </span>
            </div>
            </Link>
            }
         
            <div className="header_option">
            <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Order</span>
            </div>

            <div className="header_option">
            <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo ">Prime</span>
            </div>
        <Link to="/checkout">   
        <div className="header__optionBasket">
            <ShoppingBasketOutlined />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default Header;