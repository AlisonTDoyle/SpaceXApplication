import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ISavedLaunch } from '../../interfaces/saved-launch';

@Injectable({
  providedIn: 'root'
})
export class SavedLaunchesService {
  // Properties
  private _devApiUrl = "http://localhost:5050/saved-launches";

  // Constructor
  constructor(private _http: HttpClient) { }

  // Methods
  public FetchSavedLaunches() {
    return this._http.get<ISavedLaunch>(this._devApiUrl)
      .pipe(
        tap((data) => {
          console.log(data)
        }),
        catchError(this.HandleError)
      );
  }

  public AddLaunch(launchToSave: ISavedLaunch) {
    return this._http.post<ISavedLaunch>(this._devApiUrl, launchToSave)
      .pipe(
        tap(data => console.log('AddLaunch(): ' + JSON.stringify(data))
        ),
        catchError(this.HandleError)
      );
  }

  public GetLaunchByLaunchId(savedLaunchId: string) {
    return this._http.get<ISavedLaunch>(this._devApiUrl + "/" + savedLaunchId)
      .pipe(
        tap(data => console.log('GetLaunch(): ' + JSON.stringify(data))
        ),
        catchError(this.HandleError)
      );
  }

  public DeleteLaunch(savedLaunchId: string) {
    const deleteItemUrl = this._devApiUrl + "/" + savedLaunchId;
    return this._http.delete(deleteItemUrl)
      .pipe(
        tap(data => console.log('DeleteLaunch(): ' + JSON.stringify(data))
        ),
        catchError(this.HandleError)
      );
  }

  private HandleError(err: HttpErrorResponse) {
    console.error('SavedLaunches: ' + err.message);
    return err.message;
  }
}
