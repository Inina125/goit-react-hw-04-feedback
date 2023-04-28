import React from 'react';
import { Item, StatisticsCont } from './Statistics.styled';
import PropTypes from 'prop-types';

const NAMES = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
  total: 'Total',
  positivePercentage: 'Positive Feedback',
};

const Statistics = props => {
  return (
    <StatisticsCont>
      {Object.keys(props).map(name => (
        <Item key={name}>
          {NAMES[name]}: {props[name]}
        </Item>
      ))}
    </StatisticsCont>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
