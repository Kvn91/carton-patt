import React from 'react'
import { connect } from 'react-redux'
import ChoicesList from '../components/ChoicesList'
import Choice from '../components/Choice'
import ResetButton from '../components/ResetButton'
import { initiateGame, selectChoice } from '../actions/index'

const ChoicesContainer = ({ choices, initiateGame, selectChoice }) => {

	console.log(initiateGame);
	if (choices.length > 0) {
		return (
			<ChoicesList>
				{
					choices.map(choice =>
						<Choice
							key={choice.id}
							choice={choice}
							onChoiceSelected={() => selectChoice(choice.storyId)}
						/>)
				}
			</ChoicesList>
		)
	} else {
		return (
			<ResetButton onReset={() => initiateGame()}/>
		)
	}
};

const mapStateToProps = state => ({
	choices: state.choices.currentChoices
});

export default connect(
	mapStateToProps,
	{ initiateGame, selectChoice }
)(ChoicesContainer)