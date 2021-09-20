import React, { MouseEventHandler } from 'react';

export interface ActionProps {
  hasOptions: boolean;
  pickOption: MouseEventHandler;
  pickedOption: PickedOptionType;
}

const Action: React.FC<ActionProps> = props => (
  <div className="action">
    <button
      className="btn btn--lg btn--full"
      onClick={props.pickOption}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
    {/*{props.pickedOption && <p>{props.pickedOption}</p>}*/}
  </div>
);

export default Action;
