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
				tries: (state.tries+1)
			};
		case SELECT_CHOICE:
			const { choice } = action;
			if (choice && choice.nbCartons) {
					return {
						...state,
						nbCartons: (state.nbCartons+choice.nbCartons)
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
