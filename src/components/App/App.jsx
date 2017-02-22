import React from 'react';

import Home from './Home.jsx';
import Nav from './Nav.jsx';

import people from '../../stores/people';

// Stateful component
const App = React.createClass({

	getInitialState() {
		return {
			page: 'home',
			people: people.get()
		};
	},

	getDefaultProps() {
		return {
			data: []
		};
	},

	componentWillMount() {
		people.on('update', this.handleStoreUpdate);
	},

	handleStoreUpdate(data) {
		this.setState({
			people: data
		});
	},

	setPage(page) {
		this.setState({ page });
	},

  render() {
  	let page = '404';
  	if (this.state.page === 'home') {
  		page = <Home people={this.state.people} />;
  	} else if (this.state.page === 'about') {
  		page = <h1>About</h1>;
  	}
  	return (
  		<main>
  			<Nav onLinkClick={this.setPage} />
  			{page}
  		</main>
  	);
  },

  componentDidMount() {

  },

  componentWillUnmount() {
		people.removeEventListener('update', this.handleStoreUpdate);
  }

});

export default App;