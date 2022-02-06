import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoronaApiDataService {
  private globalDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-17-2020.csv`;
  private dateWiseDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`

  private dailyCoronaCasesUrl='https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'

  constructor(private http:HttpClient) { }

  getGlobalData(){
    return this.http.get(this.globalDataUrl,{responseType:'text'}); 
  }
  getDataByDates(){
    return this.http.get(this.dateWiseDataUrl,{responseType:'text'});
  }


  getDailyDataOfCoronaVirus(){
    return this.http.get(this.dailyCoronaCasesUrl,{responseType:'text'})
  }

}
