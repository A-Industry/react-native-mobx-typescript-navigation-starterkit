import {observable} from 'mobx';
import {serializable, identifier, object} from 'serializr';
import {Address} from './address.model';
import {Company} from './company.model';

export class User {

    @serializable(identifier())
    @observable
    public id: number;

    @serializable
    @observable
    public name: string;

    @serializable
    @observable
    public username: string;

    @serializable
    @observable
    public email: string;

    @serializable(object(Address))
    @observable
    public address: Address;

    @serializable(object(Company))
    @observable
    public company: Company;
}
