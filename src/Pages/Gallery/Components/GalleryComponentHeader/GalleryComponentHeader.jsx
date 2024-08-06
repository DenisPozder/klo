import React, { useEffect, useState } from 'react'
import './gallery-component-header.scss'
import { useTranslation } from 'react-i18next'
import { GiCottonFlower } from 'react-icons/gi'
import { MdNoFood } from 'react-icons/md'
import { BiSolidDrink } from 'react-icons/bi'
import { GalleryData } from '../../../../Data/GalleryData'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const GalleryComponentHeader = () => {

  // Lazy Loading Images
  useEffect(() => {
        const images = document.querySelectorAll("[data-src]")
    
        function preloadImage(img) {
          const src = img.getAttribute("data-src")
          if(!src) {
            return ;
          }
    
          img.src = src
        }
    
        const imgOptions = {
          threshold: 0,
          rootMargin: "0px 150px 300px 150px"
        }
    
        const imgObserver = new IntersectionObserver((entries, imgObserver) => {
          entries.forEach(entry => {
            if(!entry.isIntersecting) {
              return;
            }else {
              preloadImage(entry.target)
              imgObserver.unobserve(entry.target)
            }
          })
        }, imgOptions)
    
        images.forEach(image => {
          imgObserver.observe(image)
        })
  },[])
    
  /*----- Intersection Observer Animations -----*/
  useEffect(() => {
        const revealOnIntersection = (className) => {
          return new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if(entry.isIntersecting) {
                entry.target.classList.add('show');
              }
            })
          })
        }
      
        const observeHiddenElements = (className) => {
          const hiddenElements = document.querySelectorAll(className)
          hiddenElements.forEach((el) => {
            const observer = revealOnIntersection(className)
            observer.observe(el)
          })
        }
      
        observeHiddenElements('.hidden')
        observeHiddenElements('.hidden-left')
        observeHiddenElements('.hidden-right')
  },[])

  const { t } = useTranslation()

  const [category, setCategory] = useState('INTERIOR') // At the beggining "INTERIOR" tab will be active
  const [images, setImages] = useState(GalleryData)
  const [imagesToShow, setImagesToShow] = useState(10)

  useEffect(() => {
    if(category === 'INTERIOR') {
      const filteredImages = GalleryData.filter(image => image.category === 'interior')
      setImages(filteredImages)
    }

    if(category === 'MENU') {
      const filteredImages = GalleryData.filter(image => image.category === 'menu')
      setImages(filteredImages)
    }

    if(category === 'DRINKS') {
      const filteredImages = GalleryData.filter(image => image.category === 'drinks')
      setImages(filteredImages)
    }
  },[category])

  return (
    <div className="gallery-component-header">
      <div className="gch-content">
        <h1 className='hidden-left'>{t('galleryTitle')}</h1>
        <div className="gallery-items-header hidden-right">
          <div className={`gallery-items-category ${category === 'INTERIOR' ? 'gallery-items-active' : ''}`}>
            <div className='git' onClick={() => setCategory('INTERIOR')} to='#'><span><GiCottonFlower /></span><h3>{t('galleryCat1')}</h3></div>
          </div>
          <div className={`gallery-items-category ${category === 'MENU' ? 'gallery-items-active' : ''}`}>
            <div className='git' onClick={() => setCategory('MENU')} to='#'><span><MdNoFood /></span><h3>{t('galleryCat2')}</h3></div>
          </div>
          <div className={`gallery-items-category ${category === 'DRINKS' ? 'gallery-items-active' : ''}`}>
            <div className='git' onClick={() => setCategory('DRINKS')} to='#'><span><BiSolidDrink /></span><h3>{t('galleryCat3')}</h3></div>
          </div>
        </div>
        <div className="gallery-items-images hidden-left">
          {
            images.slice(0, imagesToShow).map((image, index) => (
              <LazyLoadImage src={image.image} key={index} alt={`Slika ${index + 1}`} />
            ))
          }
        </div>
        <div className="gallery-items-load">
            <button className={`button`} disabled={imagesToShow >= images.length} onClick={() => setImagesToShow(imagesToShow + 10)}>{t('loadMore')}</button>
        </div>
      </div>
    </div>
  )
}

export default GalleryComponentHeader