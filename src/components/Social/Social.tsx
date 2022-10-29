import { FC } from 'react';

import cn from 'classnames';

import { Props } from './types';
import styles from './styles.module.scss';

export const Social: FC<Props> = ({ name, link }: Props): JSX.Element => (
  <a className={cn(styles.container, styles[name])} href={link} />
);
