import React from 'react';

const Story = ({story}) => {

  return (
    <div id="story" className="row">
      <div id="story-text" dangerouslySetInnerHTML={{__html: story.text}}>
      </div>
    </div>
  )
};

export default Story;