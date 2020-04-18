import React from 'react';

const Story = ({story}) => {

  return (
      <div id="story-text" dangerouslySetInnerHTML={{__html: story.text}}></div>
  )
};

export default Story;