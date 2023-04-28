import React, { useState } from 'react';
import GlobalStyle from 'components/GlobalStyles';
import { AppCont } from './App.styled';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Statistics from './statistics/Statistics';

const OPTIONS = ['good', 'neutral', 'bad'];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    const option = event.target.name;
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('no option');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      return Math.round(good / (countTotalFeedback() / 100)) + '%';
    } else {
      return 0;
    }
  };

  return (
    <AppCont>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
        {countTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
      <GlobalStyle />
    </AppCont>
  );
};

export default App;
