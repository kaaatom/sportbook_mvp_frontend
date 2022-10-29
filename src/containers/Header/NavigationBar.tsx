import { FC } from 'react';

import { HeaderLink } from './HeaderLink';
import styles from './styles.module.scss';

export const NavigationBar: FC = (): JSX.Element => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      <li className={styles.element}>
        <HeaderLink className={styles.home} link="home" aria_current="page">
          Home
        </HeaderLink>
      </li>
      <li className={styles.element}>
        <HeaderLink className={styles.sports} link="sports">
          Sports
        </HeaderLink>
      </li>
      <li className={styles.element}>
        <HeaderLink className={styles.live} link="live">
          Live
        </HeaderLink>
      </li>
      <li className={styles.element}>
        <HeaderLink className={styles.favorite} link="favorite">
          Favorite
        </HeaderLink>
      </li>
      <li className={styles.element}>
        <HeaderLink className={styles.leaderboard} link="leaderboard">
          Leaderboard
        </HeaderLink>
      </li>
      <li className={styles.element}>
        <HeaderLink className={styles.staking} link="staking">
          Staking
        </HeaderLink>
      </li>
      <li className={styles.element}>
        <HeaderLink className={styles.pools} link="pools">
          Pools
        </HeaderLink>
      </li>
      <li className={styles.element}>
        <HeaderLink className={styles.info} link="info">
          Info
        </HeaderLink>
      </li>
    </ul>
  </nav>
);
