import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
	<div>
		<p>Bienvenue blablabla</p>
		<div id="start-button">
			<Link to="/adventure" className="fat-button">
				Commencer l'aventure
			</Link>
		</div>
	</div>
);

export default Home;