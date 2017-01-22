import {Observable} from '@reactivex/rxjs';
import {User} from '../../domain/test/user.model';
import {observable, IObservableArray, action, computed} from 'mobx';
import {ApiGateway} from '../core/api/apigateway';
import {inject, injectable} from 'inversify';
import {Symbols} from '../../ioc/ioc.symbols';

@injectable()
export class UserStore {
    private _usersObservable: Observable<User[]>;

    @observable
    public users: User[] = [];

    @observable
    public isLoading = false;

    @observable
    public usersInitialized = false;

    constructor(@inject(Symbols.DefaultApiGateway) private _api: ApiGateway) { }

    public fetchAllUsers(): Observable<User[]> {
        if(this._usersObservable) return this._usersObservable;

        this.isLoading = true;
        this.usersInitialized = true;

        this._usersObservable = this._api.getDeserialized<User, User[]>('/users', User)
            .catch(err => {
                this.isLoading = false;

                return Observable.throw(err);
            })
            .map(users => {
                this.setUsers(users);
                return users;
            })
            .publishReplay(1).refCount();

        return this._usersObservable;
    }

    public clearCache() {
        (<IObservableArray<User>> this.users).clear();
        this.usersInitialized = false;
        this._usersObservable = null;
    }

    public findById(id: number): User  {
        return this.users.find(u => u.id == id);
    }

    @action
    private setUsers(users: User[]) {
        (<IObservableArray<User>> this.users).replace(users);
        this.isLoading = false;
    }
}