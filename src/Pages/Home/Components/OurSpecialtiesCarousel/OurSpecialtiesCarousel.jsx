import React, { useEffect } from 'react'
import './our-specialties-carousel.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const OurSpecialtiesCard = ({specialty}) => {
  return (
    <div className="our-specialties-card" draggable="false">
      <div className="our-specialties-top">
        <img className='specialties-img' data-src={specialty.image} alt={specialty.title} />
      </div>
      <div className="our-specialties-bottom">
        <h1>{specialty.title}</h1>
        <p>{specialty.desc}</p>
      </div>
    </div>
  )
}

const OurSpecialtiesCarousel = ({OurSpecialty}) => {

  useEffect(() => {
    const carousel = document.querySelector('.our-specialties-carousel-slider')
    const arrowBtns = document.querySelectorAll('.our-specialties-carousel .our-specialties-btn')
    const firstCardWidth = carousel.querySelector('.our-specialties-card').offsetWidth

    let isDragging = false, startX, startScrollLeft, intervalId

    const autoPlay = () => {
      intervalId = setInterval(() => {
        carousel.scrollLeft += firstCardWidth

        if(carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth){
          carousel.scrollLeft = 0
        }
      }, 8000)
    }

    autoPlay()

    arrowBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(intervalId)
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;

        setTimeout(autoPlay)
      })
    })

    const dragStart = (e) => {
      isDragging = true
      carousel.classList.add('dragging')
      startX = e.pageX
      startScrollLeft = carousel.scrollLeft
    }

    const dragging = (e) => {
      if(!isDragging) return; // If Dragging is false return from here
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
    }

    const dragStop = () => {
      isDragging = false
      carousel.classList.remove('dragging')
    }

    carousel.addEventListener('mousedown', dragStart)
    carousel.addEventListener('mousemove', dragging)
    document.addEventListener('mouseup', dragStop)
  },[])

  return (
    <div className="our-specialties-carousel">
      <button className='our-specialties-btn specialties-prev' id='left'><AiOutlineLeft /></button>
        <div className="our-specialties-carousel-slider">
          {
            OurSpecialty.map((specialty, index) => (
              <OurSpecialtiesCard key={index} specialty={specialty} />
            ))
          }
        </div>
      <button className='our-specialties-btn specialties-next' id='right'><AiOutlineRight /></button>
    </div>
  )
}

export default OurSpecialtiesCarousel