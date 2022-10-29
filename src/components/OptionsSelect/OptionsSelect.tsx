import { FC, CSSProperties, useState } from 'react';

import cn from 'classnames';

import { Props, SelectOption } from './';
import arrow from '../../assets/icons/arrow.svg';
import styles from './styles.module.scss';

export const OptionsSelect: FC<Props> = ({
  label,
  startIndex,
  options,
  onSelect,
  className,
}: Props): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<number>(
    startIndex < options.length ? startIndex : 0
  );

  const handleSelect = (index: number): void => {
    setCurrentOption(index);
    onSelect();
    setOpen(false);
  };

  const optionsLi: JSX.Element[] = [];

  options.forEach((value, index) =>
    optionsLi.push(
      <li key={`${label}-option-${index}`}>
        <SelectOption
          className={cn({ [styles.selected]: index === currentOption })}
          onSelect={() => handleSelect(index)}
        >
          {value}
        </SelectOption>
      </li>
    )
  );

  const height = {
    height: `${24 * options.length + 10 * (options.length - 1)}px`,
    padding: '16px 18px',
    border: '1px solid #743EE8',
    'border-top': 0,
  } as CSSProperties;

  return (
    <article className={cn(styles.container, className)}>
      <section className={styles.current} onClick={() => setOpen(!isOpen)}>
        <div>
          <p className={styles.label}>{label}</p>
          <p className={styles.currentName}>{options[currentOption]}</p>
        </div>
        <button className={cn(styles.arrow, { [styles.open]: isOpen })}>
          <img src={arrow} alt="arrow" onClick={() => setOpen(!isOpen)} />
        </button>
      </section>
      <ul className={styles.optionsList} style={isOpen ? height : undefined}>
        {optionsLi}
      </ul>
    </article>
  );
};
