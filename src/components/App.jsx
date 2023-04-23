import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Section } from 'components/Section/Section';
import { FeedbackContainer } from 'components/FeedStyled.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalStats = () => this.state.good + this.state.neutral + this.state.bad;

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <FeedbackContainer>
        <Section title="Please leave FeedBack">
          <FeedbackOptions
            handleGood={this.handleGood}
            handleNeutral={this.handleNeutral}
            handleBad={this.handleBad}
          />
        </Section>
        <Section title="Statistics">
          {this.totalStats() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </FeedbackContainer>
    );
  }
}
export default App;
