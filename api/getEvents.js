import axios from 'axios'

import getAuthToken from './getAuthToken'

const getEvents = (lat, lon) => {
	const authToken = getAuthToken()
	const options = {
		method: 'get',
		url: 'https://api.meetup.com/2/open_events',
		params: {
			lon,
			lat,
			access_token: `${authToken}`,
		},
	}

	return axios(options)
		.then(res => res.data.results)
		.catch(error => {
			// handle error
			console.log(error)
		})
}

export default getEvents
