import { Injectable } from "@angular/core";
import { HttpHeaders, HttpErrorResponse, HttpParams, HttpClient } from '@angular/common/http';
import { BaseService } from "./base.service";
import { IApiResp } from "../interfaces/Imusic";

@Injectable({ providedIn: 'root' })
export class MusicService extends BaseService {
  constructor(private http: HttpClient) {
      super();
  }
  GetMusicList() {
      const res = this.http.get<IApiResp>(this.chartListURL).toPromise()
      return res;
  }
}