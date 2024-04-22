import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IResponse } from '../../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class SpaceXAPIService {

  private _apiUrl = "https://api.spacexdata.com/v4/launches/query"

  constructor(private _http: HttpClient) { }

  public Test() {
    let body = {
      "options": {
        "limit": 1
      },
      "query": {
      }
    }

    return this._http.post<IResponse>(this._apiUrl, body)
      .pipe(
        tap((data) => console.log(data))
      );
  }

  public FetchLaunchPads() {
    // Set request conditions
    const body: object = {
      "options": {
        "limit": 10,
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
    return this._http.post<IResponse>(this._apiUrl, body)
    .pipe(
      tap((data) => {console.log(data)})
    );
  }
}
