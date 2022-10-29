import { FC, useState, useMemo } from 'react';

import { Footer, SportsContainer } from '../../containers';
import {
  Button,
  Tab,
  NumericInput,
  SearchInput,
  Select,
  Table,
  Card,
  CombinedGamesModal,
  MyBetsModal,
  SportItem,
  Team,
  OptionsSelect,
} from '../../components';
import './styles.scss';

const data = [
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
  {
    id: '1',
    address: 'qwdwedwedwed',
    sacrifice: 'wefwef',
    multiplier: 'wefwefwef',
    sacrifice_point: 'wefwedcsdcec',
    tx_url: 'wefwefdscsdefewec',
  },
];

export const ShowCase: FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'id',
      },
      {
        Header: 'Address',
        accessor: 'address',
        id: 'address',
      },
      {
        Header: 'Sacrifice (USD)',
        accessor: 'sacrifice',
      },
      {
        Header: 'Multiplier',
        accessor: 'multiplier',
      },
      {
        Header: 'Sacrifice points',
        accessor: 'sacrifice_point',
      },
      {
        Header: '',
        accessor: 'tx_url',
      },
    ],
    []
  );

  const selectData: string[] = ['Binance smart chain', 'Hyperledger'];
  const eventData = {
    id: 1,
    league: {
      name: 'UEFA Europa League',
      image: 'as',
    },
    away: {
      image: '../../assets/tmp/card-player-away-logo.svg',
      name: 'AFC Bournemouth',
      odd: 170,
      percent: 30,
    },
    home: {
      image: '../../assets/tmp/card-player-home-logo.svg',
      name: 'Queens Park Rangers',
      odd: 190,
      percent: 70,
    },
    like: false,
    staked_amount: 3456,
    time: 10,
    twitch_url: 'https://twitch.com',
  };
  const options = ['Chinese', 'English', 'Spanish', 'Japanese', 'French'];
  const [nativeStake, setNativeStake] = useState<string>('');
  const [betsOpen, setBetsOpen] = useState<boolean>(false);
  const [combinedOpen, setCombinedOpen] = useState<boolean>(false);

  return (
    <div className="showcase">
      <h2>OptionsSelect</h2>
      <section>
        <OptionsSelect
          label="language"
          startIndex={0}
          options={options}
          onSelect={() => console.log('a')}
        />
      </section>
      <h2>Buttons</h2>
      <section>
        <h3>Close Button</h3>
        <aside>This button would need to fit the dialog frame</aside>
        <Button type="close">Close</Button>
      </section>
      <section>
        <h3>Medium Buttons</h3>
        <Button color="green" type="medium">
          I am a medium green button
        </Button>
        <Button color="purple" type="medium">
          I am a medium purple button
        </Button>
        <Button color="orange" type="medium">
          I am a medium orange button
        </Button>
        <Button color="orange" type="medium" image="metamask">
          <span>Metamask</span>
        </Button>
      </section>
      <section>
        <h3>Large Buttons</h3>
        <Button color="green" type="large">
          I am a large green button
        </Button>
        <Button color="purple" type="large">
          I am a large purple button
        </Button>
        <Button color="orange" type="large">
          I am a large orange button
        </Button>
        <Button color="orange" type="large" image="metamask">
          <span>Metamask</span>
        </Button>
      </section>
      <h2>Tabs</h2>
      <ul className="tabs">
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
      <h2>Inputs</h2>
      <section>
        <form>
          <NumericInput
            id="input1"
            value={nativeStake}
            setValue={setNativeStake}
          >
            How much do you want to stake? (Native)
          </NumericInput>
          <Select
            name="chain"
            options={selectData}
            text="Select a chain to connect to"
          />
          <Select
            name="chain"
            options={selectData}
            text="Select a chain to connect to (Native)"
            native
          />
        </form>
        <form>
          <SearchInput id="asasd" placeholder="Search your event" />
        </form>
      </section>
      <section>
        <div style={{ position: 'relative' }}>
          <Table columns={columns} data={data} userData={data[1]} />
        </div>
      </section>
      <section>
        <h2>Cards</h2>
        {/*<Card eventInfo={eventData} />*/}
        <div className="test-div" />
      </section>
      {/*<section>*/}
      {/*  <CombinedGamesModal closeModal={() => null} />*/}
      {/*</section>*/}
      <section>
        <MyBetsModal setModalOpen={() => null} />
      </section>
      <section>
        <SportsContainer
          id={1}
          pageName="showcase"
          name="MMA"
          image="soccer"
          events_count={3}
        >
          <SportItem
            id={2}
            pageName="showcase"
            name="UFC"
            image="soccer"
            events_count={3}
          />
        </SportsContainer>
      </section>
      <Team
        playerInfo={{ image: 'a', name: 'AAAA', percent: 70 }}
        from="home"
      />
      <Footer />
    </div>
  );
};
