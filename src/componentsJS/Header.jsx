import React from "react";
import '../componentCSS/Header.css'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
 function Header(params) {

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark">
                <div className="container prime-Header">
                    <ul className="navbar-nav">
                        <li className="nav-item prime-title">
                            <Link className="nav-link" to="/home">{params.megaMenu.appTitle}</Link>
                        </li>
                        {params.megaMenu.megaMenu.map((menu) => {
                            return (
                                <li className="nav-item p-menu">
                                    <Link className="nav-link p-menu-link" to={"/"+menu}>{menu}</Link>
                                </li>
                            )
                        })}
                        <li className="nav-item">
                            <Link className="nav-link" to="#"></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default connect((store)=>{return store})(Header)