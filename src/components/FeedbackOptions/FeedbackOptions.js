import React, { Component } from 'react';
import { FeedbackList, FeedbackButton } from 'components/FeedStyled.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <FeedbackList>
        <li>
          <FeedbackButton type="button" onClick={this.props.handleGood}>
            Good
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton type="button" onClick={this.props.handleNeutral}>
            Neutral
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton type="button" onClick={this.props.handleBad}>
            Bad
          </FeedbackButton>
        </li>
      </FeedbackList>
    );
  }
}

export default FeedbackOptions;
