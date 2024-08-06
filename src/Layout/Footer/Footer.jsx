import React from 'react'
import './footer.scss'
import footerLogo from '../../Assets/Logo.png'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import visaMastImg from '../../Assets/visamas.png'

const Footer = () => {

  const { t } = useTranslation()

  return (
    <div className="footer hidden">
      <div className="footer-top">
        <div className="footer-column">
          <Link to='/'><img src={footerLogo} alt="Logo" /></Link>
          <h2>{t('footerDesc1')}</h2>
          <img src={visaMastImg} alt="Visa i Mastercard" />
        </div>
        <div className="footer-column">
          <h1>{t('footer1')}</h1>
          <h2>{t('footerDesc2')}</h2>
          <h2 className='fc-h1'>{t('mondayWork')}</h2>
          <h2 className='fc-h2'>{t('workingTime')}:<span>10AM : 10PM</span></h2>
        </div>
        <div className="footer-column">
          <h1>{t('footer2')}</h1>
          <h2>{t('footerDesc3')}</h2>
          <h2>{t('phoneDesc')}</h2>
        </div>
      </div>
      <div className="footer-bottom">
        <h3><span>Copyright 2023</span> Kafana Pod Lozom</h3>
      </div>
    </div>
  )
}

export default Footer