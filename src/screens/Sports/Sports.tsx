import { FC, useState, useEffect } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { EventInfo } from '../../types';
import { Tab, Card, Loader, SearchMatchInput } from '../../components';
import { SportsContainerExtendedProps, SportsContainers } from './';
import styles from './styles.module.scss';

export const Sports: FC = (): JSX.Element => {
  const filter = {
    tab: useParams().filter,
    sport: useParams().sport,
    name: useParams().name,
  };
  const [sports, setSports] = useState<SportsContainerExtendedProps[]>([]);
  const [events, setEvents] = useState<EventInfo[]>([]);
  const [loadingSelectorData, setLoadingSelectorData] =
    useState<boolean>(false);
  const [loadingEventData, setLoadingEventData] = useState<boolean>(false);

  const getSelectorData = async () => {
    setLoadingSelectorData(true);
    await fetch('https://sportbook2.herokuapp.com/sport/all')
      .then((data) => data.json())
      .then((resultData) => setSports(resultData.results))
      .catch((e) => {
        console.log(e);
        return e;
      });
    setLoadingSelectorData(false);
  };

  const getEventData = async () => {
    setLoadingEventData(true);
    const link = filter.name
      ? `https://sportbook2.herokuapp.com/events?sport=${filter.sport}&league=${filter.name}`
      : `https://sportbook2.herokuapp.com/events?sport=${filter.sport}`;
    await fetch(link)
      .then((data) => data.json())
      .then((resultData) => setEvents(resultData.results))
      .catch((e) => {
        console.log(e);
        return e;
      });
    setLoadingEventData(false);
  };

  const getEvents = () =>
    events.map((value) => (
      <Card key={`event-card-${value.id}`} size="small" eventInfo={value} />
    ));

  useEffect(() => {
    getSelectorData();
  }, []);

  useEffect(() => {
    getEventData();
  }, [filter.sport, filter.name]);

  return filter.tab ? (
    <section className={styles.content}>
      <article className={styles.top}>
        <ul className={styles.tabs}>
          <li>
            <Tab name="live" />
          </li>
          <li>
            <Tab name="top Bets" />
          </li>
          <li>
            <Tab name="top Coefficients" />
          </li>
        </ul>
        {events.length > 0 && (
          <section>
            <form className={styles.form}>
              <SearchMatchInput
                id="sports-search"
                placeholder="Search your event"
                matchList={events}
              />
            </form>
            <p className={styles.allSports}>all sports</p>
          </section>
        )}
      </article>
      <article className={styles.matches}>
        {loadingSelectorData ? (
          <section className={styles.selectorLoaderWrapper}>
            <Loader />
          </section>
        ) : (
          <article className={styles.selector}>
            <SportsContainers items={sports} />
          </article>
        )}
        {loadingEventData ? (
          <article className={styles.matchesLoaderWrapper}>
            <Loader />
          </article>
        ) : events.length ? (
          <article className={styles.matchList}>{getEvents()}</article>
        ) : (
          <p className={styles.matchesLoaderWrapper}>No data</p>
        )}
      </article>
    </section>
  ) : (
    <Navigate to="onLive" />
  );
};
