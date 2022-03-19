import { useState } from 'react';

import { INPUT, OPERATION } from './constants/buttonTypes';
import Button from './components/button';

import './App.css';

function App() {
  const [equationInput, setEquationInput] = useState('');
  const [lastInput, setLastInput] = useState('0');
  const [lastOperation, setLastOperation] = useState('');

  const commaEquationInput = () => equationInput.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const concatEquationInput = (character) => setEquationInput(equationInput.concat(character));
  const deleteLastEquationInput = () => setEquationInput(equationInput.substr(0, equationInput.length - 1));

  const onCEClick = () => {
    setEquationInput('');
  }

  const onCClick = () => {
    setEquationInput('');
    setLastInput('0');
    setLastOperation('');
  }

  const onEqualsClick = () => {
    const total = eval(`${lastInput}${lastOperation}${equationInput}`).toString();
    setLastInput(equationInput);
    setEquationInput(total);
  };

  const onMultiplyClick = () => {
    setLastOperation('*');
    setLastInput(equationInput);
    setEquationInput('');
  }

  const onSubtractClick = () => {
    setLastOperation('-');
    setLastInput(equationInput);
    setEquationInput('');
  }

  const onAddClick = () => {
    setLastOperation('+');
    setLastInput(equationInput);
    setEquationInput('');
  };

  const onPlusMinusClick = () => {
    setEquationInput(`${parseInt(equationInput) * -1}`);
  }

  return (
    <div className="calculator">
      <div className="equationInputContainer">
        <span className="currentEquationInput">
          {commaEquationInput() || `${lastInput}` || '0'}
        </span>
      </div>
      <div className="buttonsGridContainer">
        <Button
          type={OPERATION}
          character={'%'}
          action={() => {}}
        />
        <Button
          type={OPERATION}
          character={'CE'}
          action={() => onCEClick()}
        />
        <Button
          type={OPERATION}
          character={'C'}
          action={() => onCClick()}
        />
        <Button
          type={OPERATION}
          character={'del'}
          action={() => deleteLastEquationInput()}
        />
        <Button
          type={INPUT}
          character={'7'}
          action={() => concatEquationInput('7')}
        />
        <Button
          type={INPUT}
          character={'8'}
          action={() => concatEquationInput('8')}
        />
        <Button
          type={INPUT}
          character={'9'}
          action={() => concatEquationInput('9')}
        />
        <Button
          type={OPERATION}
          character={'X'}
          action={() => onMultiplyClick()}
        />
        <Button
          type={INPUT}
          character={'4'}
          action={() => concatEquationInput('4')}
        />
        <Button
          type={INPUT}
          character={'5'}
          action={() => concatEquationInput('5')}
        />
        <Button
          type={INPUT}
          character={'6'}
          action={() => concatEquationInput('6')}
        />
        <Button
          type={OPERATION}
          character={'-'}
          action={() => onSubtractClick()}
        />
        <Button
          type={INPUT}
          character={'1'}
          action={() => concatEquationInput('1')}
        />
        <Button
          type={INPUT}
          character={'2'}
          action={() => concatEquationInput('2')}
        />
        <Button
          type={INPUT}
          character={'3'}
          action={() => concatEquationInput('3')}
        />
        <Button
          type={OPERATION}
          character={'+'}
          action={() => onAddClick()}
        />
        <Button
          type={INPUT}
          character={'+/-'}
          action={() => onPlusMinusClick()}
        />
        <Button
          type={INPUT}
          character={'0'}
          action={() => concatEquationInput('0')}
        />
        <Button
          type={INPUT}
          character={'.'}
          action={() => {}}
        />
        <Button
          type={OPERATION}
          character={'='}
          action={() => onEqualsClick()}
        />
      </div>
    </div>
  );
}

export default App;
