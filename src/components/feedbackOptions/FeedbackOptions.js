import { Button, ButtonsCont } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsCont>
      {options.map(name => (
        <Button name={name} key={name} onClick={onLeaveFeedback}>
          {name}
        </Button>
      ))}
    </ButtonsCont>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
