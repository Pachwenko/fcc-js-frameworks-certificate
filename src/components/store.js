import { writable } from 'svelte/store';

function createCount(initialValue, minValue, maxValue) {
  const { subscribe, set, update } = writable(initialValue);

  function increment(n) {
    return n < maxValue ? n + 1 : n;
  }
  function decrement(n) {
    return n > minValue ? n - 1 : n;
  }

  return {
    subscribe,
    increment: () => update(increment),
    decrement: () => update(decrement),
    reset: () => set(initialValue),
  };
}

const breakLength = createCount(1, 1, 60);
const sessionLength = createCount(1, 1, 60);

export { breakLength, sessionLength };
