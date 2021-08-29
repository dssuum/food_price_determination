import { useState, useEffect } from "react";

export const VState = {
  initial: 0,
  loading: 1,
  loaded: 2,
  error: 3
};

const initialState = {
  data: null,
  vState: VState.initial,
  error: null
};

export default function useDebouncedEffect(
  fn = null,
  inputs = [],
  delay = 1000,
  successCb = null,
  errorCb = null
) {
  const [state, setState] = useState(initialState);

  async function fetch() {
    setState(prevState => ({
      ...prevState,
      vState: VState.loading
    }));

    try {
      const response = await fn(inputs);
      setState(prevState => ({
        ...prevState,
        vState: VState.loaded,
        error: null,
        data: (successCb && successCb(response)) || response
      }));
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        vState: VState.error,
        error: (errorCb && errorCb(error)) || error
      }));
    }
  }

  useEffect(
    () => {
      const handler = setTimeout(() => {
        if (fn) {
          fetch();
        }
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [...inputs, delay]
  );

  return [state.data, state.vState, state.error, fetch];
}
