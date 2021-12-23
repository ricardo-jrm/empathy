/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useState, useEffect, useCallback } from 'react';
import { fetcher, useEmpathy } from '../../hooks/useEmpathy';

const exampleEndpoint = 'https://jsonplaceholder.typicode.com/users/1';

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
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  const [fetchedData, fetchedDataSet] = useState<any>(undefined);

  const fetchJson = useCallback(() => {
    fetchedDataSet(undefined);
    setTimeout(async () => {
      try {
        fetchedDataSet(await fetcher(exampleEndpoint));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(`Error fetching with fetcher "${exampleEndpoint}": `, err);
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    fetchJson();
  }, [fetchJson]);

  const {
    data: empathyData,
    error: empathyError,
    loading: loadingEmpathy,
  } = useEmpathy<any>(exampleEndpoint);

  useEffect(() => {
    console.log({ fetchedData });
  }, [fetchedData]);

  useEffect(() => {
    console.log({ empathyData });
  }, [empathyData]);

  useEffect(() => {
    console.log({ empathyError });
  }, [empathyError]);

  return (
    <div>
      <span data-testid="test-component">{text}</span>
      <div>
        <b>Fetch: </b> {fetchedData ? fetchedData?.name : 'Loading...'}
      </div>
      <div>
        <b>Empathy: </b> {!loadingEmpathy ? empathyData?.name : 'Loading...'}
      </div>
      <div
        style={{
          paddingTop: '30px',
        }}
      >
        <button
          type="button"
          onClick={() => {
            fetchJson();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
