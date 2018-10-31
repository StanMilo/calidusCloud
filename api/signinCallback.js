import saveToken from './saveToken'
import setAuthStatus from './setAuthStatus'

export default () => {
	const tokenHash = location.hash.split('&')[0]

	if (tokenHash) {
		const token = tokenHash.split('=')[1]

		if (token) {
			saveToken(token)
		}
	}
}
