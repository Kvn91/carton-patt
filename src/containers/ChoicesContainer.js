import React from 'react'
import { connect } from 'react-redux'
import ChoicesList from '../components/ChoicesList'
import Choice from '../components/Choice'
import { selectChoice } from '../actions/index'

const ChoicesContainer = ({ choices, selectChoice }) => (
	<ChoicesList>
		{
			choices.map(choice =>
				<Choice
					key={choice.id}
					choice={choice}
					onChoiceSelected={() => selectChoice(choice)}
				/>)
		}
	</ChoicesList>
);

const mapStateToProps = state => ({
	choices: state.choices.currentChoices
});

export default connect(
	mapStateToProps,
	{ selectChoice }
)(ChoicesContainer)