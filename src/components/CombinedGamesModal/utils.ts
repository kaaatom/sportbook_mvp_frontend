import { EventInfo } from '../../types';

export const checkForDoubling = (
  currentData: EventInfo[],
  newData: EventInfo
) => currentData.some((value) => value.id === newData.id);

export const convertNum = (num: number): string =>
  ` $ ${String(num).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`;
