import React from 'react';

const Choice = ({ choice, onChoiceSelected }) => (
  <div className="choiceCard card" onClick={onChoiceSelected}>
    <div className="card-body">
	    <p>{choice.text}</p>
    </div>
  </div>
);

export default Choice;