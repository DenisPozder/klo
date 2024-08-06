import React, { useEffect, useState } from "react";
import NavbarLogo from "../../Assets/Logo.png";
import "./navbar.scss";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import ToggleLang from "../../Components/ToggleLang/ToggleLang";
import i18n from "../../i18n";
import { BiSolidPhoneCall } from 'react-icons/bi'
import { useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import vineLeave from '../../Assets/leave3.png'

const Navbar = () => {
  const location = useLocation()

    /*----- Fixed For Relative Navbar -----*/
    const [navbar, setNavbar] = useState(false)
    const fixedNavbar = () => {
        if(window.scrollY > 0) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', fixedNavbar)
    
        return () => {
            window.removeEventListener('scroll', fixedNavbar)
        }
    },[])

  const isHomePage = location.pathname === '/'
  const navbarClassName = isHomePage ? 'navbar-container' : `navbar-relative ${navbar ? 'fixed' : ''}`

  const [isActive, setIsActive] = useState(false)

  const navbarToggle = () => {
    setIsActive(!isActive)
  }

  const closeNavbar = () => {
    setIsActive(false);
  }

  const [currentLanguage, setCurrentLanguage] = useState('sr')

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");

    // Use the saved language or the default language
    setCurrentLanguage(savedLanguage || "sr");

    // Set the language with i18n
    i18n.changeLanguage(savedLanguage || "sr");
  }, []);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "sr" ? "en" : "sr";
    setCurrentLanguage(newLanguage);

    // Save the selected language to local storage
    localStorage.setItem("selectedLanguage", newLanguage);

    // Update language with i18n
    i18n.changeLanguage(newLanguage);
  };

  const { t } = useTranslation();

  const NavbarLinks = [
    {
      id: 1,
      title: `${t("home")}`,
      link: "/",
    },
    {
      id: 1,
      title: `${t("about")}`,
      link: "/about-us",
    },
    {
      id: 1,
      title: `${t("menu&drinks")}`,
      link: "/menu-and-drinks",
    },
    {
      id: 1,
      title: `${t("gallery")}`,
      link: "/gallery",
    },
  ];

  return (
    <div className={navbarClassName}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to='/'>
            <img src={NavbarLogo} alt="Logo 'Kafane Pod Lozom'" />
            <img src={vineLeave} className="logo-leave" alt="List na logou" />
          </Link>
        </div>
        <div className={`navbar-links ${isActive ? 'active' : ''}`}>
          <div className="navbar-close" onClick={closeNavbar}><span><AiOutlineClose /></span></div>
          {NavbarLinks.map((link, i) => (
            <NavLink className="navbar-link" to={link.link} key={i}>
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="navbar-btns">
          <ToggleLang
            currentLanguage={currentLanguage}
            onToggle={toggleLanguage}
          />
          <Link to='tel:0601303101'><button className="navbar-btn"><span className="navbar-btn-text">{t("navbarBtn")}</span><span className="navbar-btn-icon"><BiSolidPhoneCall /></span></button></Link>
          <div className="navbar-toggle-links" onClick={navbarToggle}>
            <span><AiOutlineMenu /></span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
