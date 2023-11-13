import { FC, ReactNode } from 'react';
import balanceIcon from '../../../../assets/slot/info/balance.png';
import betIcon from '../../../../assets/slot/info/bet.png';
import { twMerge } from 'tailwind-merge';

interface IScoreWindowProps {
  children: ReactNode;
  icon: 'balance' | 'bets';
}

const SlotScoreWindow: FC<IScoreWindowProps> = ({
  children,
  icon,
}) => {
  return (
    <div className="relative font-sans text-[35px]">
      <svg width="262" height="63" viewBox="0 0 262 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.03888 2.88379C4.17528 2.88379 1.31879 6.48215 2.19533 10.245L7.14767 31.5046C7.2174 31.8039 7.2172 32.1153 7.1471 32.4145L2.20361 53.5152C1.32159 57.2799 4.17871 60.8838 8.04544 60.8838H243.789C246.187 60.8838 248.354 59.4565 249.301 57.2539L259.16 34.3265C259.809 32.8174 259.811 31.1082 259.165 29.5978L249.3 6.52511C248.356 4.31642 246.186 2.88379 243.783 2.88379H8.03888Z" fill="#2E1D33" stroke="url(#paint0_linear_228_3497)" stroke-width="4" />
        <defs>
          <linearGradient id="paint0_linear_228_3497" x1="130.5" y1="4.88379" x2="130.5" y2="58.8838" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CD7C2E" />
            <stop offset="0.171875" stop-color="#D88A6A" />
            <stop offset="0.520841" stop-color="#FFFD9E" />
            <stop offset="0.838557" stop-color="#D88A6A" />
            <stop offset="1" stop-color="#CD7C2E" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute right-[40%] top-[55%] translate-y-[-50%] text-right text-white">
        {children}
      </div>
      <div className={twMerge(
        icon === 'balance' && "absolute left-[-10%] bottom-[-15%]",
        icon === 'bets' && "absolute left-[-5%] bottom-[-6%]"
      )}>
        {icon === 'balance' && <img src={balanceIcon} />}
        {icon === 'bets' && <img src={betIcon} />}
      </div>
    </div>
  )
};

export default SlotScoreWindow;