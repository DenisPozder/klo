import React from 'react'
import './drinks-and-vectors.scss'
import vine from '../../../../Assets/vine2.png'
import backgroundImg from '../../../../Assets/backgroundImg.png'
import rakija from '../../../../Assets/rakija.png'
import { useTranslation } from 'react-i18next'
import vector1Img from '../../../../Assets/link1.jpg'
import vector2Img from '../../../../Assets/link3.jpg'
import vector3Img from '../../../../Assets/link2.jpg'
import salt from '../../../../Assets/salt.png'
import { Link } from 'react-router-dom'
import vine2 from '../../../../Assets/vine3.png'
import vine3 from '../../../../Assets/vine6.png'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import DecorativeImg from '../../../../Assets/decoration8.png'
import DecorativeImg2 from '../../../../Assets/decoration9.png'

const DrinksVectorCard = ({vector}) => {
    return (
        <div className="drinks-vector-card">
        <Link to={vector.link} target='_blank'>
        <div className="drinks-vector-img">
            <img src={vector.img} alt="" />
            <div className="drinks-vector-overlay">
                <AiOutlinePlayCircle />
            </div>
        </div>
        </Link>
        </div>
    )
}

const DrinksAndVectors = () => {

    const { t } = useTranslation()

    const DrinksVectors = [
        {
            id: 1,
            img: vector1Img,
            link: "https://www.youtube.com/watch?v=P5AcBcCRroU&t=1165s"
        },
        {
            id: 2,
            img: vector2Img,
            link: "https://www.youtube.com/watch?v=8nzJOe71Pds"
        },
        {
            id: 3,
            img: vector3Img,
            link: "https://www.youtube.com/watch?v=9R5TTwpRsSw"
        },
    ]

  return (
    <div className="drinks-and-vectors">
        <img data-src={backgroundImg} className='dav-background' alt="Pozadina" />
        <img data-src={vine} className='dav-vine hidden' alt="Dekorativna slika" />
        <img data-src={rakija} className='dav-rakija hidden' alt="Dekorativna slika" />
        <img data-src={vine2} className='dav-vine2 hidden' alt="Dekorativna slika" />
        <img data-src={vine3} className='dav-vine3' alt="Dekorativna slika" />
        <img data-src={DecorativeImg} className='dav-dec hidden-right' alt="Dekorativna slika" />
        <img data-src={DecorativeImg2} className='dav-dec2 hidden-left' alt="Dekorativna slika" />
        <div className="drinks-and-vectors-content">
            <div className="drinks-and-vectors-top hidden-left">
                <h2 className='drinks-av-text'>{t('drinks')}</h2>
                <Link to='/menu-and-drinks'><button className='button white specialties'>{t('button')}</button></Link>
            </div>
            <div className="drinks-and-vectors-bottom hidden-right">
                {
                    DrinksVectors.map((vector, index) => (
                        <DrinksVectorCard key={index} index={index} vector={vector} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default DrinksAndVectors