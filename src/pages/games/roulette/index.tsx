import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import CoreGameRoulette from '../../../games/roulette';
import styles from '../../page.module.css';

interface IRoulettePageProps {

};

const RoulettePage:FC<IRoulettePageProps> = ({}) => {
  return (
    <div className={styles.roulette}>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <CoreGameRoulette />
    </div>
  )
};

export default RoulettePage;