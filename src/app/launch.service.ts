import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Launch } from './launch'
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http: HttpClient) { }

  private launchUrl = 'http://launch.levit.in/api/flight_data'
  private nextUrl = 'https://api.spacexdata.com/v3/launches/next'
  private upcomingUrl = 'https://api.spacexdata.com/v3/launches/upcoming'
  private pastUrl = 'https://api.spacexdata.com/v3/launches/past'
  private allUrl = 'https://api.spacexdata.com/v3/launches'
  private searchUrl = 'http://launch.levit.in/api/flight_data'
  private lastUrl = 'https://api.spacexdata.com/v3/launches/latest'
  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.launchUrl)
      .pipe(
        catchError(this.handleError([]))
      )
  }
  getLaunch(id: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.allUrl}/${id}`)
    .pipe(
      catchError(this.handleError<any>('getLaunch id=${id}'))
    )
  }
  getNext(): Observable<Launch>{
    return this.http.get<Launch>(this.nextUrl)
    .pipe(
      catchError(this.handleError<any>('getNext'))
    )
  }
  getPast(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.pastUrl)
    .pipe(
      catchError(this.handleError<any>('getPast'))
    )
  }
  getLast(): Observable<Launch> {
    return this.http.get<Launch>(this.lastUrl)
    .pipe(
      catchError(this.handleError<any>('getLast'))
    )
  }
  getUpcoming(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.upcomingUrl)
    .pipe(
      catchError(this.handleError<any>('getUpcoming'))
    )
  }
  search(term: string): Observable<Launch[]>{
    if (!term.trim()) {
      return of ([])
    }
    return this.http.get<Launch[]>(`${this.searchUrl}/${term}`)
    .pipe(
      catchError(this.handleError<any>('search'))
    )
  }

private handleError<T> (result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T)
  }
}

}
