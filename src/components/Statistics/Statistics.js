import React, { Component } from 'react';
import { StatisticSection, StatisticItem } from 'components/FeedStyled.styled';

class Statistics extends Component {
  countTotalFeedback = () => {
    return this.props.good + this.props.neutral + this.props.bad;
  };

  totalPositivePersent = () => {
    return ~~((this.props.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <StatisticSection>
        <StatisticItem>Good: {this.props.good}</StatisticItem>
        <StatisticItem>Neutral: {this.props.neutral}</StatisticItem>
        <StatisticItem>Bad: {this.props.bad}</StatisticItem>
        <StatisticItem>Total: {this.countTotalFeedback()}</StatisticItem>
        <StatisticItem>
          Positive Feedback: {this.totalPositivePersent()}%
        </StatisticItem>
      </StatisticSection>
    );
  }
}

export default Statistics;
