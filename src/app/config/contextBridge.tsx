import { Stage as PixiStage } from '@pixi/react';
import { ReactReduxContext } from 'react-redux';

const ContextBridge = ({ children, Context, render }: {
  children: any;
  Context: any;
  render: any;
}) => {
  return (
    <Context.Consumer>
      {(value: any) =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  );
};

export const Stage = ({ children, ...props }: any) => {
  return (
    <ContextBridge
      Context={ReactReduxContext}
      render={(children: any) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
};