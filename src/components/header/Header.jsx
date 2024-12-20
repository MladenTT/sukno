import React from "react";
import "./header.css";
import logo from './newlogo.png';
import user from './user1.png';
import bag from './bag.png';
import heart from './heart.png';

function Header() {
    return(
          <div className="header-main">
            <div id="topbar" className="topbar">
                    <div id="topbar-left">
                        <p>Sukno e-mail |</p> 
                        <a href="mailto:sukno.novisad@gmail.com">sukno.novisad@gmail.com</a>
                    </div>
                    <div id="topbar-right">
                        <p >Tehnicka podrska |</p>   
                        <a href="mailto:mladen94trivunovic@gmail.com">mladen94trivunovic@gmail.com</a>
                    </div>
            </div>
                <div id="header-main">
                    <div id="component-container">
                        <div className="header-row">
                            <div className="header-logo col-md-3 col-sm-3">
                                    <div className="logo col-md-3 col-sm-3">
                                        <a href="">
                                            <img src={logo} alt="logo" className="logo"/>
                                        </a>
                                    </div>
                            </div>
                            <div className="header-search col-md-6 col-sm-6">
                                <div className="product-extra-search">
                                    <form action="??" method="get">
                                        <div className="search-content">
                                            <div className="search-wrapper">
                                                <input type="text" name="s" id="s" className="input-s" placeholder="Treba mi..." />
                                                <input type="hidden" name="post-type" />
                                                <div className="search-result">
                                                   
                                                </div>
                                            </div>
                                            <button className="search-submit" type="submit">
                                                Trazi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                            <div className="header-icons col-md-3 col-sm-3">
                                <ul className="product-extras">
                                        <li>
                                            <a href="">
                                                <img src={heart} alt="favorite" className="icons"/>
                                                
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={bag} alt="in the cart" className="icons"/>
                                                
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={user} alt="user settings" className="icons"/>
                                                
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    );
    
}

export default Header;
