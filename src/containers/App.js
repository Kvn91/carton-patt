import React from 'react'
import StoryContainer from './StoryContainer'
import ChoiceContainer from './ChoicesContainer'

const App = () => (
  <div className="content-wrapper">
    <h2>CARTON PATT</h2>
	  <div className="content">
	    <StoryContainer />
	    <ChoiceContainer />
	  </div>
  </div>
);

export default App
