import React from 'react';
import { FeedbackList, FeedbackButton } from 'components/FeedStyled.styled';

function FeedbackOptions({ handleGood, handleNeutral, handleBad }) {
  return (
    <FeedbackList>
      <li>
        <FeedbackButton type="button" onClick={handleGood}>
          Good
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button" onClick={handleNeutral}>
          Neutral
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button" onClick={handleBad}>
          Bad
        </FeedbackButton>
      </li>
    </FeedbackList>
  );
}

export default FeedbackOptions;
