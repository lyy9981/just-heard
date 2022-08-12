import React from 'react'
import { useQuery } from '@apollo/client'
import COUNTRY_CITIES from '../queries/countryCities'

export function useCountryCities() {
	return useQuery(COUNTRY_CITIES)
}