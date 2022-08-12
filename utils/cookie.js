import Cookies from 'universal-cookie'
import { COOKIE_NAMES } from '../site'

const cookies = new Cookies()

export const getCookie = name => {
  return cookies.get(name)
}

export const setCookie = (name, value) => {
  // one year in milliseconds
  const ms = 31536000000

  cookies.set(name, value, {
    path: '/',
    expires: new Date(Date.now() + ms)
  })
}

export const setCityCookie = (validSlug) => {
  const cookieSlug = getCookie(COOKIE_NAMES.CITY)

  if (!cookieSlug || cookieSlug !== validSlug) {
    setCookie(COOKIE_NAMES.CITY, validSlug)
  }
}
