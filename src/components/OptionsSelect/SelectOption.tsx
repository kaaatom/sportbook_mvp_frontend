import { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
  onSelect: any;
  className?: string;
};

export const SelectOption: FC<PropsWithChildren<Props>> = ({
  onSelect,
  className,
  children,
}) => (
  <p className={cn(styles.option, className)} onClick={() => onSelect()}>
    {children}
  </p>
);
