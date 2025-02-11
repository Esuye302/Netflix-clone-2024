import React, { useState, useEffect } from 'react';
import './header.css';
import NetflixLogo from '../../assets/images/Netflix_2015_logo.svg.png';

// MUI Icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    // State for background change on scroll
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header-outer-container ${show ? "header-dark" : ""}`}>
            <div className="header-container">
                <div className="header-left">
                    <ul>
                        <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse by Language</li>
                    </ul>
                </div>
                <div className="header-right">
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
