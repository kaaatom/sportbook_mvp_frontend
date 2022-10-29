import { FC, useState, useMemo } from 'react';

import cn from 'classnames';

import { ContentTable } from '../../components';
import {
  DATA_GOALS,
  DATA_INTRODUCTION,
  DATA_FUTURE_PLANS,
  DATA_NFT_SALE,
  DATA_SACRIFICE,
  DATA_MVP_BETTING,
  DATA_EXPANSION,
  DATA_BETS_TOKEN,
  DATA_DISTRIBUTION,
  DATA_NFT_MULTIPLIERS,
  DATA_VOLUME_BONUS,
  DATA_FUNCTIONALITY,
  DATA_BET_STRUCTURE,
  DATA_PRIZE_POOL,
  DATA_TOKENOMICS,
  DATA_ALLOCATION,
  DATA_TOKENOMICS_EXPANSION,
  DATA_INFLATION,
} from './data';
import styles from './styles.module.scss';

export const Info: FC = () => {
  const tabs = [
    'Introduction',
    'Goals',
    'Future plans',
    'Distribution',
    'Functionality',
    'Tokenomics',
  ];
  const [activeTab, setActiveTab] = useState<number>(-1);

  const isCurrent = (id: number) => id === activeTab;

  const tableOneColumns = useMemo(() => DATA_NFT_MULTIPLIERS.table.columns, []);
  const tableOneData = useMemo(() => DATA_NFT_MULTIPLIERS.table.data, []);

  return (
    <section className={styles.content}>
      <ul className={styles.tabs}>
        <li>
          <div
            className={cn(styles.tab, isCurrent(0) && styles.active)}
            onClick={() => setActiveTab(0)}
          >
            <a href="#introduction">
              <span>{tabs[0]}</span>
            </a>
          </div>
        </li>
        <li>
          <div
            className={cn(styles.tab, isCurrent(1) && styles.active)}
            onClick={() => setActiveTab(1)}
          >
            <a href="#goals">
              <span>{tabs[1]}</span>
            </a>
          </div>
        </li>
        <li>
          <div
            className={cn(styles.tab, isCurrent(2) && styles.active)}
            onClick={() => setActiveTab(2)}
          >
            <a href="#futurePlans">
              <span>{tabs[2]}</span>
            </a>
          </div>
        </li>
        <li className={styles.break} />
        <li>
          <div
            className={cn(styles.tab, isCurrent(3) && styles.active)}
            onClick={() => setActiveTab(3)}
          >
            <a href="#distribution">
              <span>{tabs[3]}</span>
            </a>
          </div>
        </li>
        <li>
          <div
            className={cn(styles.tab, isCurrent(4) && styles.active)}
            onClick={() => setActiveTab(4)}
          >
            <a href="#functionality">
              <span>{tabs[4]}</span>
            </a>
          </div>
        </li>
        <li>
          <div
            className={cn(styles.tab, isCurrent(5) && styles.active)}
            onClick={() => setActiveTab(5)}
          >
            <a href="#tokenomics">
              <span>{tabs[5]}</span>
            </a>
          </div>
        </li>
      </ul>
      <article className={styles.textContainer}>
        <article id="dragonEnergy">
          <h2 className={styles.titleOne}>Dragon Energy</h2>
          <section id="introduction">
            <h3 className={styles.titleTwo}>{DATA_INTRODUCTION.title}</h3>
            <p className={styles.text}>
              {DATA_INTRODUCTION.textOne}
              <span className={styles.bold}>
                {DATA_INTRODUCTION.dedicatedWords}
              </span>
              {DATA_INTRODUCTION.textTwo}
              <span>{DATA_INTRODUCTION.dedicatedWords}</span>
              {DATA_INTRODUCTION.textThree}
              <span>{DATA_INTRODUCTION.dedicatedWords}</span>
              {DATA_INTRODUCTION.textFour}
            </p>
            <p className={styles.text}>{DATA_INTRODUCTION.mainIdea}</p>
            <p className={styles.text}>{DATA_INTRODUCTION.textFive}</p>
          </section>
          <section id="goals">
            <h3 className={styles.titleTwo}>{DATA_GOALS.title}</h3>
            <p className={styles.text}>{DATA_GOALS.textOne}</p>
            <p className={styles.text}>{DATA_GOALS.textTwo}</p>
            <p className={styles.text}>{DATA_GOALS.textThree}</p>
          </section>
          <section id="futurePlans">
            <h3 className={styles.titleTwo}>{DATA_FUTURE_PLANS.title}</h3>
            <p className={styles.text}>{DATA_GOALS.textOne}</p>
            <section id="NFTsale">
              <h4 className={styles.titleThree}>{DATA_NFT_SALE.title}</h4>
              <p className={styles.text}>{DATA_NFT_SALE.textOne}</p>
            </section>
            <section id="sacrifice">
              <h4 className={styles.titleThree}>{DATA_SACRIFICE.title}</h4>
              <p className={styles.text}>{DATA_SACRIFICE.textOne}</p>
              <p className={styles.text}>{DATA_SACRIFICE.textTwo}</p>
            </section>
            <section id="MVPbetting">
              <h4 className={styles.titleThree}>{DATA_MVP_BETTING.title}</h4>
              <p className={styles.text}>{DATA_MVP_BETTING.textOne}</p>
            </section>
            <section id="expansion">
              <h4 className={styles.titleThree}>{DATA_EXPANSION.title}</h4>
              <p className={styles.text}>{DATA_EXPANSION.textOne}</p>
            </section>
          </section>
        </article>
        <article id="BETStoken">
          <h2 className={styles.titleOne}>{DATA_BETS_TOKEN.title}</h2>
          <p className={styles.text}>{DATA_BETS_TOKEN.textOne}</p>
          <section id="distribution">
            <h3 className={styles.titleTwo}>{DATA_DISTRIBUTION.title}</h3>
            <p className={styles.text}>{DATA_DISTRIBUTION.textOne}</p>
            <p className={styles.text}>
              {DATA_DISTRIBUTION.textTwo}
              {DATA_DISTRIBUTION.dedicatedWordsOne}
              {DATA_DISTRIBUTION.textThree}
              {DATA_DISTRIBUTION.dedicatedWordsTwo}
              {DATA_DISTRIBUTION.textFour}
            </p>
            <p className={styles.text}>{DATA_DISTRIBUTION.textFive}</p>
            <section id="NFTmultipliers">
              <h4 className={styles.titleThree}>
                {DATA_NFT_MULTIPLIERS.title}
              </h4>
              <p className={styles.text}>{DATA_NFT_MULTIPLIERS.textOne}</p>
              <p className={styles.text}>{DATA_NFT_MULTIPLIERS.textTwo}</p>
              <section className={cn(styles.tables, styles.noOverflow)}>
                <ContentTable columns={tableOneColumns} data={tableOneData} />
              </section>
              <p className={styles.text}>{DATA_NFT_MULTIPLIERS.textThree}</p>
              <p className={styles.text}>{DATA_NFT_MULTIPLIERS.textFour}</p>
              <p className={styles.text}>{DATA_NFT_MULTIPLIERS.textFive}</p>
            </section>
            <section id="volumeBonus">
              <h4 className={styles.titleThree}>{DATA_VOLUME_BONUS.title}</h4>
              <p className={styles.text}>
                {DATA_VOLUME_BONUS.textOne}
                {DATA_VOLUME_BONUS.dedicatedSymbolOne}
                {DATA_VOLUME_BONUS.textTwo}
                {DATA_VOLUME_BONUS.dedicatedSymbolTwo}
                {DATA_VOLUME_BONUS.textThree}
                {DATA_VOLUME_BONUS.dedicatedSymbolTwo}
                {DATA_VOLUME_BONUS.textFour}
              </p>
              <p className={styles.formula}>{DATA_VOLUME_BONUS.formula}</p>
              <p className={styles.text}>{DATA_VOLUME_BONUS.textFive}</p>
              <section className={cn(styles.tables, styles.noOverflow)}>
                <ContentTable
                  columns={DATA_VOLUME_BONUS.table.columns}
                  data={DATA_VOLUME_BONUS.table.data}
                />
              </section>
              <p className={styles.text}>{DATA_VOLUME_BONUS.textSix}</p>
            </section>
          </section>
          <section id="functionality">
            <h3 className={styles.titleTwo}>{DATA_FUNCTIONALITY.title}</h3>
            <p className={styles.text}>{DATA_FUNCTIONALITY.textOne}</p>
            <section id="betStructure">
              <h4 className={styles.titleThree}>{DATA_BET_STRUCTURE.title}</h4>
              <p className={styles.text}>{DATA_BET_STRUCTURE.textOne}</p>
            </section>
            <section id="prizePool">
              <h4 className={styles.titleThree}>{DATA_PRIZE_POOL.title}</h4>
              <p className={styles.text}>{DATA_PRIZE_POOL.textOne}</p>
              <p className={styles.text}>{DATA_PRIZE_POOL.textTwo}</p>
            </section>
          </section>
          <section id="tokenomics">
            <h3 className={styles.titleTwo}>{DATA_TOKENOMICS.title}</h3>
            <p className={styles.text}>{DATA_TOKENOMICS.textOne}</p>
            <section id="allocation">
              <h4 className={styles.titleThree}>{DATA_ALLOCATION.title}</h4>
              <p className={styles.text}>{DATA_ALLOCATION.textOne}</p>
              <section className={cn(styles.tables, styles.overflow)}>
                <ContentTable
                  columns={DATA_ALLOCATION.table.columns}
                  data={DATA_ALLOCATION.table.data}
                />
              </section>
              <p className={styles.text}>{DATA_ALLOCATION.textTwo}</p>
            </section>
            <section id="tokenomicsExpansion">
              <h4 className={styles.titleThree}>
                {DATA_TOKENOMICS_EXPANSION.title}
              </h4>
              <p className={styles.text}>{DATA_TOKENOMICS_EXPANSION.textOne}</p>
              <section className={cn(styles.tables, styles.overflow)}>
                <ContentTable
                  columns={DATA_TOKENOMICS_EXPANSION.tableOne.columns}
                  data={DATA_TOKENOMICS_EXPANSION.tableOne.data}
                />
              </section>
              <p className={styles.text}>{DATA_TOKENOMICS_EXPANSION.textTwo}</p>
              <p className={styles.text}>
                {DATA_TOKENOMICS_EXPANSION.textThree}
              </p>
              <section className={cn(styles.tables, styles.noOverflow)}>
                <ContentTable
                  columns={DATA_TOKENOMICS_EXPANSION.tableTwo.columns}
                  data={DATA_TOKENOMICS_EXPANSION.tableTwo.data}
                />
              </section>
            </section>
            <section id="inflation">
              <h4 className={styles.titleThree}>{DATA_INFLATION.title}</h4>
              <p className={styles.text}>{DATA_INFLATION.textOne}</p>
              <section className={cn(styles.tables, styles.noOverflow)}>
                <ContentTable
                  columns={DATA_INFLATION.tableOne.columns}
                  data={DATA_INFLATION.tableOne.data}
                />
              </section>
              <p className={styles.text}>{DATA_INFLATION.textTwo}</p>
              <section className={cn(styles.tables, styles.noOverflow)}>
                <ContentTable
                  columns={DATA_INFLATION.tableTwo.columns}
                  data={DATA_INFLATION.tableTwo.data}
                />
              </section>
              <p className={styles.text}>{DATA_INFLATION.textThree}</p>
              <p className={styles.text}>{DATA_INFLATION.textFour}</p>
              <p className={styles.text}>{DATA_INFLATION.textFive}</p>
              <section className={styles.tables}>
                <ContentTable
                  columns={DATA_INFLATION.tableThree.columns}
                  data={DATA_INFLATION.tableThree.data}
                  overflow={styles.overflow}
                  hideLastItem={true}
                />
              </section>
              <p className={styles.text}>{DATA_INFLATION.textSix}</p>
            </section>
          </section>
        </article>
      </article>
    </section>
  );
};
