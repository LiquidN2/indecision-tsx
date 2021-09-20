import React from 'react';

interface OptionProps {
  count: number;
  text: string;
  removeOption: RemoveOptionType;
}

const Option: React.FC<OptionProps> = props => {
  const removeOption = () => props.removeOption(props.text);
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.text}
      </p>
      <button className="btn btn--link" onClick={removeOption}>
        Delete
      </button>
    </div>
  );
};

export default Option;
