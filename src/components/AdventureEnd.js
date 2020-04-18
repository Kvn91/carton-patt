import React from 'react'

const AdventureEnd = ({ currentStory, tries, nbCartons, onReset }) => {
	let endMessage, winMessage = '';
	if (currentStory.end === "win") {
		endMessage = <p>Vous avez réussi à mater {nbCartons} cartons en {tries} essais !</p>;
		if (nbCartons<30) {
			winMessage = <p>C'est bien, mais le carton Patt que vous êtes peut surement faire mieux !</p>;
		} else {
			winMessage = <p>Vous êtes êtes un pervers hors-pair, et devriez peut-être penser à faire carrière...</p>;
		}
	} else if (currentStory.end === "dead") {
		endMessage = <p>Yes, le carton est dead</p>;
	}

	return (
		<div>
			<div id="story-text" dangerouslySetInnerHTML={{__html: currentStory.text}}></div>
			<div>{endMessage} {winMessage}</div>
			<div id="restart-button">
				<a className="fat-button" onClick={onReset}>
					<i class="fas fa-recycle"></i> Recommencer <i class="fas fa-recycle"></i>
				</a>
			</div>
		</div>
	)
};

export default AdventureEnd;