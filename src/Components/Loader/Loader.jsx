import React from 'react'
import './loader.scss'
import { useTranslation } from 'react-i18next'

const Loader = () => {

  const { t } = useTranslation()

  return (
    <div className="loader-component">
      <h1>{t('loadingText')}</h1>
      <div className="cooking">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="area">
          <div className="sides">
            <div className="pan"></div>
            <div className="handle"></div>
          </div>
          <div className="pancake">
            <div className="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader