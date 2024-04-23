import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IResponse } from '../../interfaces/response';
import { ILaunchHighLevel } from '../../interfaces/launch';

@Injectable({
  providedIn: 'root'
})
export class SpaceXAPIService {
  // Properties
  private _apiQueryUrl = "https://api.spacexdata.com/v4/launches/query/"
  private _apiGeneralLaunchUrl = "https://api.spacexdata.com/v4/launches/"

  // Constructor
  constructor(private _http: HttpClient) { }

  // Methods
  public FetchLaunchPads(page:number)  {
    // Set request conditions
    const body: object = {
      "options": {
        "limit": 10,
        "page":page,
        "populate": [
          {
            "path": "rocket",
            "select": {
              "name": 1
            }
          },
          {
            "path": "launchpad",
            "select": {
              "name": 1
            }
          }
        ]
      },
      "query": {
      }
    }

    // Send request
    return this._http.post<IResponse>(this._apiQueryUrl, body)
      .pipe(
      // Debug console log
      // tap((data) => {console.log(data)})
    );
  }

  public FetchLaunchPadWithId(launchId: string) {
    return this._http.get<ILaunchHighLevel>(this._apiGeneralLaunchUrl + launchId)
      .pipe(
        // Debug console log
        tap((data) => { console.log(data) })
      )
  }
}
