import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message-service';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../model/user-model';

@Injectable({providedIn: 'root'})
export class UserService{

  private boatAppUrl = 'boat-app/api/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private user: User;

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  authenticate(username: string, password: string): Observable<User> {
    const url = `${this.boatAppUrl}authenticate`;
    return this.httpClient.post<User>(url, new User(username, password), this.httpOptions).pipe(
      tap(u => {
        this.log(`User username=${username} authenticated`);
        this.user = u;
      }),
      catchError(this.handleError<any>(`authenticate username=${username}`))
    );
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return new BehaviorSubject(!!this.user);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Log to console
      this.log(`Operation ${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }

}
