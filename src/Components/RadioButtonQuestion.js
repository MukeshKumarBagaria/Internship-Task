import React from 'react';
import Form from 'react-bootstrap/Form';
import '../Assets/Styles/radioButtonStyles.css';

const RadioButtonQuestion = ({ question, options, onSelect }) => {
  return (
    <Form.Group>
      <Form.Label className="font-weight-bold"> Q. {question}</Form.Label>
      <div className="options-wrapper">
        {options.map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name={question}
            value={option}
            onChange={(e) => onSelect(e.target.value)}
            className="radio-button"
          />
        ))}
      </div>
    </Form.Group>
  );
};

export default RadioButtonQuestion;
