import React, { useEffect } from 'react'
import './about-us-song.scss'
import { useTranslation } from 'react-i18next'
import oldPaper from '../../../../Assets/oldpaper.jpg'
import backgroundImg from '../../../../Assets/backgroundImg.png'
import sideVine from '../../../../Assets/sideVine.png'

// Meals popping out from the side images
import decoration1 from '../../../../Assets/mealDec1.png'
import decoration2 from '../../../../Assets/mealDec2.png'
import decoration3 from '../../../../Assets/mealDec3.png'
import decoration4 from '../../../../Assets/mealDec4.png'
import decoration5 from '../../../../Assets/mealDec5.png'
import decoration6 from '../../../../Assets/mealDec6.png'

const AboutUsSong = () => {

  const { t } = useTranslation()

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
        observeHiddenElements('.song-hidden-left')
        observeHiddenElements('.song-hidden-right')
      },[])

  return (
    <div className="about-us-song">
      <img className='aus-background' data-src={oldPaper} alt="Dekorativna slika" />
      <img className="aus-s-background" data-src={backgroundImg} alt="Dekorativna slika" />
      <img data-src={sideVine} alt="Dekorativna slika" className='aus-side-vine-right' />
      <img data-src={sideVine} alt="Dekorativna slika" className='aus-side-vine-left' />
      <img data-src={decoration1} className='aus-decoration-1 song-hidden-left' alt="Dekorativna slika" />
      <img data-src={decoration2} className='aus-decoration-2 song-hidden-right' alt="Dekorativna slika" />
      <img data-src={decoration3} className='aus-decoration-3 song-hidden-left' alt="Dekorativna slika" />
      <img data-src={decoration4} className='aus-decoration-4 song-hidden-right' alt="Dekorativna slika" />
      <img data-src={decoration5} className='aus-decoration-5 song-hidden-left' alt="Dekorativna slika" />
      <img data-src={decoration6} className='aus-decoration-6 song-hidden-right' alt="Dekorativna slika" />
      <div className="about-us-song-content">
        <h1 className='hidden'>{t('songTitle')}</h1>
        <div className="about-us-song-1 hidden-left">
          <p>{t('song1')}</p>
          <p>{t('song2')}</p>
          <p>{t('song3')}</p>
          <p>{t('song4')}</p>
          <p>{t('song5')}</p>
          <p>{t('song6')}</p>
          <p>{t('song7')}</p>
          <p>{t('song8')}</p>
          <p>{t('song9')}</p>
          <p>{t('song10')}</p>
        </div>
        <p className='song-p hidden'>{t('song11')}</p>
        <div className="about-us-song-2 hidden-right">
          <p>{t('song12')}</p>
          <p>{t('song13')}</p>
          <p>{t('song14')}</p>
          <p>{t('song15')}</p>
          <p>{t('song16')}</p>
        </div>
        <div className="about-us-song-3 hidden-left">
          <p>{t('song17')}</p>
          <p>{t('song18')}</p>
          <p>{t('song19')}</p>
          <p>{t('song20')}</p>
        </div>
        <div className="about-us-song-4 hidden-right">
          <p>{t('song21')}</p>
          <p>{t('song22')}</p>
          <p>{t('song23')}</p>
          <p>{t('song24')}</p>
        </div>
        <div className="about-us-song-5 hidden-left">
          <p>{t('song25')}</p>
          <p>{t('song26')}</p>
          <p>{t('song27')}</p>
          <p>{t('song28')}</p>
          <p>{t('song29')}</p>
          <p>{t('song30')}</p>
        </div>
        <div className="about-us-song-6 hidden-right">
          <p>{t('song31')}</p>
          <p>{t('song32')}</p>
          <p>{t('song33')}</p>
          <p>{t('song34')}</p>
        </div>
        <div className="about-us-song-7 hidden-left">
          <p>{t('song35')}</p>
          <p>{t('song36')}</p>
          <p>{t('song37')}</p>
          <p>{t('song38')}</p>
          <p>{t('song39')}</p>
          <p>{t('song40')}</p>
        </div>
        <div className="about-us-song-8 hidden-right">
          <p>{t('song41')}</p>
          <p>{t('song42')}</p>
          <p>{t('song43')}</p>
          <p>{t('song44')}</p>
        </div>
        <div className="about-us-song-9 hidden-left">
          <p>{t('song45')}</p>
          <p>{t('song46')}</p>
          <p>{t('song47')}</p>
          <p>{t('song48')}</p>
          <p>{t('song49')}</p>
          <p>{t('song50')}</p>
          <p>{t('song51')}</p>
        </div>
        <div className="about-us-song-10 hidden-right">
          <p>{t('song52')}</p>
          <p>{t('song53')}</p>
          <p>{t('song54')}</p>
          <p>{t('song55')}</p>
        </div>
        <div className="about-us-song-11 hidden-left">
          <p>{t('song56')}</p>
          <p>{t('song57')}</p>
          <p>{t('song58')}</p>
          <p>{t('song59')}</p>
          <p>{t('song60')}</p>
          <p>{t('song61')}</p>
        </div>
        <div className='about-us-song-12 hidden-right'>
          <p>{t('song62')}</p>
          <p>{t('song63')}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSong