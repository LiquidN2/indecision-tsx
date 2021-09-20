import React, { MouseEventHandler } from 'react';
import Option from './Option';

export interface OptionsProps {
  options: OptionsType;
  removeAll: MouseEventHandler;
  removeOption: RemoveOptionType;
}

const Options: React.FC<OptionsProps> = props => {
  const renderOptions = (options: OptionsType) => {
    return options.map((option, i) => (
      <Option
        key={i}
        count={i + 1}
        text={option}
        removeOption={props.removeOption}
      />
    ));
  };

  return (
    <div>
      <div className="widget-header">
        <h3>Your Options</h3>
        <button
          className="btn btn--link"
          onClick={props.removeAll}
          disabled={props.options.length === 0}
        >
          Remove all
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}

      {renderOptions(props.options)}
    </div>
  );
};

export default Options;
