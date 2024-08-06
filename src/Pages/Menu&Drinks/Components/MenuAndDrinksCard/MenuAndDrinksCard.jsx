import React from 'react'
import './menu-and-drinks-card.scss'

const MenuAndDrinksCard = ({slide, index, current, showImage}) => {
  return (
    <div className="menu-and-drinks-card">
        {
            index === current && (
            <div className="madc-slide">
                {
                    showImage ? (
                        <img className={`madc-img ${showImage ? 'show': ''}`} src={slide.fullImage} alt="Slika Specijaliteta" />
                    ) : (
                        <video autoPlay playsInline muted loop className={`madc-video ${!showImage ? 'show': ''}`}><source src={slide.video} /></video>
                    )
                }
                <div className="madc-slide-content">
                    <div className="madc-slide-left">
                        <h1>{slide.title}</h1>
                        <h3>{slide.desc}</h3>
                    </div>
                    <div className="madc-slide-right">
                        <img className='madc-image' src={slide.image} alt="Slika Specijaliteta" />
                    </div>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default MenuAndDrinksCard