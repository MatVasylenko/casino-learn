import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import CoreGameRoulette from '../../../games/roulette';

interface IRoulettePageProps {

};

const RoulettePage:FC<IRoulettePageProps> = ({}) => {
  return (
    <div>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <CoreGameRoulette />
    </div>
  )
};

export default RoulettePage;