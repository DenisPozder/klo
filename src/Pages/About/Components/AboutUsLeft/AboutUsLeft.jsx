import React from 'react'
import './about-us-left.scss'
import aboutUsImg2 from '../../../../Assets/aboutUsImg2.jpg'
import { useTranslation } from 'react-i18next'

const AboutUsLeft = () => {

    const { t } = useTranslation()

  return (
    <div className="about-us-left">
        <div className="about-us-left-content">
            <div className="aulc-column hidden-left">
                <img src={aboutUsImg2} alt="Kafana Pod Lozom" />
            </div>
            <div className="aulc-column hidden-right">
                <h1>{t('aulTitle')}</h1>
                <h3>{t('aulDesc')}</h3>
            </div>
        </div>
    </div>
  )
}

export default AboutUsLeft