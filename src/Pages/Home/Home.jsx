import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import Hero from "./Components/Hero/Hero";
import AboutUsComponent from "./Components/AboutUs/AboutUsComponent";
import OurSpecialties from "./Components/OurSpecialties/OurSpecialties";
import DrinksAndVectors from "./Components/DrinksAndVectors/DrinksAndVectors";
import ContactUsComponent from "./Components/ContactUsComponent/ContactUsComponent";
import GalleryComponent from "./Components/GalleryComponent/GalleryComponent";
import CustomHelmet from "../../Components/Helmet/Helmet";
import Loader from "../../Components/Loader/Loader";
import LogoImage from '../../Assets/Logo.png'

const Home = () => {
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
    const images = document.querySelectorAll("[data-src]");

    function preloadImage(img) {
      const src = img.getAttribute("data-src");
      if (!src) {
        return;
      }

      img.src = src;
    }

    const imgOptions = {
      threshold: 0,
      rootMargin: "0px 150px 300px 150px",
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target);
        }
      });
    }, imgOptions);

    images.forEach((image) => {
      imgObserver.observe(image);
    });
  }, []);

  /*----- Intersection Observer Animations -----*/
  useEffect(() => {
    const revealOnIntersection = (className) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });
    };

    const observeHiddenElements = (className) => {
      const hiddenElements = document.querySelectorAll(className);
      hiddenElements.forEach((el) => {
        const observer = revealOnIntersection(className);
        observer.observe(el);
      });
    };

    observeHiddenElements(".hidden");
    observeHiddenElements(".hidden-left");
    observeHiddenElements(".hidden-right");
  }, []);

  return (
    <>
      <CustomHelmet
        title="Kafana Pod Lozom"
        canonical="https://kafanapodlozom78.rs/"
        imageUrl={LogoImage}
        description="Dobrodošli na našu elegantnu oazu ukusa i uživanja. Naša kafanska ponuda istražuje bogatstvo gastronomije i kulinarske inovacije kako bismo vam pružili jedinstveno iskustvo. Uživajte u spoju vrhunskih jela i odabranih pića u prefinjenom ambijentu. Dobrodošli u našu kulinarsku priču."
        keywords="pića, jela, drinks, kafana pod lozom 78, kafana, loza, 78, pod, meals, food, kafana pod lozom, tavern under the vine, tavern under vine, vine, loza"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <div className="page-container">
            <Hero />
            <AboutUsComponent />
            <OurSpecialties />
            <DrinksAndVectors />
            <ContactUsComponent />
            <GalleryComponent />
          </div>
        </Layout>
      )}
    </>
  );
};

export default Home;
