import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Cities from './Cities'
import Events from './Events'
import Callback from './Callback'
import { redirectToLogin } from '../api'

class App extends React.Component {
	componentDidMount() {
		redirectToLogin()
	}

	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/cities">Cities</Link>
							</li>
						</ul>
					</nav>

					<Route path="/" exact component={Home} />
					<Route path="/cities" component={Cities} />
					<Route path="/events" component={Events} />
					<Route path="/callback" component={Callback} />
				</div>
			</Router>
		)
	}
}

export default App
