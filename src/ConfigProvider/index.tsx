import * as React from 'react';
import { useBEM } from '../util';

export const Prefix = 'chubby';

export type Size = 'sm' | 'md' | 'lg';
export type Type = 'primary' | 'default';
export interface IConfigContext {
  size: Size;
  type: Type;
  createBEM: typeof useBEM;
}

export const createBEM = (block: string) => useBEM(`${Prefix}-${block}`);
export const ConfigContext = React.createContext<IConfigContext>({
  size: 'md',
  type: 'default',
  createBEM,
});

interface IConfigProviderProps {
  value: IConfigContext;
}

const ConfigProvider: React.FC<IConfigProviderProps> = props => {
  return <ConfigContext.Provider {...props} />;
};

export default ConfigProvider;
