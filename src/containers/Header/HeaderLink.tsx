import { FC, PropsWithChildren } from 'react';

import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { HeaderLinkProps } from './types';
import styles from './styles.module.scss';

export const HeaderLink: FC<PropsWithChildren<HeaderLinkProps>> = ({
  className,
  link,
  aria_current,
  children,
}: PropsWithChildren<HeaderLinkProps>): JSX.Element => (
  <NavLink
    className={({ isActive }) =>
      cn(styles.link, isActive && styles.active, className)
    }
    to={link}
    aria-current={aria_current}
  >
    {children}
  </NavLink>
);
