import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
	<div>
		<p>Bienvenue dans cette histoire dont vous êtes le héros !</p>
		<p>Durant cette aventure, vous aurez des choix à faire, parfois complexes, parfois déchirants, de quoi se torturez l'esprit, pire que les pires scènes de Saw wlh</p>
		<p>Le synpopsis est simple, vous incarnez un carton dont le but est de mater un maximum de ses semblables !</p>
		<p>... Have fun ...</p>
		<div id="start-button">
			<Link to="/adventure" className="fat-button">
				Commencer l'aventure
			</Link>
		</div>
	</div>
);

export default Home;