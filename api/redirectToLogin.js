import url from 'url'

import getAuthStatus from './getAuthStatus'
import setAuthStatus from './setAuthStatus'

const urlConf = {
	protocol: 'https',
	hostname: 'secure.meetup.com',
	pathname: '/oauth2/authorize',
	query: {
		client_id: 'khl5psnnbtpnuer36hhts0q70j',
		response_type: 'token',
		redirect_uri: 'http://localhost:3000/callback',
	},
}

export default () => {
	const isLoggedIn = getAuthStatus() === 'true'

	const redirectLocation = url.format(urlConf)

	if (!isLoggedIn) {
		// set this flag to true
		// avoid redirect loop on App mount
		setAuthStatus(true)
		// redirect
		window.location = redirectLocation
	}
}
