import { useEffect } from 'react';

const noop = () => {};

// eslint-disable-next-line
const useMount = (onMount = noop) => useEffect(onMount, []);

export default useMount;
