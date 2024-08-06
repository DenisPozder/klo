import React, { useEffect, useState } from 'react'
import './menu-and-drinks-component.scss'
import { useTranslation } from 'react-i18next'
import oldPaper from '../../../../Assets/oldpaper.jpg'
import backgroundImg from '../../../../Assets/backgroundImg.png'
import decoration from '../../../../Assets/decoration7.png'
import vine from '../../../../Assets/vine4.png'
import sideVine from '../../../../Assets/sideVine.png'
import leave1 from '../../../../Assets/leave1.png'
import leave2 from '../../../../Assets/leave2.png'
import leave3 from '../../../../Assets/leave3.png'


const MenuAndDrinksComponent = () => {

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

    const MealsAndDrinks = [
        {
            id: 1,
            title: `${t('madTitle1')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad1')}`,
                    price: `${t('mad1Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad2')}`,
                    price: `${t('mad2Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad3')}`,
                    price: `${t('mad3Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad4')}`,
                    price: `${t('mad4Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad5')}`,
                    price: `${t('mad5Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad6')}`,
                    price: `${t('mad6Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad7')}`,
                    price: `${t('mad7Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad8')}`,
                    price: `${t('mad8Price')}`,
                },
            ]
        },
        {
            id: 2,
            title: `${t('madTitle2')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad9')}`,
                    price: `${t('mad9Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad10')}`,
                    price: `${t('mad10Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad11')}`,
                    price: `${t('mad11Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad12')}`,
                    price: `${t('mad12Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad13')}`,
                    price: `${t('mad13Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad14')}`,
                    price: `${t('mad14Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad15')}`,
                    price: `${t('mad15Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad16')}`,
                    price: `${t('mad16Price')}`,
                },
            ]
        },
        {
            id: 3,
            title: `${t('madTitle3')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad17')}`,
                    price: `${t('mad17Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad18')}`,
                    price: `${t('mad18Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad19')}`,
                    price: `${t('mad19Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad20')}`,
                    price: `${t('mad20Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad21')}`,
                    price: `${t('mad21Price')}`,
                },
            ]
        },
        {
            id: 4,
            title: `${t('madTitle4')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad22')}`,
                    price: `${t('mad22Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad23')}`,
                    price: `${t('mad23Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad24')}`,
                    price: `${t('mad24Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad25')}`,
                    price: `${t('mad25Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad26')}`,
                    price: `${t('mad26Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad27')}`,
                    price: `${t('mad27Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad28')}`,
                    price: `${t('mad28Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad29')}`,
                    price: `${t('mad29Price')}`,
                },
                {
                    id: 9,
                    title: `${t('mad30')}`,
                    price: `${t('mad30Price')}`,
                },
                {
                    id: 10,
                    title: `${t('mad31')}`,
                    price: `${t('mad31Price')}`,
                },
            ]
        },
        {
            id: 5,
            title: `${t('madTitle5')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad32')}`,
                    price: `${t('mad32Price')}`,
                },
            ]
        },
        {
            id: 6,
            title: `${t('madTitle6')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad33')}`,
                    price: `${t('mad33Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad34')}`,
                    price: `${t('mad34Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad35')}`,
                    price: `${t('mad35Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad36')}`,
                    price: `${t('mad36Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad37')}`,
                    price: `${t('mad37Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad38')}`,
                    price: `${t('mad38Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad39')}`,
                    price: `${t('mad39Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad40')}`,
                    price: `${t('mad40Price')}`,
                },
                {
                    id: 9,
                    title: `${t('mad41')}`,
                    price: `${t('mad41Price')}`,
                },
                {
                    id: 10,
                    title: `${t('mad42')}`,
                    price: `${t('mad42Price')}`,
                },
                {
                    id: 11,
                    title: `${t('mad43')}`,
                    price: `${t('mad43Price')}`,
                },
                {
                    id: 12,
                    title: `${t('mad44')}`,
                    price: `${t('mad44Price')}`,
                },
                {
                    id: 13,
                    title: `${t('mad45')}`,
                    price: `${t('mad45Price')}`,
                },
            ]
        },
        {
            id: 7,
            title: `${t('madTitle7')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad46')}`,
                    price: `${t('mad46Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad47')}`,
                    price: `${t('mad47Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad48')}`,
                    price: `${t('mad48Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad49')}`,
                    price: `${t('mad49Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad50')}`,
                    price: `${t('mad50Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad51')}`,
                    price: `${t('mad51Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad52')}`,
                    price: `${t('mad52Price')}`,
                },
            ]
        },
        {
            id: 8,
            title: `${t('madTitle8')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad53')}`,
                    price: `${t('mad53Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad54')}`,
                    price: `${t('mad54Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad55')}`,
                    price: `${t('mad55Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad56')}`,
                    price: `${t('mad56Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad57')}`,
                    price: `${t('mad57Price')}`,
                },
            ]
        },
        {
            id: 9,
            title: `${t('madTitle9')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad58')}`,
                    price: `${t('mad58Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad59')}`,
                    price: `${t('mad59Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad60')}`,
                    price: `${t('mad60Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad61')}`,
                    price: `${t('mad61Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad62')}`,
                    price: `${t('mad62Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad63')}`,
                    price: `${t('mad63Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad64')}`,
                    price: `${t('mad64Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad65')}`,
                    price: `${t('mad65Price')}`,
                },
                {
                    id: 9,
                    title: `${t('mad66')}`,
                    price: `${t('mad66Price')}`,
                },
                {
                    id: 10,
                    title: `${t('mad67')}`,
                    price: `${t('mad67Price')}`,
                },
                {
                    id: 11,
                    title: `${t('mad68')}`,
                    price: `${t('mad68Price')}`,
                },
                {
                    id: 12,
                    title: `${t('mad69')}`,
                    price: `${t('mad69Price')}`,
                },
                {
                    id: 13,
                    title: `${t('mad70')}`,
                    price: `${t('mad70Price')}`,
                },
                {
                    id: 14,
                    title: `${t('mad71')}`,
                    price: `${t('mad71Price')}`,
                },
            ]
        },
        {
            id: 10,
            title: `${t('madTitle10')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad72')}`,
                    price: `${t('mad72Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad73')}`,
                    price: `${t('mad73Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad74')}`,
                    price: `${t('mad74Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad75')}`,
                    price: `${t('mad75Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad76')}`,
                    price: `${t('mad76Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad77')}`,
                    price: `${t('mad77Price')}`,
                },
            ]
        },
        {
            id: 11,
            title: `${t('madTitle11')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad78')}`,
                    price: `${t('mad78Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad79')}`,
                    price: `${t('mad79Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad80')}`,
                    price: `${t('mad80Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad81')}`,
                    price: `${t('mad81Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad82')}`,
                    price: `${t('mad82Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad83')}`,
                    price: `${t('mad83Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad84')}`,
                    price: `${t('mad84Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad85')}`,
                    price: `${t('mad85Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad86')}`,
                    price: `${t('mad86Price')}`,
                },
                {
                    id: 9,
                    title: `${t('mad87')}`,
                    price: `${t('mad87Price')}`,
                },
                {
                    id: 10,
                    title: `${t('mad88')}`,
                    price: `${t('mad88Price')}`,
                },
                {
                    id: 11,
                    title: `${t('mad89')}`,
                    price: `${t('mad89Price')}`,
                },
                {
                    id: 12,
                    title: `${t('mad90')}`,
                    price: `${t('mad90Price')}`,
                },
                {
                    id: 13,
                    title: `${t('mad91')}`,
                    price: `${t('mad91Price')}`,
                },
                {
                    id: 14,
                    title: `${t('mad92')}`,
                    price: `${t('mad92Price')}`,
                },
            ]
        },
        {
            id: 12,
            title: `${t('madTitle12')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad93')}`,
                    price: `${t('mad93Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad94')}`,
                    price: `${t('mad94Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad95')}`,
                    price: `${t('mad95Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad96')}`,
                    price: `${t('mad96Price')}`,
                },
            ]
        },
        {
            id: 13,
            title: `${t('madTitle13')}`,
            category: "meals",
            mad: [
                {
                    id: 1,
                    title: `${t('mad97')}`,
                    price: `${t('mad97Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad98')}`,
                    price: `${t('mad98Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad99')}`,
                    price: `${t('mad99Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad100')}`,
                    price: `${t('mad100Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad101')}`,
                    price: `${t('mad101Price')}`,
                },
            ]
        },
        {
            id: 14,
            title: `${t('madTitle14')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad102')}`,
                    price: `${t('mad102Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad103')}`,
                    price: `${t('mad103Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad104')}`,
                    price: `${t('mad104Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad105')}`,
                    price: `${t('mad105Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad106')}`,
                    price: `${t('mad106Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad107')}`,
                    price: `${t('mad107Price')}`,
                },
            ]
        },
        {
            id: 15,
            title: `${t('madTitle15')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad108')}`,
                    price: `${t('mad108Price')}`,
                },
            ]
        },
        {
            id: 16,
            title: `${t('madTitle16')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad109')}`,
                    price: `${t('mad109Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad110')}`,
                    price: `${t('mad110Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad111')}`,
                    price: `${t('mad111Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad112')}`,
                    price: `${t('mad112Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad113')}`,
                    price: `${t('mad113Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad114')}`,
                    price: `${t('mad114Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad115')}`,
                    price: `${t('mad115Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad116')}`,
                    price: `${t('mad116Price')}`,
                },
            ]
        },
        {
            id: 17,
            title: `${t('madTitle17')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad117')}`,
                    price: `${t('mad117Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad118')}`,
                    price: `${t('mad118Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad119')}`,
                    price: `${t('mad119Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad120')}`,
                    price: `${t('mad120Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad121')}`,
                    price: `${t('mad121Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad122')}`,
                    price: `${t('mad122Price')}`,
                },
            ]
        },
        {
            id: 18,
            title: `${t('madTitle18')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad123')}`,
                    price: `${t('mad123Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad124')}`,
                    price: `${t('mad124Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad125')}`,
                    price: `${t('mad125Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad126')}`,
                    price: `${t('mad126Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad127')}`,
                    price: `${t('mad127Price')}`,
                },
            ]
        },
        {
            id: 19,
            title: `${t('madTitle19')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad128')}`,
                    price: `${t('mad128Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad129')}`,
                    price: `${t('mad129Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad130')}`,
                    price: `${t('mad130Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad131')}`,
                    price: `${t('mad131Price')}`,
                },
            ]
        },
        {
            id: 20,
            title: `${t('madTitle20')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad132')}`,
                    price: `${t('mad132Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad133')}`,
                    price: `${t('mad133Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad134')}`,
                    price: `${t('mad134Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad135')}`,
                    price: `${t('mad135Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad136')}`,
                    price: `${t('mad136Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad137')}`,
                    price: `${t('mad137Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad138')}`,
                    price: `${t('mad138Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad139')}`,
                    price: `${t('mad139Price')}`,
                },
            ]
        },
        {
            id: 21,
            title: `${t('madTitle21')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad140')}`,
                    price: `${t('mad140Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad141')}`,
                    price: `${t('mad141Price')}`,
                },
            ]
        },
        {
            id: 22,
            title: `${t('madTitle22')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad142')}`,
                    price: `${t('mad142Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad143')}`,
                    price: `${t('mad143Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad144')}`,
                    price: `${t('mad144Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad145')}`,
                    price: `${t('mad145Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad146')}`,
                    price: `${t('mad146Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad147')}`,
                    price: `${t('mad147Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad148')}`,
                    price: `${t('mad148Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad149')}`,
                    price: `${t('mad149Price')}`,
                },
                {
                    id: 9,
                    title: `${t('mad150')}`,
                    price: `${t('mad150Price')}`,
                },
                {
                    id: 10,
                    title: `${t('mad151')}`,
                    price: `${t('mad151Price')}`,
                },
            ]
        },
        {
            id: 23,
            title: `${t('madTitle23')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad152')}`,
                    price: `${t('mad152Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad152')}`,
                    price: `${t('mad152Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad154')}`,
                    price: `${t('mad154Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad155')}`,
                    price: `${t('mad155Price')}`,
                },
            ]
        },
        {
            id: 24,
            title: `${t('madTitle24')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad156')}`,
                    price: `${t('mad156Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad157')}`,
                    price: `${t('mad157Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad158')}`,
                    price: `${t('mad158Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad159')}`,
                    price: `${t('mad159Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad160')}`,
                    price: `${t('mad160Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad161')}`,
                    price: `${t('mad161Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad162')}`,
                    price: `${t('mad162Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad163')}`,
                    price: `${t('mad163Price')}`,
                },
                {
                    id: 9,
                    title: `${t('mad164')}`,
                    price: `${t('mad164Price')}`,
                },
            ]
        },
        {
            id: 25,
            title: `${t('madTitle25')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad165')}`,
                    price: `${t('mad165Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad166')}`,
                    price: `${t('mad166Price')}`,
                },
            ]
        },
        {
            id: 26,
            title: `${t('madTitle26')}`,
            category: "drinks",
            mad: [
                {}
            ]
        },
        {
            id: 27,
            title: `${t('madTitle27')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad167')}`,
                    price: `${t('mad167Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad168')}`,
                    price: `${t('mad168Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad169')}`,
                    price: `${t('mad169Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad170')}`,
                    price: `${t('mad170Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad171')}`,
                    price: `${t('mad171Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad172')}`,
                    price: `${t('mad172Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad173')}`,
                    price: `${t('mad173Price')}`,
                },
            ]
        },
        {
            id: 28,
            title: `${t('madTitle28')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad174')}`,
                    price: `${t('mad174Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad175')}`,
                    price: `${t('mad175Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad176')}`,
                    price: `${t('mad176Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad177')}`,
                    price: `${t('mad177Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad178')}`,
                    price: `${t('mad178Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad179')}`,
                    price: `${t('mad179Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad180')}`,
                    price: `${t('mad180Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad181')}`,
                    price: `${t('mad181Price')}`,
                },
            ]
        },
        {
            id: 29,
            title: `${t('madTitle29')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad182')}`,
                    price: `${t('mad182Price')}`,
                },
            ]
        },
        {
            id: 30,
            title: `${t('madTitle30')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad183')}`,
                    price: `${t('mad183Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad184')}`,
                    price: `${t('mad184Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad185')}`,
                    price: `${t('mad185Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad186')}`,
                    price: `${t('mad186Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad187')}`,
                    price: `${t('mad187Price')}`,
                },
            ]
        },
        {
            id: 31,
            title: `${t('madTitle31')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad188')}`,
                    price: `${t('mad188Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad189')}`,
                    price: `${t('mad189Price')}`,
                },
                {
                    id: 3,
                    title: `${t('mad190')}`,
                    price: `${t('mad190Price')}`,
                },
                {
                    id: 4,
                    title: `${t('mad191')}`,
                    price: `${t('mad191Price')}`,
                },
                {
                    id: 5,
                    title: `${t('mad192')}`,
                    price: `${t('mad192Price')}`,
                },
                {
                    id: 6,
                    title: `${t('mad193')}`,
                    price: `${t('mad193Price')}`,
                },
                {
                    id: 7,
                    title: `${t('mad194')}`,
                    price: `${t('mad194Price')}`,
                },
                {
                    id: 8,
                    title: `${t('mad195')}`,
                    price: `${t('mad195Price')}`,
                },
                {
                    id: 9,
                    title: `${t('mad196')}`,
                    price: `${t('mad196Price')}`,
                },
            ]
        },
        {
            id: 32,
            title: `${t('madTitle32')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad197')}`,
                    price: `${t('mad197Price')}`,
                },
            ]
        },
        {
            id: 33,
            title: `${t('madTitle33')}`,
            category: "drinks",
            mad: [
                {
                    id: 1,
                    title: `${t('mad198')}`,
                    price: `${t('mad198Price')}`,
                },
                {
                    id: 2,
                    title: `${t('mad199')}`,
                    price: `${t('mad199Price')}`,
                },
            ]
        },
    ]

    const [ category, setCategory ] = useState('MEALS') // At the beggining "MEALS" tab will be active
    const [ mad, setMad ] = useState(MealsAndDrinks)

    useEffect(() => {
        if(category === 'MEALS') {
            const filteredMAD = MealsAndDrinks.filter(mad => mad.category === 'meals')
            setMad(filteredMAD)
          }
      
          if(category === 'DRINKS') {
            const filteredMAD = MealsAndDrinks.filter(mad => mad.category === 'drinks')
            setMad(filteredMAD)
          }
    },[category])

  return (
    <div className="menu-and-drinks-component">
        <img data-src={oldPaper} alt="Dekorativna pozadina" className='madc-old-paper' />
        <img data-src={backgroundImg} className='madc-background' alt="Dekoarativna pozadina" />
        <img data-src={vine} alt="Dekorativna slika" className='madc-vine hidden' />
        <img data-src={decoration} alt="Dekorativna slika" className='madc-decoration hidden-left' />
        <img data-src={sideVine} className='madc-vine-dec-right hidden-right' alt="Dekorativna slika" />
        <img data-src={sideVine} className='madc-vine-dec-left hidden-left' alt="Dekorativna slika" />
        <div className="madc-leaves">
            <div><img src={leave1} alt="Dekorativna slika" /></div>
            <div><img src={leave2} alt="Dekorativna slika" /></div>
            <div><img src={leave3} alt="Dekorativna slika" /></div>
            <div><img src={leave1} alt="Dekorativna slika" /></div>
            <div><img src={leave2} alt="Dekorativna slika" /></div>
            <div><img src={leave3} alt="Dekorativna slika" /></div>
        </div>
        <div className="madc-leaves madc-leaves-1">
            <div><img src={leave1} alt="Dekorativna slika" /></div>
            <div><img src={leave2} alt="Dekorativna slika" /></div>
            <div><img src={leave3} alt="Dekorativna slika" /></div>
            <div><img src={leave1} alt="Dekorativna slika" /></div>
            <div><img src={leave2} alt="Dekorativna slika" /></div>
            <div><img src={leave3} alt="Dekorativna slika" /></div>
        </div>
        <div className="madc-leaves madc-leaves-2">
            <div><img src={leave1} alt="Dekorativna slika" /></div>
            <div><img src={leave2} alt="Dekorativna slika" /></div>
            <div><img src={leave3} alt="Dekorativna slika" /></div>
            <div><img src={leave1} alt="Dekorativna slika" /></div>
            <div><img src={leave2} alt="Dekorativna slika" /></div>
            <div><img src={leave3} alt="Dekorativna slika" /></div>
        </div>
        <div className="madc-content">
            <div className="madc-header">
                <div className={`madc-header-category ${category === "MEALS" ? "madc-header-active" : ""}`}>
                    <div className='madc-hc' onClick={() => setCategory('MEALS')}>{t('madCatTitle1')}</div>
                </div>
                <div className={`madc-header-category ${category === "DRINKS" ? "madc-header-active" : ""}`}>
                    <div className='madc-hc' to='#' onClick={() => setCategory('DRINKS')}>{t('madCatTitle2')}</div>
                </div>
            </div>
            <div className="madc-items hidden">
                {
                    mad.map((mad, index) => (
                        <div className="madc-item" key={index}>
                            <h1>{mad.title}</h1>
                            <div className="madc-mad">
                                {
                                    mad.mad.map((item, index) => (
                                        <div className="single-mad" key={index}>
                                            <h3>{item.title}</h3>
                                            <h3>{item.price}</h3>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MenuAndDrinksComponent