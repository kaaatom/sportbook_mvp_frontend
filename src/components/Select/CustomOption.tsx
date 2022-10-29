import { FC } from 'react';

import { CustomOptionProps } from './types';
import { onOptionClick, onOptionMouseOver } from './events';

export const CustomOption: FC<CustomOptionProps> = ({
  index,
  value,
}: CustomOptionProps): JSX.Element => (
  <div
    role="option"
    aria-selected={index === 0}
    id={`select-${name}-option-${value.toLowerCase().split(' ').join('-')}`}
    key={index}
    data-value={value.toLowerCase().split(' ').join('-')}
    onClick={(e) => onOptionClick(e)}
    onMouseOver={(e) => onOptionMouseOver(e)}
  >
    {value}
  </div>
);
