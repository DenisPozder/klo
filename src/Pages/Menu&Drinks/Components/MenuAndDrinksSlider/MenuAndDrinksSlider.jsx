import React, { useEffect, useRef, useState } from 'react'
import './menu-and-drinks-slider.scss'
import oldPaper from '../../../../Assets/oldpaper.jpg'
import backgroundImg from '../../../../Assets/backgroundImg.png'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import MenuAndDrinksCard from '../MenuAndDrinksCard/MenuAndDrinksCard'

const MenuAndDrinksSlider = ({slides}) => {

    const [ current, setCurrent ] = useState(0)
    const length = slides.length
    const timeout = useRef(null)
    const [ showImage, setShowImage ] = useState(true)

    useEffect(() => {
        const nextSlide = () => {
            setShowImage(false)

            setTimeout(() => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1))
                setShowImage(true)
            }, 7000)
            timeout.current = setTimeout(nextSlide, 12000)
        }

        timeout.current = setTimeout(nextSlide, 12000)

        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    },[current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <div className="menu-and-drinks-slider">
        <img src={oldPaper} className='mads-paper' alt="Dekorativna slika" />
        <img src={backgroundImg} className='mads-background' alt="Dekorativna slika" />
        <div className="mads-wrap">
            <button className='mads-btn mads-prev' onClick={prevSlide}><AiOutlineLeft /></button>
            {
                slides.map((slide, index) => (
                    <MenuAndDrinksCard index={index} slide={slide} key={index} showImage={showImage} current={current} />
                ))
            }
            <button className='mads-btn mads-next' onClick={nextSlide}><AiOutlineRight /></button>
        </div>
    </div>
  )
}

export default MenuAndDrinksSlider