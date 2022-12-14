import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map } from 'rxjs';
import { registerAction, registerFailureAction, registerSuccessAction } from 'src/app/auth/store/actions/register.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../services/auth.services';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            console.log("RegisterEffect", currentUser)
            return registerSuccessAction({ currentUser })
          }),
          catchError(() => {
            return of(registerFailureAction())
          })
        )
      })
    )
  );
/*
note: you need to use of() in catchError because insode a map, 
it's non-ovservable territory */
  constructor(private actions$: Actions, private authService: AuthService) { }
}