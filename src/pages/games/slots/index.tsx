import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import CoreGameSlots from '../../../games/slots';

interface ISlotsPageProps {

};

const SlotsPage:FC<ISlotsPageProps> = ({}) => {
  return (
    <div>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <CoreGameSlots />
    </div>
  )
};

export default SlotsPage;