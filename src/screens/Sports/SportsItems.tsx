import { FC } from 'react';

import { SportItem } from '../../components';
import { SportsItemsProps } from './';

export const SportsItems: FC<SportsItemsProps> = ({
  items,
}: SportsItemsProps): JSX.Element => (
  <>
    {items.map((value) => (
      <SportItem
        key={`item-${value.name}`}
        id={value.id}
        pageName="sports"
        name={value.name}
        image={value.image}
        events_count={value.events_count}
      />
    ))}
  </>
);
