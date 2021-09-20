import React, { KeyboardEvent, MouseEvent } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export interface OptionModalProps {
  pickedOption: PickedOptionType;
  clearPickedOption: (event?: MouseEvent | KeyboardEvent) => void;
}

const OptionModal: React.FC<OptionModalProps> = props => (
  <Modal
    isOpen={!!props.pickedOption}
    onRequestClose={props.clearPickedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>

    {props.pickedOption && <p className="modal__body">{props.pickedOption}</p>}

    <button className="btn" onClick={() => props.clearPickedOption()}>
      Close
    </button>
  </Modal>
);

export default OptionModal;
