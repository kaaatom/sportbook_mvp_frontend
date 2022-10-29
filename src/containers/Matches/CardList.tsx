import { FC } from 'react';

import { SwiperSlide } from 'swiper/react';

import { Card } from '../../components';
import { CardListProps } from './';

export const CardList: FC<CardListProps> = ({
  matchList,
}: CardListProps): JSX.Element => (
  <>
    {matchList.map((value, index) => (
      <SwiperSlide key={`match${index}`}>
        <Card key={`card${index}`} eventInfo={value} />
      </SwiperSlide>
    ))}
  </>
);
