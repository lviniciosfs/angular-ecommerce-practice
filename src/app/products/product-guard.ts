import { CanActivateFn } from '@angular/router';

export const productGuard: CanActivateFn = (route, state) => {
  console.log(route);
  console.log(state);

  return true;
};
