import React from 'react';
import PropTypes from 'prop-types'

const Choice = ({ choice, onChoiceSelected }) => (
  <div className="choiceCard card" onClick={onChoiceSelected}>
    <div className="card-body">
	    <p>{choice.text}</p>
    </div>
  </div>
);

export default Choice;