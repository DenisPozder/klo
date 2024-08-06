import React, { useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { GalleryData } from '../../../../Data/GalleryData'
import './gallery-component-slider.scss'

const GalleryCard = ({gallery}) => {
    return (
        <div className="gallery-card" draggable='false' >
            <img data-src={gallery.image} alt="Slika u galeriji" />
        </div>
    )
}

const getRandomImages = (data, count) => {
  const shuffled = data.slice().sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const GalleryComponentSlider = () => {

    useEffect(() => {
        const carouselItem = document.querySelector('.gallery-slider-content')
        const arrowBtnsItems = document.querySelectorAll('.gallery-component-slider .gallery-slider-btn')
        const firstCardWidthItem = carouselItem.querySelector('.gallery-card').offsetWidth
    
        let isDragging = false, startX, startScrollLeft, intervalGal
    
        const autoPlayGallery = () => {
            intervalGal = setInterval(() => {
            carouselItem.scrollLeft += firstCardWidthItem
    
            if(carouselItem.scrollLeft >= carouselItem.scrollWidth - carouselItem.offsetWidth){
                carouselItem.scrollLeft = 0
            }
          }, 4000)
        }
    
        autoPlayGallery()
    
        arrowBtnsItems.forEach(btn => {
          btn.addEventListener('click', () => {
            clearInterval(intervalGal)
            carouselItem.scrollLeft += btn.id === 'prev' ? -firstCardWidthItem : firstCardWidthItem;
    
            setTimeout(autoPlayGallery)
          })
        })
    
        const dragStart = (e) => {
          isDragging = true
          carouselItem.classList.add('dragging')
          startX = e.pageX
          startScrollLeft = carouselItem.scrollLeft
        }
    
        const dragging = (e) => {
          if(!isDragging) return; // If Dragging is false return from here
          carouselItem.scrollLeft = startScrollLeft - (e.pageX - startX)
        }
    
        const dragStop = () => {
          isDragging = false
          carouselItem.classList.remove('dragging')
        }
    
        carouselItem.addEventListener('mousedown', dragStart)
        carouselItem.addEventListener('mousemove', dragging)
        document.addEventListener('mouseup', dragStop)
      },[])

      const randomImages = getRandomImages(GalleryData, 10)

  return (
    <div className="gallery-component-slider">
        <button className='gallery-slider-btn gallery-prev-btn' id='prev'><AiOutlineLeft /></button>
        <div className="gallery-slider-content">
            {
                randomImages.map((gallery, index) => (
                    <GalleryCard key={index} gallery={gallery} />
                ))
            }
        </div>
        <button className='gallery-slider-btn gallery-next-btn' id='next'><AiOutlineRight /></button>
    </div>
  )
}

export default GalleryComponentSlider