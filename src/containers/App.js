import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import Adventure from '../components/Adventure'
import AdventureEnd from '../components/AdventureEnd'
import Home from '../components/Home'
import { initiateGame } from '../actions/index'

const App = ({ currentStory, tries, nbCartons, initiateGame }) => {
	let adventure;
	if (currentStory.end) {
		adventure = <AdventureEnd
			currentStory={currentStory}
			tries={tries}
			nbCartons={nbCartons}
			onReset={() => initiateGame()}
		/>;
	} else {
		adventure = <Adventure />;
	}

	return (
		<Router>
			<div className="content-wrapper">
				<h2><Link to="/" onClick={() => initiateGame()}>CARTON PATT : L'aventure dont VOUS êtes le carton</Link></h2>
				<div className="content">
					<Switch>
						<Route path="/adventure">
							{adventure}
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
};

const mapStateToProps = state => ({
	currentStory: state.stories.currentStory,
	tries: state.app.tries,
	nbCartons: state.app.nbCartons
});

export default connect(
	mapStateToProps,
	{ initiateGame }
)(App)
