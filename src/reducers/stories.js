import { combineReducers } from 'redux'
import { INITIATE_GAME, SELECT_CHOICE } from '../constants/ActionTypes'

const byId = (state = {}, action) => {
	switch (action.type) {
		case INITIATE_GAME:
			return {
				...state,
				...action.stories.reduce((obj, story) => {
					obj[story.id] = story;
					return obj
				}, {})
			};
		default:
			return state;
	}
};

const currentStory = ( state = {}, action ) => {
	switch (action.type) {
		case INITIATE_GAME:
			return {
				...state,
				...action.stories[0]
			};
		case SELECT_CHOICE:
			const { currentStory } = action;
			if (currentStory) {
				return currentStory;
			}
			return state;
		default:
			return state;
	}
};

export default combineReducers ({
	byId,
	currentStory
});