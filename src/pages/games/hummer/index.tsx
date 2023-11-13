import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import HummerCore from '../../../games/hummer';

interface IHummerPageProps {

};

const HummerPage:FC<IHummerPageProps> = ({}) => {
  return (
    <div>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <HummerCore />
    </div>
  )
};

export default HummerPage;