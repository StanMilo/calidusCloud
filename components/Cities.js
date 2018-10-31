import React from 'react'
import { getCities } from '../api'

class Cities extends React.Component {
	constructor(props) {
		super(props)
		this.state = { cities: [], isLoading: true }

		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		getCities().then(res => this.setState({ cities: res, isLoading: false }))
	}

	handleClick(event) {
		const { lat, lon, city } = event.target.dataset

		const { history } = this.props
		const location = {
			pathname: '/events',
			state: { lat, lon, city },
		}
		history.push(location)
	}

	renderCities() {
		const { cities } = this.state

		return cities.map(city => (
			<a
				key={city.id}
				className="collection-item"
				onClick={this.handleClick}
				data-lat={city.lat}
				data-lon={city.lon}
				data-city={city.city}
			>
				{city.city} - members: {city.member_count}
				<div className="secondary-content">
					<i className="material-icons">arrow_forward_ios</i>
				</div>
			</a>
		))
	}

	render() {
		const { isLoading } = this.state

		return (
			<div className="container">
				<div className="collection with-header">
					<div className="collection-header">
						<h4>Cities with Events</h4>
					</div>
					{this.renderCities()}
				</div>
				{isLoading && (
					<div className="progress">
						<div className="indeterminate" />
					</div>
				)}
			</div>
		)
	}
}

export default Cities
