import React, { useState } from 'react';

export interface AddOptionProps {
  addOption: AddOptionType;
}

const AddOption: React.FC<AddOptionProps> = props => {
  const [error, setError] = useState<string | null>(null);
  const [option, setOption] = useState<string>('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setOption(event.currentTarget.value);
  };

  const handleAddOption = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = props.addOption(option);
    if (error) return setError(error);
    setError(null);
    setOption('');
  };

  return (
    <div>
      {error && <p className="add-option-error">{error}</p>}
      <form className="add-option" onSubmit={handleAddOption}>
        <input
          className="add-option__input"
          type="text"
          name="option"
          value={option}
          onChange={handleInputChange}
        />
        <button className="btn">Add option</button>
      </form>
    </div>
  );
};

export default AddOption;
