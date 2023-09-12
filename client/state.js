import { proxy } from 'valtio';

export const store = proxy({
  // user: Firebase.auth().currentUser,
  isDialogOpen: false,
});
