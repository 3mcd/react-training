import React from 'react';

import people from '../../stores/people';

const Home = React.createClass({

  getInitialProps() {
    return {
      people: []
    };
  },

  render() {
    var items = this.props.people.map(x => {
      return <li onClick={() => this.remove(x)} key={x.last}>{x.first + ' ' + x.last}</li>;
    });
    return (
      <div className="Home">
        <ul onClick={this.remove}>{items}</ul>
      </div>
    );
  },

  remove(person) {
    people.delete(person);
  }

});

export default Home;