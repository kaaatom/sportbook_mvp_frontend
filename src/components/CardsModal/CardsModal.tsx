import { FC, useState } from 'react';

import cn from 'classnames';

import { CardContainer } from '../../containers';
import { Button, NumericInput, Team } from '../';
import { Props, ListItem, convertNum } from './';
import styles from '../Card/styles.module.scss';

export const CardsModal: FC<Props> = ({
  eventInfo,
  odd,
  amount,
  setAmount,
  setModalOpen,
  setApproveModalOpen,
}: Props): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>('single');
  const [isListOpen, setListOpen] = useState<boolean>(false);

  const handleOpenApproveModal = (): void => {
    setApproveModalOpen(true);
    setModalOpen(false);
  };

  const handleOpenList = (): void => setListOpen(!isListOpen);

  return (
    <>
      <section className={styles.tabs}>
        <p
          className={cn(styles.tab, currentTab === 'parlay' && styles.active)}
          onClick={() => setCurrentTab('parlay')}
        >
          parlay
        </p>
        <p
          className={cn(styles.tab, currentTab === 'single' && styles.active)}
          onClick={() => setCurrentTab('single')}
        >
          single
        </p>
      </section>
      <section className={styles.modalContainer}>
        <CardContainer className={cn(styles.card, styles.modal)}>
          <div>
            <Button
              className={styles.close}
              type="close"
              onClick={() => setModalOpen(false)}
            >
              Close
            </Button>
            <h3 className={styles.header}>{eventInfo.league.name}</h3>
            <div className={styles.time}>
              <span>Time left</span>
              <time dateTime="PT10H10M10S">10:10:10</time>
            </div>
            <div className={styles.match}>
              <Team
                className={styles.player}
                playerInfo={eventInfo.home}
                from="home"
              />
              <span>vs</span>
              <Team
                className={styles.player}
                playerInfo={eventInfo.away}
                from="away"
              />
            </div>
            <div className={styles.wagers}>
              <p>Total bet amount</p>
              <p
                className={cn(styles.list, !isListOpen && styles.closed)}
                onClick={handleOpenList}
              >
                {isListOpen ? 'Close' : 'List of bets'}
              </p>
            </div>
            <NumericInput
              id={`card-modal-input`}
              value={amount}
              setValue={setAmount}
            />
            <section className={styles.total}>
              <p>{`Odd: ${odd}`}</p>
              <div className={styles.possible}>
                <p>
                  {`Possible win: `}
                  <span className={styles.amount}>{convertNum(amount)}</span>
                </p>
              </div>
            </section>
            <div className={styles.bets}>
              <Button
                color="green"
                type="large"
                onClick={() => amount.length > 0 && handleOpenApproveModal()}
              >
                {eventInfo.home.odd}
              </Button>
              <Button
                color="purple"
                type="large"
                onClick={() => amount.length > 0 && handleOpenApproveModal()}
              >
                {`+${eventInfo.away.odd}`}
              </Button>
            </div>
            <footer className={styles.footer}>
              <a className={styles.twitch} href={eventInfo.twitch_url}>
                Live on twitch
              </a>
              <Button type="favorite" />
            </footer>
          </div>
        </CardContainer>
        {isListOpen && (
          <section className={styles.itemList}>
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={1}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
            <ListItem
              id={10}
              address="0xD67B4379590c027228906b851Fd86A35A2E20290"
              amount="12"
              team="Team A"
              time="21:35 10/01/2022"
              rate="2.7"
            />
          </section>
        )}
      </section>
    </>
  );
};
