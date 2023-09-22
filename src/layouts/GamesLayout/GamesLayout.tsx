import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IGamesLayoutProps {

};

const GamesLayout:FC<IGamesLayoutProps> = ({}) => {
  return (
    <div>
      <div>Header Games</div>
      <Outlet />
    </div>
  )
};

export default GamesLayout;