import { FC } from 'react';

import { CardContainer } from '../../containers';
import { Button } from '../';
import { Bets, Props, BetList, MY_BETS_DATA } from './';
import styles from './styles.module.scss';

export const MyBetsModal: FC<Props> = ({ setModalOpen }): JSX.Element => {
  const getData = () => MY_BETS_DATA;

  const data = getData();

  const getBets = (list: Bets): JSX.Element[] =>
    list.bets.map((value, index) => (
      <BetList key={`bets-${index}`} index={index + 1} list={value} />
    ));

  const handleOnClick = () => setModalOpen(false);

  return (
    <CardContainer className={styles.modal}>
      <div>
        <h3 className={styles.header}>my bets</h3>
        <article>{getBets(data)}</article>
        <div />
        <Button className={styles.close} type="close" onClick={handleOnClick}>
          Close
        </Button>
      </div>
    </CardContainer>
  );
};
