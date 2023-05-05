import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Boat } from '../model/boat-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message-service';

@Injectable({providedIn: 'root'})
export class BoatService{

  private boatAppUrl = 'boat-app/api/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  getBoats(): Observable<Boat[]> {
    const url = this.boatAppUrl + 'list';
    return this.httpClient.get<Boat[]>(url)
               .pipe(
                 tap(b => this.log('Boats fetched')),
                 catchError(this.handleError<Boat[]>('getBoats', []))
               );
  }

  getBoat(id: number): Observable<Boat> {
    const url = `${this.boatAppUrl}get/${id}`;
    return this.httpClient.get<Boat>(url).pipe(
      tap(b => this.log(`Boat id=${id} fetched`)),
      catchError(this.handleError<Boat>(`getBoat id=${id}`))
    );
  }

  addBoat(boat: Boat): Observable<Boat> {
    const url = `${this.boatAppUrl}add`;
    return this.httpClient.post<Boat>(url, boat, this.httpOptions).pipe(
      tap(b => this.log(`Boat id=${b.id} added`)),
      catchError(this.handleError<any>('addBoat'))
    );
  }

  updateBoat(boat: Boat): Observable<Boat> {
    const url = `${this.boatAppUrl}update`;
    return this.httpClient.put<Boat>(url, boat, this.httpOptions).pipe(
      tap(b => this.log(`Boat id=${boat.id} updated`)),
      catchError(this.handleError<any>(`updateBoat id=${boat.id}`))
    );
  }

  deleteBoat(id: number): Observable<Boat> {
    const url = `${this.boatAppUrl}delete/${id}`;
    return this.httpClient.delete<Boat>(url, this.httpOptions).pipe(
      tap(b => this.log(`Boat id=${id} deleted`)),
      catchError(this.handleError<Boat>(`deleteBoat id=${id}`))
    );
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
