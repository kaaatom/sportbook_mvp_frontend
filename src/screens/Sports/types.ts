import { Props as SportsContainerProps } from '../../containers/SportsContainer';
import { Props as SportsItemProps } from '../../components/SportItem';

export type SportsContainerExtendedProps = SportsContainerProps & {
  leagues: SportsItemProps[];
};

export type SportsContainersProps = {
  items: SportsContainerExtendedProps[];
};

export type SportsItemsProps = {
  items: SportsItemProps[];
};
