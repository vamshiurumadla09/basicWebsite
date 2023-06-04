import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <nav className='navbar navbar-expand-sm bg-secondary fixed-bottom navbar-dark'>
                <div className='container'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' href="home">Footer</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </footer>
    )
}
