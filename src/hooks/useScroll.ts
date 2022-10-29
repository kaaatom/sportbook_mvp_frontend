import { useEffect } from 'react';

type Params = {
  id: string;
  callback: () => void;
};

export const useScroll = ({ id, callback }: Params, deps: any[] = []) => {
  useEffect(() => {
    const el = document.getElementById(id);
    el?.addEventListener('scroll', callback);

    return () => el?.removeEventListener('scroll', callback);
  }, [callback, ...deps]);
};
