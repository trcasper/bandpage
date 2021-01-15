import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div>
            <nav className = 'Navbar'TEST>
                <div className = 'Navbar-container'>
                    <Link to = '/' className = 'Navbar-logo'>
                        <img className = 'Logo' src={logo} alt='Logo-alt' />
                    </Link>
                    <div className = 'Menu-icon' onClick={handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
