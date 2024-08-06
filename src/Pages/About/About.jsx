import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import AboutUsSong from './Components/AboutUsSong/AboutUsSong'
import AboutUsLeft from './Components/AboutUsLeft/AboutUsLeft'
import CustomHelmet from '../../Components/Helmet/Helmet'
import Loader from '../../Components/Loader/Loader'
import LogoImage from '../../Assets/Logo.png'

const About = () => {
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
      observeHiddenElements('.song-hidden-left')
      observeHiddenElements('.song-hidden-right')
    },[])

  return (
    <>
    <CustomHelmet title="Kafana Pod Lozom - O nama" imageUrl={LogoImage} canonical="https://kafanapodlozom78.rs/abous-us" description="Naša priča je priča o strastvenim kuvarima i ljubiteljima hrane koji su se udružili kako bi stvorili kafanu iz snova. Saznajte više o našem timu, njihovoj ljubavi prema kuvanju i filozofiji koja nas pokreće. Otkrijte zašto smo odabrali ovaj put i šta nas čini jedinstvenima." keywords="pića, jela, drinks, meals, food, kafana pod lozom, tavern under the vine, tavern under vine, vine, loza" />
    {
      isLoading ? (<Loader />) : (
        <Layout>
        <div className='page-container'>
          <AboutUsLeft />
          <AboutUsSong />
        </div>
      </Layout>
      )
    }
    </>
  )
}

export default About