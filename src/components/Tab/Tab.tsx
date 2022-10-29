import { FC } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

import { Props } from './';
import styles from './styles.module.scss';

export const Tab: FC<Props> = ({ name, className }: Props): JSX.Element => {
  const paramName = name !== 'live' ? name.replace(' ', '') : 'onLive';
  const { filter } = useParams();
  const location = useLocation().pathname.replace(`${filter}`, `${paramName}`);

  return (
    <div
      className={cn(
        styles.tab,
        { [styles.active]: filter === paramName },
        className
      )}
    >
      <Link to={location}>
        <span>{name}</span>
      </Link>
    </div>
  );
};
