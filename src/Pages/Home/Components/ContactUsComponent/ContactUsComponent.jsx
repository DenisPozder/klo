import React from 'react'
import './contact-us-component.scss'
import backgroundImg from '../../../../Assets/backgroundImg.png'
import pepperImg from '../../../../Assets/pepper.png'
import { useTranslation } from 'react-i18next'
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import vineLeft from '../../../../Assets/sideVine.png'

const ContactUsComponent = () => {

    const { t } = useTranslation()

    const ContactVectors = [
        {
            id: 1,
            title: `${t('address')}`,
            desc: `${t('addressDesc')}`,
            icon: <FaLocationDot />
        },
        {
            id: 2,
            title: `${t('phone')}`,
            desc: `${t('phoneDesc')}`,
            icon: <AiFillPhone />
        },
        {
            id: 3,
            title: `${t('email')}`,
            desc: `${t('emailDesc')}`,
            icon: <AiOutlineMail />
        },
    ]

  return (
    <div className="contact-us-component">
        <img className='cuc-background' data-src={backgroundImg} alt="Slika pozadine" />
        <img className='cuc-pepper' data-src={pepperImg} alt="Dekorativna slika" />
        <img data-src={vineLeft} className='cuc-vine-left' alt="Dekorativna slika" />
        <div className="contact-us-component-content hidden">
            <h1>{t('contact')}</h1>
            <div className="contact-us-component-grid">
                {
                    ContactVectors.map((contact, i) => (
                        <div className="contact-us-component-item" key={i}>
                            <div className="contact-us-component-inner">
                                <span>{contact.icon}</span>
                                <h1 className='cuci-title'>{contact.title}</h1>
                                <h1 className='cuci-title2'>{contact.desc}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ContactUsComponent