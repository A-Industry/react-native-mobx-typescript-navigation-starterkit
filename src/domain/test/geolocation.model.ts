import {serializable} from 'serializr';

export class GeoLocation {
    @serializable
    public lat: string;

    @serializable
    public lng: string;
}