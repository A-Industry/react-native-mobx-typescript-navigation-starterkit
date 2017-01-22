import {serializable, object} from 'serializr';
import {GeoLocation} from './geolocation.model';


export class Address {
    @serializable
    public street: string;

    @serializable
    public suite: string;

    @serializable
    public city: string;

    @serializable
    public zipcode: string;

    @serializable(object(GeoLocation))
    public geo: GeoLocation;

    public get shortAddres() {
        return `${this.street}, ${this.city}`
    }
}