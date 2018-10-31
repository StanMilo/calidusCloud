import React from 'react'
import { Redirect } from 'react-router-dom'

import { signinCallback, setAuthStatus } from '../api'

class Callback extends React.Component {
	componentWillMount() {
		signinCallback()
	}

	componentWillUnmount() {
		// set auth flag to false, so user can signup on App mount
		// yeah, every refresh is going to hit signin again
		// but hey, simple logic to avoid implementing login in client (short on time here)
		setAuthStatus(false)
	}

	render() {
		return <Redirect to="/" />
	}
}

export default Callback
