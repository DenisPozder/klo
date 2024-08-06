import React from 'react'
import { Link } from 'react-router-dom'
import './not-found.scss'
import vineTop from '../../Assets/vine4.png'
import NotFoundImg from '../../Assets/404.png'
import decoration1 from '../../Assets/decoration.png'
import decoration2 from '../../Assets/decoration2.png'

const NotFound = () => {

  return (
    <div className="not-found-section page-container">
        <img className='nfs-vine' src={vineTop} alt="Dekorativna slika" />
        <img className='nfs-dec1' src={decoration1} alt="Dekorativna slika" />
        <img className='nfs-dec2' src={decoration2} alt="Dekorativna slika" />
        <div className="not-found-content">
            <img className='nfc-404' src={NotFoundImg} alt="404" />
            <h1>This page was not found</h1>
            <Link to='/'><button className='button'>back to home page</button></Link>
        </div>
    </div>
  )
}

export default NotFound