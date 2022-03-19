import React from 'react';

import { OPERATION } from '../constants/buttonTypes';

const resolveClassName = (type) => `gridButton ${type === OPERATION ? 'gridButtonOperation' : 'gridButtonInput'}`;

const Button = ({type, character, action}) => (
  <div
    className={resolveClassName(type)}
    onClick={action}
  >
    {character}
  </div>
);

export default Button;