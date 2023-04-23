import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Section } from 'components/Section/Section';
import { FeedbackContainer } from 'components/FeedStyled.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalStats = () => good + neutral + bad;

  const handleGood = () => {
    setGood(prev => prev + 1);
  };
  const handleNeutral = () => {
    setNeutral(prev => prev + 1);
  };
  const handleBad = () => {
    setBad(prev => prev + 1);
  };

  return (
    <FeedbackContainer>
      <Section title="Please leave FeedBack">
        <FeedbackOptions
          handleGood={handleGood}
          handleNeutral={handleNeutral}
          handleBad={handleBad}
        />
      </Section>
      <Section title="Statistics">
        {totalStats() > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification />
        )}
      </Section>
    </FeedbackContainer>
  );
};

export default App;
