import { DOMAttributes, HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> &
  DOMAttributes<HTMLButtonElement> & {
    type: string;
    color?: string;
    onClick?: any;
    id?: string;
    image?: string;
    className?: string;
  };
