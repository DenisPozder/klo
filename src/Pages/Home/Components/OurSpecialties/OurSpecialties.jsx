import React from 'react'
import './our-specialties.scss'
import DecorativeImg from '../../../../Assets/decoration3.png'
import DecorativeImg2 from '../../../../Assets/decoration4.png'
import BackgroundImg from '../../../../Assets/backgroundImg.png'
import GarlicImg from '../../../../Assets/garlic.png'
import { useTranslation } from 'react-i18next'
import menuImage1 from '../../../../Assets/Menu/menuImg1.png'
import menuImage2 from '../../../../Assets/Menu/menuImg2.png'
import menuImage3 from '../../../../Assets/Menu/menuImg3.png'
import menuImage4 from '../../../../Assets/Menu/menuImg4.png'
import menuImage5 from '../../../../Assets/Menu/menuImg5.png'
import menuImage6 from '../../../../Assets/Menu/menuImg6.png'
import menuImage7 from '../../../../Assets/Menu/menuImg7.png'
import OurSpecialtiesCarousel from '../OurSpecialtiesCarousel/OurSpecialtiesCarousel'
import { Link } from 'react-router-dom'
import coffeeBeans2 from '../../../../Assets/coffeeBeans2.png'
import vine from '../../../../Assets/vine2.png'

const OurSpecialties = () => {
    const { t } = useTranslation()

    const OurSpecialty = [
        {
            image: menuImage1,
            title: `${t('specialty1')}`,
            desc: `${t('specDesc1')}`,
            price: `${t('specPrice1')}`,
        },
        {
            image: menuImage2,
            title: `${t('specialty2')}`,
            desc: `${t('specDesc2')}`,
            price: `${t('specPrice2')}`,
        },
        {
            image: menuImage3,
            title: `${t('specialty3')}`,
            desc: `${t('specDesc3')}`,
            price: `${t('specPrice3')}`,
        },
        {
            image: menuImage4,
            title: `${t('specialty4')}`,
            desc: `${t('specDesc4')}`,
            price: `${t('specPrice4')}`,
        },
        {
            image: menuImage5,
            title: `${t('specialty5')}`,
            desc: `${t('specDesc5')}`,
            price: `${t('specPrice5')}`,
        },
        {
            image: menuImage6,
            title: `${t('specialty6')}`,
            desc: `${t('specDesc6')}`,
            price: `${t('specPrice6')}`,
        },
        {
            image: menuImage7,
            title: `${t('specialty7')}`,
            desc: `${t('specDesc7')}`,
            price: `${t('specPrice7')}`,
        },
    ]

    return (
        <div className="our-specialties-component">
            <img className='osc-background' data-src={BackgroundImg} alt="Pozadina" />
            <img className='osc-img hidden-right' data-src={DecorativeImg} alt="Dekorativna slika" />
            <img className='osc-garlic' data-src={GarlicImg} alt="Dekorativna slika" />
            <img className='osc-dec hidden-left' data-src={DecorativeImg2} alt="Dekorativna slika" />
            <img data-src={coffeeBeans2} className='osc-coffee hidden' alt="Dekorativna slika" />
            <img src={vine} alt="Decorativna slika" className='vine-osc hidden-left' />
            <div className="our-specialities-content hidden">
                <h1 className='our-specialties-title hidden'>{t('ourSpecialities')}</h1>
                <OurSpecialtiesCarousel OurSpecialty={OurSpecialty} />
                <Link to='/menu-and-drinks'><button className='button white specialties'>{t('button')}</button></Link>
            </div>
        </div>
    )
}

export default OurSpecialties