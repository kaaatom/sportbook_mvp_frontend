import { FC, CSSProperties } from 'react';

import cn from 'classnames';

import { Props, transformName } from './';
import styles from './styles.module.scss';

export const Team: FC<Props> = ({
  playerInfo,
  from,
  size = 'normal',
  className,
}: Props): JSX.Element => {
  const odds = { '--player-odds': `${playerInfo.percent}%` } as CSSProperties;

  return (
    <section
      className={cn(styles.player, styles[from], styles[size], className)}
    >
      <p className={styles.name}>{transformName(playerInfo.name)}</p>
      <div className={styles.oddsAndLogo} style={odds}>
        <img className={styles.logo} src={playerInfo.image} alt="team logo" />
        <p>{`${playerInfo.percent}%`}</p>
      </div>
    </section>
  );
};
