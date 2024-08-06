import React from 'react'
import './toggle-lang.scss'
import SerbianFlag from '../../Assets/SerbianFlag.png'
import USAFlag from '../../Assets/USAFlag.png'

const ToggleLang = ({ currentLanguage, onToggle}) => {

  const isSerbian = currentLanguage === 'sr'

  return (
    <div className='toggle-btn'>
        <button onClick={onToggle}>
          <img src={ isSerbian ? SerbianFlag : USAFlag} alt="" />
          <div className="toggle-btn-overlay">
            <h3>{isSerbian ? 'RS' : 'EN'}</h3>
          </div>
        </button>
    </div>
  )
}

export default ToggleLang