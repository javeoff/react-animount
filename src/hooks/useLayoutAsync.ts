import { DependencyList, useLayoutEffect } from 'react';

export const useLayoutAsync = (
  effect: () => Promise<void | VoidFunction>,
  deps: DependencyList,
): void => {
  useLayoutEffect(() => {
    let onUnmount: VoidFunction | undefined;

    (async () => {
      onUnmount = (await effect()) || undefined;
      console.log('onUnmount', onUnmount);
    })();

    return () => {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, deps);
};
