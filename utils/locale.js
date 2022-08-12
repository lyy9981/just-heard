import find from 'lodash/find'

export function getCity(slug, data) {
  if (!data) {
    return null
  }

  const countryCities = data?.country_cities

  if (countryCities) {
    const cities = getCities(countryCities)

    if (cities) {
      const city = find(cities, o => { return o?.slug === slug })

      return city
    }
  }

  return null
}

export const getCities = countryCities => {
  if (!countryCities) {
    return null
  }

  if (countryCities.length === 0) {
    return []
  }

  const allCities = []

  countryCities.forEach(country => {
    const { cities } = country

    cities.forEach(city => {
      allCities.push(city)
    })
  });

  return allCities
}
