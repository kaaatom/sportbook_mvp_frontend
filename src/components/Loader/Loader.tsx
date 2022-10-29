import { FC } from 'react';

import cn from 'classnames';

import { Props } from './types';
import styles from './styles.module.scss';

export const Loader: FC<Props> = ({
  className,
  classNameWrap,
}: Props): JSX.Element => (
  <div className={cn(classNameWrap)}>
    <div className={cn(styles.loader, className)} />
  </div>
);
