import React, { useEffect, useState } from 'react'
import './hero.scss'
import topLeaves from '../../../../Assets/Hero/topLeaves.png'
import tree from '../../../../Assets/Hero/tree.png'
import { useTranslation } from 'react-i18next'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { Link } from 'react-router-dom'
import menuImg1 from '../../../../Assets/Menu/menuImg1.png'
import menuImg2 from '../../../../Assets/Menu/menuImg2.png'
import menuImg3 from '../../../../Assets/Menu/menuImg3.png'
import menuImg4 from '../../../../Assets/Menu/menuImg4.png'
import menuImg5 from '../../../../Assets/Menu/menuImg5.png'
import menuImg6 from '../../../../Assets/Menu/menuImg6.png'
import menuImg7 from '../../../../Assets/Menu/menuImg7.png'
import vineFromAbove from '../../../../Assets/vineFromAbove.png'
import vineRight from '../../../../Assets/vine5.png'
import vineLeft from '../../../../Assets/vine6.png'
import leave1 from '../../../../Assets/leave1.png'
import leave2 from '../../../../Assets/leave2.png'
import leave3 from '../../../../Assets/leave3.png'

const Hero = () => {

  const { t } = useTranslation()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMouseOverSlider, setIsMouseOverSlider] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isMouseOverSlider){
        setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroSlider.length);
      }
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [isMouseOverSlider]);

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

    const HeroSlider = [
      {
        id: 1,
        image: menuImg1,
        desc: `${t('specDesc1')}`,
        title: `${t('specialty1')}`
      },
      {
        id: 2,
        image: menuImg2,
        desc: `${t('specDesc2')}`,
        title: `${t('specialty2')}`
      },
      {
        id: 3,
        image: menuImg3,
        desc: `${t('specDesc3')}`,
        title: `${t('specialty3')}`
      },
      {
        id: 4,
        image: menuImg4,
        desc: `${t('specDesc4')}`,
        title: `${t('specialty4')}`
      },
      {
        id: 5,
        image: menuImg5,
        desc: `${t('specDesc5')}`,
        title: `${t('specialty5')}`
      },
      {
        id: 6,
        image: menuImg6,
        desc: `${t('specDesc6')}`,
        title: `${t('specialty6')}`
      },
      {
        id: 7,
        image: menuImg7,
        desc: `${t('specDesc7')}`,
        title: `${t('specialty7')}`
      },
    ]

  return (
    <div className="hero-component">
      <img className='hc-leaves parallax' src={topLeaves} alt="Dekorativno lišće" />
      <img src={tree} className='hc-tree parallax' alt="Dekorativno stablo" />
      <img src={vineFromAbove} alt="Dekorativna slika" className='hc-vine' />
      <img src={vineRight} alt="Dekorativna slika" className='hc-vine-right' />
      <img src={vineLeft} className='hc-vine-left' alt="Dekorativna slika" />
      <div className="hero-leaves">
        <div><img src={leave1} alt="Dekorativna slika" /></div>
        <div><img src={leave2} alt="Dekorativna slika" /></div>
        <div><img src={leave3} alt="Dekorativna slika" /></div>
        <div><img src={leave1} alt="Dekorativna slika" /></div>
        <div><img src={leave2} alt="Dekorativna slika" /></div>
        <div><img src={leave3} alt="Dekorativna slika" /></div>
      </div>
      <div className="hero-leaves hero-leaves-2">
        <div><img src={leave1} alt="Dekorativna slika" /></div>
        <div><img src={leave2} alt="Dekorativna slika" /></div>
        <div><img src={leave3} alt="Dekorativna slika" /></div>
        <div><img src={leave1} alt="Dekorativna slika" /></div>
        <div><img src={leave2} alt="Dekorativna slika" /></div>
        <div><img src={leave3} alt="Dekorativna slika" /></div>
      </div>
      <div className="hero-leaves hero-leaves-3">
        <div><img src={leave1} alt="Dekorativna slika" /></div>
        <div><img src={leave2} alt="Dekorativna slika" /></div>
        <div><img src={leave3} alt="Dekorativna slika" /></div>
        <div><img src={leave1} alt="Dekorativna slika" /></div>
        <div><img src={leave2} alt="Dekorativna slika" /></div>
        <div><img src={leave3} alt="Dekorativna slika" /></div>
      </div>
      <div className="hero-component-overlay">
        <div className="hero-component-content" onMouseEnter={() => setIsMouseOverSlider(true)} onMouseLeave={() => setIsMouseOverSlider(false)}>
          <div className="hcc-left">
            <h3 className='hcc-title hidden-left'>{t('heroH1')}</h3>
            {
              currentSlide >= 0 && (
                <>
                <h1 className='hcc-menu-title hidden-left'>{HeroSlider[currentSlide].title}</h1>
                <p className='hcc-desc hidden-left'>{HeroSlider[currentSlide].desc}</p>
                </>
              )
            }
            <div className="hcc-media hidden-left">
              <Link target='_blank' to='https://www.instagram.com/kafanapodlozom78/?hl=en'><span><AiFillInstagram /></span></Link>
              <Link target='_blank' to='https://www.facebook.com/kafanapodlozom/?locale=sr_RS'><span><FaFacebook /></span></Link>
              <Link className='dark-hero-menu' to='/menu-and-drinks'><span><MdFastfood /> <p>{t('heroMenu')}</p></span></Link>
            </div>
          </div>
          <div className="hcc-right">
            {
              HeroSlider.map((image, index) => (
                <img data-src={image.image} key={index} className={index === currentSlide ? "hero-current-menu" : "hero-hidden-menu"} alt={`${index} Jelo`} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero