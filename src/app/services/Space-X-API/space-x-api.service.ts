import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IRequestBody, IResponse } from '../../interfaces/response';
import { ILaunchHighLevel } from '../../interfaces/launch';
import { IRocket } from '../../interfaces/rocket';
import { ILaunchPad } from '../../interfaces/launchpad';

@Injectable({
  providedIn: 'root'
})
export class SpaceXAPIService {
  // Properties
  private _apiQueryUrl = "https://api.spacexdata.com/v4/launches/query/"
  private _apiLaunchUrl = "https://api.spacexdata.com/v4/launches/"
  private _apiRocketUrl = "https://api.spacexdata.com/v4/rockets/"
  private _apiLaunchPadUrl = "https://api.spacexdata.com/v4/launchpads/"

  // Constructor
  constructor(private _http: HttpClient) { }

  // Methods
  public FetchLaunchPads(page: number, rocketId: string | null, launchPadId: string | null) {
    // Create basic query
    let body: IRequestBody = {
      "options": {
        "limit": 10,
        "page": page,
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

    // Add conditions to query
    if ((rocketId != null) && (rocketId != "*")) {
      body.query["rocket"] = rocketId;
    }

    if ((launchPadId != null) && (launchPadId != "*")) {
      body.query["launchpad"] = launchPadId;
    }

    // Send request
    return this._http.post<IResponse>(this._apiQueryUrl, body)
      .pipe(
      // Debug console log
      // tap((data) => {console.log(data)})
    );
  }

  public FetchLaunchPadWithId(launchId: string) {
    return this._http.get<ILaunchHighLevel>(this._apiLaunchUrl + launchId)
      .pipe(
      // Debug console log
      // tap((data) => { console.log(data) })
    )
  }

  public FetchAllRockets() {
    return this._http.get<IRocket[]>(this._apiRocketUrl)
      .pipe(
      // Debug console log
      // tap((data) => {console.log(data)})
    );
  }

  public FetchAllLaunchpads() {
    return this._http.get<ILaunchPad[]>(this._apiLaunchPadUrl)
      .pipe(
      // Debug console log
      // tap((data) => {console.log(data)})
    );
  }
}
