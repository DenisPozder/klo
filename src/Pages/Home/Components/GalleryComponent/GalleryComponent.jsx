import React from 'react'
import pepper from '../../../../Assets/pepper.png'
import garlic from '../../../../Assets/garlic.png'
import decoration from '../../../../Assets/decoration6.png'
import { useTranslation } from 'react-i18next'
import GalleryComponentSlider from '../GalleryComponentSlider/GalleryComponentSlider'
import './gallery-component.scss'
import DecorativeImg from '../../../../Assets/decoration10.png'

const GalleryComponent = () => {

    const { t } = useTranslation()

  return (
    <div className="gallery-component">
        <img className='gc-pepper' data-src={pepper} alt="Dekorativna slika" />
        <img className='gc-garlic' data-src={garlic} alt="Dekorativna slika" />
        <img className='gc-dec2 hidden-right' data-src={DecorativeImg} alt="Dekorativna slika" />
        <img className='gc-dec hidden-left' data-src={decoration} alt="Dekorativna slika" />
        <div className="gallery-component-content hidden">
            <h1>{t('galleryT')}</h1>
            <GalleryComponentSlider />
        </div>
    </div>
  )
}

export default GalleryComponent