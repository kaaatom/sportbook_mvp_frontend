import { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import { Props } from './';
import styles from './styles.module.scss';

export const Button: FC<PropsWithChildren<Props>> = ({
  type,
  color = '',
  id,
  onClick,
  image = '',
  className,
  children,
}: Props): JSX.Element => (
  <button
    id={id}
    type="button"
    className={cn(styles[color], styles[type], styles[image], type, className)}
    onClick={onClick}
  >
    {children}
  </button>
);
