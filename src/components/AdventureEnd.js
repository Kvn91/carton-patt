import React from 'react'

const AdventureEnd = ({ currentStory, tries, nbCartons, onReset }) => {
	let endMessage = '';
	if (currentStory.end === "win") {
		endMessage = <p>Vous avez réussi à mater {nbCartons} cartons en {tries} essais !</p>;
		if (nbCartons<10) {
			endMessage += <p>C'est bien, mais le carton Patt que vous êtes peut surement faire mieux !</p>;
		} else {
			endMessage += <p>Vous êtes êtes un pervers hors-pair, et devriez penser à faire carrière...</p>;
		}
	} else if (currentStory.end === "end") {
		endMessage = <p>Yes, le carton est dead</p>;
	}

	return (
		<div>
			<p>{currentStory.text}</p>
			{winMessage}
			<div id="restart-button">
				<a className="fat-button" onClick={onReset}>
					<i class="fas fa-recycle"></i> Recommencer <i class="fas fa-recycle"></i>
				</a>
			</div>
		</div>
	)
};

export default AdventureEnd;