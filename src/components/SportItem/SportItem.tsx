import { FC, CSSProperties } from 'react';

import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { toByParam } from '../../utils';
import { Props } from './';
import styles from './styles.module.scss';

export const SportItem: FC<Props> = ({
  id,
  pageName,
  name,
  image,
  events_count,
  className,
}: Props): JSX.Element => {
  const { filter, name: nameParam, sport } = useParams();

  const location = `/${pageName}/${filter}/${sport}/:name`;

  const imageStyle = {
    '--itemImage': `url("${image}")`,
  } as CSSProperties;

  return (
    <Link
      to={toByParam(location, { name: id })}
      className={cn(
        styles.item,
        { [styles.active]: nameParam === String(id) },
        className
      )}
      style={imageStyle}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles.count}>{events_count}</p>
    </Link>
  );
};
