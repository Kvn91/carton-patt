import { combineReducers } from 'redux'
import { INITIATE_GAME, SELECT_CHOICE } from '../constants/ActionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case INITIATE_GAME:
      return {
        ...state,
        ...action.choices.reduce((obj, choice) => {
          obj[choice.id] = choice;
          return obj
        }, {})
      };
    default:
      return state;
  }
};

const currentChoices = ( state = [], action ) => {
  switch (action.type) {
    case INITIATE_GAME:
      return [action.choices[0], action.choices[1]];
	  case SELECT_CHOICE:
		  const { currentChoices } = action;
		  if (currentChoices) {
			  return currentChoices;
		  }
		  return state;
    default:
      return state;
  }
};

export default combineReducers ({
  byId,
  currentChoices
});