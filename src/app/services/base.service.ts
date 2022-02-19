import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class BaseService {
    public chartListURL = environment.apiPaths.chartList
    public chartURL = environment.apiPaths.chart 
    public albumURL = environment.apiPaths.album
    public searchURL = environment.apiPaths.search
}