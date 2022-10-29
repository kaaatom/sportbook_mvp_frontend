import { FC } from 'react';

import { Routes, Navigate, Route } from 'react-router-dom';

import {
  Home,
  ShowCase,
  Sports,
  Live,
  Favorite,
  Leaderboard,
  Staking,
  Pools,
  Info,
} from '../../screens';
import App from '../../App';

export const SiteRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="home" element={<Home />}>
        <Route path=":filter" element={<Home />} />
      </Route>
      <Route path="showcase" element={<ShowCase />} />
      <Route path="sports" element={<Sports />}>
        <Route path=":filter" element={<Sports />}>
          <Route path=":sport" element={<Sports />}>
            <Route path=":name" element={<Sports />} />
          </Route>
        </Route>
      </Route>
      <Route path="live" element={<Live />}>
        <Route path=":filter" element={<Live />}>
          <Route path=":sport" element={<Live />}>
            <Route path=":name" element={<Live />} />
          </Route>
        </Route>
      </Route>
      <Route path="favorite" element={<Favorite />}>
        <Route path=":filter" element={<Favorite />}>
          <Route path=":sport" element={<Favorite />}>
            <Route path=":name" element={<Favorite />} />
          </Route>
        </Route>
      </Route>
      <Route path="info" element={<Info />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="staking" element={<Staking />} />
      <Route path="pools" element={<Pools />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>
  </Routes>
);
