import React, { useState, useContext, createContext, useEffect } from 'react'
import { useRouter } from 'next/router'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getCityName(slug) {
  if (!slug) {
    return null
  }

  const words = slug.split('-')
  const capitalizedWords = words.map(word => {
    return capitalizeFirstLetter(word)
  })

  return capitalizedWords.join(' ')
}

const LocaleContext = createContext({
  citySlug: null,
  cityName: null,
  cityBrand: null,
})

export default function LocaleProvider({ children }) {
  const router = useRouter()
  const { slug } = router.query
  const [value, setValue] = useState({
    citySlug: slug,
    cityName: getCityName(slug),
    cityBrand: `Example ${getCityName(slug)}`,
  })

  useEffect(() => {
    if (slug) {
      setValue({
        citySlug: slug,
        cityName: getCityName(slug),
        cityBrand: `Example ${getCityName(slug)}`,
      })
    }
  }, [slug])

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
