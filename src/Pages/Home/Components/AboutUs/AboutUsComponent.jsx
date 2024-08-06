import React from 'react'
import './about-us-component.scss'
import VineImg from '../../../../Assets/vine.png'
import DecorativeImg from '../../../../Assets/decoration.png'
import DecorativeImg2 from '../../../../Assets/decoration2.png'
import LeaveDec from '../../../../Assets/leaveDecoration.png'
import aboutUsImg from '../../../../Assets/Gallery/galleryImg2.jpg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const AboutUsComponent = () => {

    const { t } = useTranslation()

  return (
    <div className="about-us-component">
        <img className='auc-dec hidden-left' data-src={VineImg} alt="Dekorativna slika" />
        <img className="auc-dec-2 hidden-right" data-src={DecorativeImg} alt="Dekorativna slika" />
        <img className='auc-dec-3 opacity' data-src={LeaveDec} alt="Dekorativna slika" />
        <div className="about-us-component-content">
            <div className="about-us-component-column">
                <img className='auc-c-img1 hidden-left' data-src={aboutUsImg} alt="Slika za o nama sekciju" />
                <img className='auc-c-img2 hidden' data-src={DecorativeImg2} alt="Dekorativna slika" />
            </div>
            <div className="about-us-component-column hidden-right">
                <h3>{t('auc1')}</h3>
                <div className="auc-column-text">
                <h1>{t('auc2')}</h1>
                <h3>{t('auc3')}</h3>
                </div>
                <Link to='/about-us'><button className='button'>{t('button')}</button></Link>
            </div>
        </div>
    </div>
  )
}

export default AboutUsComponent