import { FC, useEffect, useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { EventInfo } from '../../types';
import { Matches } from '../../containers';
import { Loader, SearchMatchInput, Tab } from '../../components';
import { TAB_NAMES } from './';
import styles from './styles.module.scss';

export const Home: FC = () => {
  const { filter } = useParams();
  const [isLoad, setLoad] = useState<boolean>(false);
  const [data, setData] = useState<EventInfo[]>([]);
  const tabs: JSX.Element[] = [];

  TAB_NAMES.forEach((value, index) =>
    tabs.push(
      <li key={`tab-li-${index}`}>
        <Tab name={value} />
      </li>
    )
  );

  const getData = (): void => {
    setLoad(true);
    const eventFilter = filter
      ? `?sort=${filter === 'onLive' ? 'live' : filter}`
      : '';
    console.log(eventFilter);
    fetch(`https://sportbook2.herokuapp.com/events${eventFilter}`)
      .then((response) => response.json())
      .then((resultData) => {
        setData(resultData.results as EventInfo[]);
      })
      .catch((e) => {
        return e;
      });
    setLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return typeof filter == 'undefined' ? (
    <Navigate to="onLive" />
  ) : (
    <article className={styles.content}>
      <div className={styles.top}>
        <ul className={styles.tabs}>{tabs}</ul>
        {!isLoad && data.length > 0 && (
          <div className={styles.form}>
            <SearchMatchInput
              id="match-search"
              placeholder="Search your event"
              matchList={data}
            />
          </div>
        )}
      </div>
      {isLoad ? (
        <Loader />
      ) : (
        <Matches matchList={data} className={styles.matches} />
      )}
    </article>
  );
};
