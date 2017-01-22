import {environment} from './environments/dev.environment';
import "reflect-metadata";
import {injectable} from 'inversify';

@injectable()
export class Properties {
    public defaultApiUrl = environment.apiBaseUrl;
}