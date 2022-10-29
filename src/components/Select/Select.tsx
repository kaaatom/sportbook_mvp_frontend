import { FC } from 'react';

import {
  Props,
  CustomOption,
  onLabelMouseDown,
  onLabelMouseUp,
  onComboboxKeyDown,
  onComboboxMouseDown,
  onListboxMouseLeave,
} from './';
import './styles.scss';

export const Select: FC<Props> = ({
  text,
  name,
  options,
  native,
}: Props): JSX.Element => {
  const nativeOptions: JSX.Element[] = [];
  const customOptions: JSX.Element[] = [];

  options.forEach((value, index) =>
    nativeOptions.push(
      <option key={index} value={value.toLowerCase().split(' ').join('-')}>
        {value}
      </option>
    )
  );

  options.forEach((value, index) =>
    customOptions.push(<CustomOption index={index} value={value} />)
  );

  return native ? (
    <label>
      {text}
      <br />
      <div>
        <select name={name} data-keepnative={true}>
          {nativeOptions}
        </select>
      </div>
    </label>
  ) : (
    <div className="select">
      <label
        id={`select-${name}-label`}
        onMouseDown={(e) => onLabelMouseDown(e)}
        onMouseUp={(e) => onLabelMouseUp(e)}
      >
        {text}
        <br />
      </label>
      <input
        type="hidden"
        name={name}
        value={options[0].toLowerCase().split(' ').join('-')}
      />
      <div>
        <div
          role="combobox"
          id={`select-${name}-combobox`}
          aria-labelledby={`select-${name}-label`}
          aria-expanded={false}
          aria-controls={`select-${name}-listbox`}
          tabIndex={0}
          onMouseDown={(e) => onComboboxMouseDown(e)}
          onKeyDown={(e) => onComboboxKeyDown(e)}
        >
          {options[0]}
        </div>
        <div
          role="listbox"
          id={`select-${name}-listbox`}
          aria-labelledby={`select-${name}-label`}
          tabIndex={-1}
          onMouseLeave={(e) => onListboxMouseLeave(e)}
        >
          {customOptions}
        </div>
      </div>
    </div>
  );
};
