import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpclient: HttpClient,@Inject("baseUrl") private baseUrl:string) { }


  private url (requestParameter:Partial< RequestParameter>):string{
    return `${requestParameter.baseUrl? requestParameter.baseUrl: this.baseUrl}/${requestParameter.controller}${requestParameter.action?`/${requestParameter.action}`:""}`
  }
//
get<T>(requestParameters: Partial<RequestParameter>, id?: string): Observable<T>{
  let url: string ="";
  if(requestParameters.fullEndPoint)
  url = requestParameters.fullEndPoint;
  else
  url = `${this.url(requestParameters)}${id ? `/${id}` : ""}${requestParameters.querystring?`?${requestParameters.querystring}`:""}`;
  return this.httpclient.get<T>(url, {headers:requestParameters.headers})
}
getBy<T>(url: string, id?: string): Observable<T>{
  const fullUrl = `${url}${id}`;
  return this.httpclient.get<T>(fullUrl);
}

//
// post<T>(requestParameters: Partial<RequestParameter>, body: Partial<T>) :Observable<T>{

//   let url:string = "";
//   if(requestParameters.fullEndPoint)
//   url = requestParameters.fullEndPoint;
//   else
//   url = `${this.url(requestParameters)}${requestParameters.querystring?`?${requestParameters.querystring}`:""}`;
//   return this.httpclient.post<T>(url, body,{ headers: requestParameters.headers});

// }
post<T>(requestParameter: Partial<RequestParameter>, body: Partial<T>): Observable<T> {
  let url: string = "";
  if (requestParameter.fullEndPoint)
    url = requestParameter.fullEndPoint;
  else
    url = `${this.url(requestParameter)}${requestParameter.querystring ? `?${requestParameter.querystring}` : ""}`

  return this.httpclient.post<T>(url, body, { headers: requestParameter.headers, responseType: requestParameter.responseType as 'json' });
}
put<T>(requestParameters: Partial<RequestParameter>, body: Partial<T>):Observable<T>{
  let url:string = "";
  if(requestParameters.fullEndPoint)
  url = requestParameters.fullEndPoint;
  else
  url = `${this.url(requestParameters)}${requestParameters.querystring?`?${requestParameters.querystring}`:""}`;

  return this.httpclient.put<T>(url,body,{headers: requestParameters.headers});

}

delete<T>(requestParameters:Partial<RequestParameter>,id: string): Observable<T>{
  let url : string = "";
  if(requestParameters.fullEndPoint)
    url = requestParameters.fullEndPoint;
  else
    url = `${this.url(requestParameters)}/${id}${requestParameters.querystring?`?${requestParameters.querystring}`:""}`;
  return this.httpclient.delete<T>(url, {headers: requestParameters.headers});
    }




  }


export class RequestParameter{
  controller?: string;
  action?: string;
  // id?:string;
  headers?: HttpHeaders;
  baseUrl?:string;
  fullEndPoint?: string;
  querystring?:string;
  responseType?: string = 'json';

}
