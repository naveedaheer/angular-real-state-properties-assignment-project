import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, Subject, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Gallery } from "./gallery.model";

@Injectable({ providedIn: "root" })
export class GalleryService {
  private gallery: Gallery[] = [];

  constructor(private http: HttpClient, private router: Router) {}

    getImages(): Observable<Gallery[]> {
      console.log("Before asking backend to send images");
      return this.http.get<Gallery[]>('http://localhost:3000/api/gallery').pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getIndividualGallery(id: string): Observable<Gallery[]> {
      return this.http.get<Gallery[]>('http://localhost:3000/api/gallery/' + id).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

      private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
