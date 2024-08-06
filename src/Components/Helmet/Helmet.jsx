import React from 'react'
import { Helmet } from 'react-helmet'

const CustomHelmet = ({title, description, canonical, keywords, imageUrl}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonical} />

        <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Restoran",
            "name": "Kafanica Pod Lozom (Kafana Pod Lozom 78)",
            "description": "${description}",
            "image": "${imageUrl}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "11080 Zemun, Hercegovačka 31e",
              "addressLocality": "Beograd",
              "postalCode": "11080",
              "addressCountry": "Srbija"
            },
            "telephone": "060 1303101",
            "url": "${canonical}",
            "priceRange": "$$"
          }
        `}
      </script>
    </Helmet>
  )
}

export default CustomHelmet