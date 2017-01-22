import axios, {AxiosRequestConfig, AxiosInstance, Promise, AxiosResponse} from 'axios';
import {Observable, Observer} from '@reactivex/rxjs';
import {injectable} from 'inversify';
import "reflect-metadata";

@injectable()
export class HttpClient {

    private _axios: AxiosInstance;

    constructor(private baseUrl: string) {
        this._axios = axios.create({baseURL: baseUrl});
    }

    public get<T>(url: string, options?: AxiosRequestConfig): Observable<T> {
        return this.convertRequest(this._axios.get(url, options));
    }

    public post<T>(url: string, data?: any, options?: AxiosRequestConfig): Observable<T> {
        return this.convertRequest(this._axios.post(url, data, options));
    }

    public put<T>(url: string, data?: any, options?: AxiosRequestConfig): Observable<T> {
        return this.convertRequest(this._axios.put(url, data, options));
    }

    public patch<T>(url: string, data?: any, options?: AxiosRequestConfig): Observable<T> {
        return this.convertRequest(this._axios.patch(url, data, options));
    }

    public delete(url: string, options?: AxiosRequestConfig): Observable<any> {
        return this.convertRequest(this._axios.delete(url, options));
    }

    private convertRequest<T>(request: Promise<AxiosResponse>): Observable<T> {
        return Observable.create((observer: Observer<any>) => {
            request.then(response => {
                observer.next(response.data);
                observer.complete();
            });

            request.catch(error => observer.error(error));
        });
    }
}