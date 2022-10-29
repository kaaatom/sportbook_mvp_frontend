import { FC } from 'react';

import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { Card } from '../../components';
import { Props } from './';
import styles from './styles.module.scss';

SwiperCore.use([Navigation]);

export const Matches: FC<Props> = ({
  matchList,
  className,
}: Props): JSX.Element => {
  const getCards = (list: any[]) =>
    list.map((value, index) => (
      <SwiperSlide key={`match${index}`}>
        <Card key={`card${index}`} eventInfo={value} />
      </SwiperSlide>
    ));

  return matchList.length > 0 ? (
    <div className={cn(styles.container, className)}>
      <div id="prevArrow" className={styles.prev} />
      <Swiper
        className={styles.content}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: '#nextArrow',
          prevEl: '#prevArrow',
        }}
        loop={true}
      >
        {getCards(matchList)}
      </Swiper>
      <div id="nextArrow" className={styles.next} />
    </div>
  ) : (
    <div />
  );
};
