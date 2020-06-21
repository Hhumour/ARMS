import { Injectable } from '@angular/core';
import { IResponse } from '../models/response.interface';
import { HttpHeaders, HttpResponse, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { HOST } from "../config/apiHost.config";
const INTERVIEW_SEARCH = `${HOST}/api/interviewSearch`;
const INTERVIEW_API=`${HOST}/api/interview`


@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
        Authorization: localStorage.getItem("Authorized")
       //hard code token here
   
  });

  options = {
    headers: this.headers,
  };
  constructor(private http: HttpClient) { }
  searchInterview(page: number = 1, character: string = '') {
    const params: HttpParams = new HttpParams().set('character', character).set('page', page.toString()).
    set('pagination','true');

    return this.http.get<IResponse>(
      INTERVIEW_SEARCH,
      { ...this.options, params }
    );
  }
  deleteEmployee(interviewId: String): Observable<IResponse> {
    return this.http.delete<IResponse>(
      `${INTERVIEW_API}/${interviewId}`,
      this.options
    );
  }

  //new
  
  createInterview(interviewObj: any):Observable<HttpResponse<any>>{
    return this.http.post<any>(`${HOST}/api/interview`, interviewObj, { ...this.options, observe: 'response' } )
  }

  getLocation():Observable<any>{
    return this.http.get<any>(
      `${HOST}/api/location`, this.options
    )
  }

  getRoundTypes():Observable<any>{
    return this.http.get<any>(
      `${HOST}/api/roundType`, this.options
    )
  }

  getInterview(id: number):Observable<any>{
    return this.http.get<any>(
      `${HOST}/api/interview/${id}`, this.options
    )
  }

  getRounds(id: number, append: number):Observable<any>{
    return this.http.get<any>(
      `${HOST}/api/interview/${id}?append=${append}`, this.options
    )
  }

  updateInterview (id:number, updateObj):Observable<any>{
    return this.http.patch<any>(
      `${HOST}/api/interview/${id}`, updateObj, this.options
    )
  }
  
  updateRound( id:number, roundID: number, updateObj):Observable<any>{
    return this.http.patch<any>(
      `${HOST}/api/interview/${id}?roundID=${roundID}`, updateObj, this.options
    )
  }

  deleteRound( id:number, roundID:number):Observable<any>{
    return this.http.delete<any>(
      `${HOST}/api/interview/${id}?roundID=${roundID}`, this.options
    )
  }
}


