import { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import { Props } from './';
import styles from './styles.module.scss';

export const CardContainer: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}: PropsWithChildren<Props>): JSX.Element => (
  <article className={cn(styles.card, className)}>{children}</article>
);
