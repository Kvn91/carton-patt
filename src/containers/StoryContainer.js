import React from 'react'
import { connect } from 'react-redux'
import Story from '../components/Story'

const StoryContainer = ({ story }) => (
  <Story story={story} />
);

const mapStateToProps = state => ({
  story: state.stories.currentStory
});

export default connect(
  mapStateToProps,
  {}
)(StoryContainer)
