import React from 'react';

/**
 * ExampleComponent props
 */
export interface ExampleComponentProps {
  /**
   * Prop
   */
  text: string;
}

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => (
  <span data-testid="test-component">{text}</span>
);
