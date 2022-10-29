import { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
  id: string;
  value: string;
  setValue: any;
  className?: string;
};

export const NumericInput: FC<PropsWithChildren<Props>> = ({
  id,
  value,
  setValue,
  className,
  children,
}) => {
  const checkInput = (input: string) =>
    input.replace(/[a-z]/, '').replace(/\s/, '');

  return (
    <label htmlFor={id}>
      {children}
      <div>
        <input
          id={id}
          className={cn(styles.numeric, className)}
          name="stake"
          type="number"
          inputMode="numeric"
          min="1"
          step="1"
          pattern="^[1-9][0-9]*$"
          required
          title="Enter a positive integer"
          value={value}
          onChange={(e) => setValue(checkInput(e.target.value))}
        />
        <span>Bets</span>
      </div>
    </label>
  );
};
