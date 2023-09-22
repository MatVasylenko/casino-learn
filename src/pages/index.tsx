import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../app/router/utils';

interface IMainPageProps {

};

const MainPage:FC<IMainPageProps> = ({}) => {
  return (
    <div className="flex gap-4">
      <Link to={ROUTES.games.roulette}>Roulette</Link>
      <Link to={ROUTES.games.slots}>Slots</Link>
      <Link to={ROUTES.games.hummer}>Hummers</Link>
    </div>
  )
};

export default MainPage;