import React from 'react';

const Story = ({story}) => {

  return (
    <div id="story" className="row">
      <div id="story-text">
	      <p>{story.text}</p>
      </div>
    </div>
  )
};

export default Story;