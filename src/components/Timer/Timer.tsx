import { FC, useEffect } from 'react';

import { useTimer } from 'react-timer-hook';
import cn from 'classnames';

import { Props, formatTime } from './';
import styles from './styles.module.scss';

export const Timer: FC<Props> = ({
  time,
  classNameTime,
  classNameNum,
  classNameColon,
}: Props): JSX.Element => {
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: true,
    onExpire: () => console.warn('onExpire called'),
  });

  useEffect(() => {
    const tickTime = new Date().setSeconds(new Date().getSeconds() + time);
    restart(new Date(tickTime), true);
  }, []);

  return (
    <div className={cn(styles.time, classNameTime)}>
      <p>Time left</p>
      <section>
        <div className={cn(styles.num, classNameNum)}>{formatTime(hours)}</div>

        <div className={cn(styles.colon, classNameColon)}>:</div>

        <div className={cn(styles.num, classNameNum)}>
          {formatTime(minutes)}
        </div>

        <div className={cn(styles.colon, classNameColon)}>:</div>

        <div className={cn(styles.num, classNameNum)}>
          {formatTime(seconds)}
        </div>
      </section>
    </div>
  );
};
