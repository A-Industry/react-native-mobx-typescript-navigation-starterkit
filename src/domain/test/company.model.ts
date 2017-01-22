import {serializable} from 'serializr';

export class Company {
    @serializable
    public name: string;

    @serializable
    public catchPhrase: string;

    @serializable
    public bs: string;
}