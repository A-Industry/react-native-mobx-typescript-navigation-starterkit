import {UserStore} from '../stores/user.store';
import {inject, injectable} from 'inversify';
import { ListView } from 'react-native';
import {computed} from 'mobx';
import {Symbols} from '../../ioc/ioc.symbols';

@injectable()
export class UserDataSource {

    private ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    constructor(@inject(Symbols.UserStore) private _userStore: UserStore) { }

    @computed get dataSource() {
        return this.ds.cloneWithRows(this._userStore.users.slice());
    }
}