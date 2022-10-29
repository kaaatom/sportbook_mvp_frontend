import { CSSProperties, FC, PropsWithChildren } from 'react';

import { Loader } from '../';

export enum PreloaderColors {
  primary = 'primary',
  secondary = 'secondary',
}

export enum PreloaderSizes {
  small = 'small',
  normal = 'normal',
  big = 'big',
}

export type Props = PropsWithChildren<{
  isLoading: boolean;
  className?: string;
  classNameDot?: string;
  color?: keyof typeof PreloaderColors;
  size?: keyof typeof PreloaderSizes;
  style?: CSSProperties;
}>;

export type PreloaderContentProps = Omit<Props, 'isLoading' | 'children'>;

export const Preloader: FC<Props> = ({ isLoading, className, children }) => {
  if (isLoading) {
    return (
      <div className={className}>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};
