import { proxy } from 'valtio';

export const store = proxy({
  results: [],
});
