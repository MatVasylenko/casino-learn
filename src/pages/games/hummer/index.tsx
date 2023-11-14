import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import HummerCore from '../../../games/hummer';

interface IHummerPageProps {

};

const HummerPage: FC<IHummerPageProps> = ({ }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <Link to={ROUTES.main}>return to Main Page</Link>
        <HummerCore />
      </div>
    </div>
  )
};

export default HummerPage;