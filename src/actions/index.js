import * as types from '../constants/ActionTypes'
import stories from '../mocks/story.json'
import choices from '../mocks/choices.json'

const initiateGameAction = stories => ({
	type: types.INITIATE_GAME,
	stories,
	choices
});

export const initiateGame = () => dispatch => (
	dispatch(initiateGameAction(stories, choices))
);

const selectChoiceSuccess = (choice, currentStory, currentChoices) => ({
	type: types.SELECT_CHOICE,
	choice,
	currentStory,
	currentChoices
});

export const selectChoice = choice => (dispatch, getState) => {
	const { stories, choices } = getState();
	const currentStory = stories.byId[choice.storyId];
	const currentChoices = [];

	currentStory.choicesIds.forEach(choiceId => {
		if (choices.byId[choiceId] !== undefined) {
			currentChoices.push(choices.byId[choiceId]);
		}
	});

	dispatch(selectChoiceSuccess(choice, currentStory, currentChoices));
};