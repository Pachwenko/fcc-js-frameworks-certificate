import { readable, writable } from 'svelte/store';

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

const breakLength = createCount(5, 1, 60);
const sessionLength = createCount(25, 1, 60);

const currentTime = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export { breakLength, sessionLength, currentTime };
