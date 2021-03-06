import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'


var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Welcome</h1>
              {this.props.children}
			</div>
		);
	}

});


render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    </Route>
  </Router>
), document.getElementById('main'))