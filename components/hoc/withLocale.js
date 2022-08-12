import React, { useEffect } from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { useServerContext } from 'next-server-context'
import { setCityCookie } from '../../utils/cookie'
import { getCity } from '../../utils/locale'
import { useCountryCities } from '../../hooks/queries'

const withLocale = Component => props => {
	const router = useRouter()
	const { data } = useCountryCities()
	const serverContext = useServerContext()
	const { slug } = router.query
	let statusCode = 0
	const checkSlug = () => {
		const city = getCity(slug, data)

		if (city) {
			if (typeof window !== 'undefined') {
				setCityCookie(city.slug)
			}
		} else {
			statusCode = 404
		}
	}

	if (data) {
		checkSlug()
	}

	useEffect(() => {
		if (slug) {
			checkSlug()
		}
	}, [slug])

	if (statusCode === 404) {
		if (serverContext) {
			serverContext.response.statusCode = statusCode
		}
		return <Error statusCode={statusCode} />
	}

	return <Component {...props } />
}

export default withLocale