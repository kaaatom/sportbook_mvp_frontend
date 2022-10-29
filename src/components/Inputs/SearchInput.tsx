import { FC, useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  id: string;
  placeholder: string;
  className?: string;
};

const goToElement = (id: string) => {
  const probablyAddress = document.querySelector(`[id*=${id}]`);
  probablyAddress?.scrollIntoView();
};

export const SearchInput: FC<Props> = ({ id, placeholder, className }) => {
  const [value, setValue] = useState<string>('');

  return (
    <label htmlFor={id}>
      <div className={className}>
        <input
          className={styles.search}
          id={id}
          name="search"
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          required
          onKeyDown={(e) => e.key === 'Enter' && goToElement(value)}
        />
        {/*FIXME: In the design the placeholder is used as if it was a label; this will cause*/}
        {/*assistive technologies to announce the same text twice.*/}
        {/*This is a major UX and a11y failure for which the designer is responsible.*/}
        <span>Search your event</span>
      </div>
    </label>
  );
};
