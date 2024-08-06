import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import GalleryComponentHeader from './Components/GalleryComponentHeader/GalleryComponentHeader'
import CustomHelmet from '../../Components/Helmet/Helmet'
import Loader from '../../Components/Loader/Loader'
import LogoImage from '../../Assets/Logo.png'

const Gallery = () => {

  const [isLoading, setIsLoading] = useState(true);
  let loaderTimeout;

  useEffect(() => {
    // Set a timeout to mark loading as complete after 3 seconds
    loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clear the timeout if the component unmounts or if needed
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);
      
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

  return (
    <>
    <CustomHelmet title="Kafana Pod Lozom - Galerija" imageUrl={LogoImage} canonical="https://kafanapodlozom78.rs/gallery" description="Pogledajte našu galeriju slika kako biste dobili vizuelni uvid u našu kafanu. Fotografije prikazuju prelepo uređen prostor, fantastična jela koja serviramo i osmehe zadovoljnih gostiju. Ovde možete doživeti atmosferu i estetiku naše kafane pre nego što nas posetite." keywords="pića, jela, drinks, meals, food, kafana pod lozom, tavern under the vine, tavern under vine, vine, loza" />
    {
      isLoading ? (<Loader />) : (
        <Layout>
        <div className='page-container'>
          <GalleryComponentHeader />
        </div>
      </Layout>
      )
    }
    </>
  )
}

export default Gallery