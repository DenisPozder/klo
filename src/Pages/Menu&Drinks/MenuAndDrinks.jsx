import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import MenuAndDrinksSlider from './Components/MenuAndDrinksSlider/MenuAndDrinksSlider'
import { useTranslation } from 'react-i18next'
import specImg1 from '../../Assets/Menu/menuImg1.png'
import specFullImg1 from '../../Assets/Menu/menuFullImg1.jpg'
import specVideo from '../../Assets/Menu/foodVideo1.mp4'
import specVideo2 from '../../Assets/Menu/foodVideo2.mp4'
import specVideo3 from '../../Assets/Menu/foodVideo3.mp4'
import specImg2 from '../../Assets/Menu/menuImg2.png'
import specFullImg2 from '../../Assets/Menu/menuFullImg2.jpg'
import specImg3 from '../../Assets/Menu/menuImg3.png'
import specFullImg3 from '../../Assets/Menu/menuFullImg3.jpg'
import specImg4 from '../../Assets/Menu/menuImg4.png'
import specFullImg4 from '../../Assets/Menu/menuFullImg4.jpg'
import specImg5 from '../../Assets/Menu/menuImg5.png'
import specFullImg5 from '../../Assets/Menu/menuFullImg5.jpg'
import specImg6 from '../../Assets/Menu/menuImg6.png'
import specFullImg6 from '../../Assets/Menu/menuFullImg6.jpg'
import specImg7 from '../../Assets/Menu/menuImg7.png'
import specFullImg7 from '../../Assets/Menu/menuFullImg7.jpg'
import MenuAndDrinksComponent from './Components/MenuAndDrinksComponent/MenuAndDrinksComponent'
import CustomHelmet from '../../Components/Helmet/Helmet'
import Loader from '../../Components/Loader/Loader'
import LogoImage from '../../Assets/Logo.png'

const MenuAndDrinks = () => {

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
      },[])

  const { t } = useTranslation()

  const specialtyMeals = [
    {
      id: 1,
      title: `${t('specialty1')}`,
      desc: `${t('specDesc1')}`,
      fullImage:specFullImg1,
      image: specImg1,
      video: specVideo  
    },
    {
      id: 2,
      title: `${t('specialty2')}`,
      desc: `${t('specDesc2')}`,
      fullImage:specFullImg2,
      image: specImg2,
      video: specVideo2      
    },
    {
      id: 3,
      title: `${t('specialty3')}`,
      desc: `${t('specDesc3')}`,
      fullImage:specFullImg3,
      image: specImg3,
      video: specVideo3 
    },
    {
      id: 4,
      title: `${t('specialty4')}`,
      desc: `${t('specDesc4')}`,
      fullImage:specFullImg4,
      image: specImg4,
      video: specVideo 
    },
    {
      id: 5,
      title: `${t('specialty5')}`,
      desc: `${t('specDesc5')}`,
      fullImage:specFullImg5,
      image: specImg5,
      video: specVideo2
    },
    {
      id: 6,
      title: `${t('specialty6')}`,
      desc: `${t('specDesc6')}`,
      fullImage:specFullImg6,
      image: specImg6,
      video: specVideo3 
    },
    {
      id: 7,
      title: `${t('specialty7')}`,
      desc: `${t('specDesc7')}`,
      fullImage:specFullImg7,
      image: specImg7,
      video: specVideo 
    },
  ]
  return (
    <>
      <CustomHelmet title="Kafana Pod Lozom - Jelovnik i Pića" imageUrl={LogoImage} canonical="https://kafanapodlozom78.rs/menu-and-drinks" description="Naš jelovnik je pažljivo kreiran kako bi zadovoljio i najistančanije ukuse. Sastoji se od pažljivo odabranih sastojaka i specijalnih receptura koje će vas osvojiti već pri prvom zalogaju. Upoznajte našu raznoliku ponudu jela i pića, i pripremite se za pravu kulinarsku poslasticu." keywords="pića, jela, drinks, meals, food, kafana pod lozom, tavern under the vine, tavern under vine, vine, loza" />
      {
        isLoading ? (<Loader />) : (
          <Layout>
          <div className='page-container'>
            <MenuAndDrinksSlider slides={specialtyMeals} />
            <MenuAndDrinksComponent />
          </div>
        </Layout>
        )
      }
    </>
  )
}

export default MenuAndDrinks