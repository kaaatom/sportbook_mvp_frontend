import { FC, PropsWithChildren, CSSProperties, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { toByParam } from '../../utils';
import { Props } from './';
import styles from './styles.module.scss';

export const SportsContainer: FC<PropsWithChildren<Props>> = ({
  id,
  pageName,
  name,
  image,
  events_count,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const { filter, sport, name: nameParam } = useParams();
  const isCurrent = sport === `${id}` && nameParam === undefined;
  const location = `/${pageName}/${filter}/:sport`;

  const imageStyle = {
    '--containerImage': `url("${image}")`,
  } as CSSProperties;

  const [isOpen, setOpen] = useState<boolean>(isCurrent);

  return (
    <article
      className={cn(styles.sportSelector, { [styles.open]: isOpen })}
      style={imageStyle}
    >
      <article
        onClick={() => {
          !isOpen && setOpen(true);
        }}
      >
        <Link
          to={toByParam(location, { sport: id })}
          className={cn(styles.select, styles[image], {
            [styles.active]: isCurrent,
          })}
        >
          <p className={styles.name}>{name}</p>
          <p className={styles.count}>{events_count}</p>
          <span
            className={cn(styles.arrow, { [styles.up]: isOpen })}
            onClick={() => setOpen(!isOpen)}
          />
        </Link>
      </article>
      <article>{children}</article>
    </article>
  );
};
