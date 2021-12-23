import { useContext, createContext } from 'react';

/**
 * Context interface
 */
export interface ExampleContextType {
  example: string;
}

/**
 * Initial value
 */
const init: ExampleContextType = {
  example: 'init',
};

/**
 * Example Context
 */
export const ExampleContext = createContext<ExampleContextType>(init);

/**
 * useExampleContext
 */
export const useExampleContext = () => useContext(ExampleContext);
