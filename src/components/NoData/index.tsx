import { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export type Props = PropsWithChildren<{
  title: string;
  length: number;
  className?: string;
}>;

export type NoDataBannerProps = Omit<Props, 'length' | 'children'>;

export const NoDataBanner: FC<NoDataBannerProps> = ({ title, className }) => (
  <div className={cn(styles.banner, className)}>
    <p className={styles.title}>{title}</p>
  </div>
);

export const NoData: FC<Props> = ({ title, length, className, children }) => {
  if (!length) {
    return <NoDataBanner className={className} title={title} />;
  }

  return <>{children}</>;
};
