import React from 'react'

import { getEvents } from '../api'

class Events extends React.Component {
	constructor(props) {
		super(props)

		this.state = { events: [], isLoading: true }
		this.handleBackClick = this.handleBackClick.bind(this)
	}

	componentDidMount() {
		const {
			location: {
				state: { lat, lon },
			},
		} = this.props

		getEvents(lat, lon).then(res => this.setState({ events: res, isLoading: false }))
	}

	handleBackClick() {
		const { history } = this.props

		history.push('/cities')
	}

	renderEvents() {
		const { events } = this.state

		return events.map(event => (
			<li key={event.id} className="collection-item">
				{event.name}
				<div className="secondary-content">{event.venue.name}</div>
			</li>
		))
	}

	render() {
		const { isLoading } = this.state
		const {
			location: {
				state: { city },
			},
		} = this.props

		return (
			<div className="container">
				<a
					className="btn-floating btn-medium waves-effect waves-light"
					onClick={this.handleBackClick}
				>
					<i className="material-icons">arrow_back</i>
				</a>

				<ul className="collection with-header">
					<div className="collection-header">
						<h4>Events in {city}</h4>
					</div>
					{this.renderEvents()}
				</ul>
				{isLoading && (
					<div className="progress">
						<div className="indeterminate" />
					</div>
				)}
			</div>
		)
	}
}

export default Events
