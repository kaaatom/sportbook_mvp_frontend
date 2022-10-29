import { FC } from 'react';

import { SportsContainer } from '../../containers';
import { SportsContainersProps, SportsItems } from './';

export const SportsContainers: FC<SportsContainersProps> = ({
  items,
}: SportsContainersProps): JSX.Element => (
  <>
    {items.map((value) => (
      <SportsContainer
        key={`container-${value.name}`}
        id={value.id}
        pageName="sports"
        name={value.name}
        image={value.image}
        events_count={value.events_count}
      >
        <SportsItems items={value.leagues} />
      </SportsContainer>
    ))}
  </>
);
