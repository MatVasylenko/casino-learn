import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

interface ISlotsPageProps {

};

const SlotsPage:FC<ISlotsPageProps> = ({}) => {
  return (
    <div>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <div>Slots Page!</div>
    </div>
  )
};

export default SlotsPage;