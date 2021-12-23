import { Dispatch, SetStateAction, useState } from 'react';

/**
 * ExampleContextType
 */
export type ExampleHookType<T> = [T, Dispatch<SetStateAction<T>>];

/**
 * useExampleHook
 */
export const useExampleHook = <T>(initialValue: T): ExampleHookType<T> => {
  const [state, stateSet] = useState<T>(initialValue);
  return [state, stateSet];
};
