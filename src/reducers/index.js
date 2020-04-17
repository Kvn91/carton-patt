import { combineReducers } from 'redux'
import stories from './stories'
import choices from './choices'
import { INITIATE_GAME, SELECT_CHOICE } from '../constants/ActionTypes'

const initialState = {
	"tries": 0,
	"nbCartons": 0
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case INITIATE_GAME:
			return {
				...state,
				tries: (state.tries+1),
				nbCartons: 0
			};
		case SELECT_CHOICE:
			const { currentStory } = action;
			if (currentStory && currentStory.nbCartons) {
				console.log(currentStory.nbCartons);
				console.log(state.nbCartons+currentStory.nbCartons);
					return {
						...state,
						nbCartons: (state.nbCartons+currentStory.nbCartons)
				}
			}
			return state;
		default:
			return state;
	}
};

export default combineReducers({
	app,
  stories,
  choices
})
