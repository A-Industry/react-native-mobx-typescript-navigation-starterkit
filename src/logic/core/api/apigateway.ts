import {HttpClient} from './httpclient';
import {Observable} from '@reactivex/rxjs';
import {AxiosRequestConfig} from 'axios';
import {ClazzOrModelSchema, deserialize, serialize} from 'serializr';
import {injectable, inject} from 'inversify';
import "reflect-metadata";
import {Symbols} from '../../../ioc/ioc.symbols';

@injectable()
export class ApiGateway {

    //TODO: Authorization.
    constructor(
        @inject(Symbols.DefaultHttpClient) private _client: HttpClient
    ) { }

    public getDeserialized<T, U extends T | T[]>(url: string, type: ClazzOrModelSchema<T>, params?: any, options?: AxiosRequestConfig): Observable<U> {
        return this.processRequest(this._client.get(this.interpolateUrl(url, params), options), type);
    }

    public postSerializeAndDeserialze<T, R, U extends R | R[]>(url: string, data: T, inType: ClazzOrModelSchema<T>, outType: ClazzOrModelSchema<R>, params?: any, options?: AxiosRequestConfig): Observable<U> {
        let request = this._client.post(this.interpolateUrl(url, params), serialize(inType, data), options);
        return this.processRequest(request, outType);
    }

    public postSerialize<T>(url: string, data: T, inType: ClazzOrModelSchema<T>, params?: any, options?: AxiosRequestConfig): Observable<any> {
        return this._client.post(this.interpolateUrl(url, params), serialize(inType, data), options);
    }

    public postDeserialize<T, U extends T | T[]>(url: string, data: any, outType: ClazzOrModelSchema<T>, params?: any, options?: AxiosRequestConfig): Observable<U> {
        return this.processRequest(this._client.post(this.interpolateUrl(url, params), data, options), outType);
    }

    public putSerializeAndDeserialze<T, R, U extends R | R[]>(url: string, data: T, inType: ClazzOrModelSchema<T>, outType: ClazzOrModelSchema<R>, params?: any, options?: AxiosRequestConfig): Observable<U> {
        let request = this._client.put(this.interpolateUrl(url, params), serialize(inType, data), options);
        return this.processRequest(request, outType);
    }

    public putSerialize<T>(url: string, data: T, inType: ClazzOrModelSchema<T>, params?: any, options?: AxiosRequestConfig): Observable<any> {
        return this._client.put(this.interpolateUrl(url, params), serialize(inType, data), options);
    }

    public putDeserialize<T, U extends T | T[]>(url: string, data: any, outType: ClazzOrModelSchema<T>, params?: any, options?: AxiosRequestConfig): Observable<U> {
        return this.processRequest(this._client.put(this.interpolateUrl(url, params), data, options), outType);
    }

    public get<T>(url: string, params?: any, options?: AxiosRequestConfig): Observable<T> {
        return this._client.get(this.interpolateUrl(url, params), options);
    }

    public post<T>(url: string, data: any, params?: any, options?: AxiosRequestConfig): Observable<T> {
        return this._client.post(this.interpolateUrl(url, params), data, options);
    }

    public put<T>(url: string, data: any, params?: any, options?: AxiosRequestConfig): Observable<T> {
        return this._client.put(this.interpolateUrl(url, params), data, options);
    }

    public patch<T>(url: string, data: any, patchFields?: string[], params?: any, options?: AxiosRequestConfig): Observable<T> {
        let patchable: any = {};

        //pluck fields out of original data, to create PATCH body.
        if(patchFields) {
            patchFields.forEach(pf => patchable[pf] = data[pf]);
        } else {
            patchable = data;
        }

        return this._client.patch(this.interpolateUrl(url, params), patchable, options);
    }

    public delete(url: string, params?: any, options?: AxiosRequestConfig): Observable<any> {
        return this._client.delete(this.interpolateUrl(url, params), options);
    }

    private processRequest<T, U extends T | T[]>(request: Observable<any>, type: ClazzOrModelSchema<T>): Observable<U> {
        return <Observable<U>> request.map((response: any) => deserialize(type, response));
    }

    //See: http://www.bennadel.com/blog/3047-creating-specialized-http-clients-in-angular-2-beta-8.htm
    public interpolateUrl(url: string, params: any ) {
        let self = this;
        url = url.replace(
            /:([a-zA-Z]+[\w-]*)/g,
            function replaceToken( $0, token ) {
                // Try to move matching token from the params collection.
                if (params && params.hasOwnProperty( token ) ) {
                    return( self.extractValue( params, token ) );
                }
                // If a matching value couldn't be found, just replace
                // the token with the empty string.
                return( "" );
            }
        );

        //Clean up any trailing comma's
        url = url.replace(/,+$/g, '');
        // Clean up any repeating slashes.
        url = url.replace(/\/{2,}/g, '/');
        // Clean up any trailing slashes.
        url = url.replace(/\/+$/g, '');

        if(!params) return url;

        let keys = Object.keys(params);
        if(keys && keys.length) {
            for(var i = 0; i < keys.length; i++) {
                url+= i == 0 ? '?' : '&';
                url+= keys[i] + '=' + params[keys[i]]
            }
        }

        return url;
    }

    private extractValue( collection: any, key: string ) {
        var value = collection[ key ];
        delete( collection[ key ] );
        return( value );
    }
}