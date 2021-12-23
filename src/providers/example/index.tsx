import React, { useMemo } from 'react';
import { ExampleContext, ExampleContextType } from '../../contexts/example';

/**
 * ExampleProviderProps
 */
export interface ExampleProviderProps {
  /**
   * Prop
   */
  children: JSX.Element;
}

/**
 * ExampleProvider
 */
export const ExampleProvider = ({ children }: ExampleProviderProps) => {
  // eslint-disable-next-line arrow-body-style
  const ctx = useMemo<ExampleContextType>(() => {
    return {
      example: 'example',
    };
  }, []);

  return (
    <ExampleContext.Provider value={ctx}>{children}</ExampleContext.Provider>
  );
};
