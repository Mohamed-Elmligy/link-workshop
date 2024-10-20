import { CanMatchFn } from '@angular/router';

// I assume we have auth cycle
export const authModuleGuard: CanMatchFn = () => {
  // do something
  return true;
};

export const mainModuleGuard: CanMatchFn = () => {
  // do something
  return true;
};
