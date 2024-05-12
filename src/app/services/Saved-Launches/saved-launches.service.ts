import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ISavedLaunch } from '../../interfaces/saved-launch';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SavedLaunchesService {
  // Properties
  // private _devApiUrl = "http://localhost:5050/saved-launches";
  private _prodUrl = "http://54.195.46.159:5050/saved-launches";

  // Constructor
  constructor(private _http: HttpClient) { }

  // Methods
  public FetchSavedLaunches() {
    return this._http.get<ISavedLaunch[]>(this._prodUrl)
      .pipe(
        tap((data) => {
          // Debug message
          // console.log('DeleteLaunch(): ' + JSON.stringify(data))
        }),
        catchError(this.HandleError)
      );
  }

  public AddLaunch(launchToSave: ISavedLaunch) {
    return this._http.post<ISavedLaunch>(this._prodUrl, launchToSave)
      .pipe(
        tap(data => {
          // Debug message
          // console.log('AddLaunch(): ' + JSON.stringify(data))
        }
        ),
        catchError(this.HandleError)
      );
  }

  public GetLaunchByLaunchId(savedLaunchId: string) {
    return this._http.get<ISavedLaunch>(this._prodUrl + "/" + savedLaunchId)
      .pipe(
        tap((data) => {
          // Debug message
          // console.log('DeleteLaunch(): ' + JSON.stringify(data))
        }
        ),
        catchError(this.HandleError)
      );
  }

  public DeleteLaunch(savedLaunchId: string) {
    const deleteItemUrl = this._prodUrl + "/" + savedLaunchId;
    return this._http.delete(deleteItemUrl)
      .pipe(
        tap((data) => {
          // Debug message
          // console.log('DeleteLaunch(): ' + JSON.stringify(data))
        }
        ),
        catchError(this.HandleError)
      );
  }

  private HandleError(err: HttpErrorResponse) {
    console.error('SavedLaunches: ' + err.message);
    return err.message;
  }
}
