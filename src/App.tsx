import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';

const App = () => {
  const [options, setOptions] = useState<OptionsType>([]);
  const [pickedOption, setPickedOption] = useState<PickedOptionType>(null);

  useEffect(() => {
    const optionsString = localStorage.getItem('options');
    if (!optionsString) return;
    setOptions(JSON.parse(optionsString));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('options', JSON.stringify(options));
  });

  const removeAll = () => setOptions([]);

  const removeOption = (option: string) => {
    // const updatedOptions = options.filter(o => o !== option);
    const index = options.indexOf(option);
    if (index === -1) return;
    options.copyWithin(index, index + 1);
    --options.length;
    setOptions([...options]);
  };

  const addOption = (option: string | null) => {
    if (!option) return 'Enter valid input to add';
    if (options.indexOf(option) > -1) return 'This option already exists';
    setOptions([...options, option]);
    window.localStorage.setItem('options', JSON.stringify(options));
  };

  const pickOption = () => {
    const index = Math.floor(Math.random() * options.length);
    setPickedOption(options[index]);
  };

  const clearPickedOption = () => setPickedOption(null);

  return (
    <div>
      <Header
        title="Indecision App"
        subtitle="Put your life in the hands of a computer"
      />

      <div className="container">
        <Action
          hasOptions={options.length > 0}
          pickOption={pickOption}
          pickedOption={pickedOption}
        />

        <div className="widget">
          <Options
            options={options}
            removeAll={removeAll}
            removeOption={removeOption}
          />

          <AddOption addOption={addOption} />
        </div>

        <OptionModal
          pickedOption={pickedOption}
          clearPickedOption={clearPickedOption}
        />
      </div>
    </div>
  );
};

export default App;
