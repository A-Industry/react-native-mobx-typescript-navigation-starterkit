import React, {Component} from 'react';
import {View} from 'react-native';
import {ScreenProps} from '../screenprops.interface'
import {UserStore} from '../../logic/stores/user.store';
import {Symbols} from '../../ioc/ioc.symbols';
import {Inject} from '../../ioc/ioc';
import {User} from '../../domain/test/user.model';

import { Card, ListItem } from 'react-native-elements'
import I18n from 'react-native-i18n';
import {observer} from 'mobx-react/native';

interface Props extends ScreenProps {
    userId: number;
}

@observer
export class UserDetails extends Component<Props, any> {

    @Inject(Symbols.UserStore)
    private _userStore: UserStore;

    private user: User;

    componentWillMount() {
        this.user = this._userStore.findById(this.props.userId);
    }

    render() {
        if(!this.user) return null;

        return (
            <View>
                <Card>
                    <ListItem title={I18n.t('username')} rightTitle={this.user.username} />
                    <ListItem title={I18n.t('email')} rightTitle={this.user.email} />
                    <ListItem title={I18n.t('address')} rightTitle={this.user.address.shortAddres} />
                </Card>

                <Card title={this.user.company.name}>
                    <ListItem title={this.user.company.bs} hideChevron />
                    <ListItem title={this.user.company.catchPhrase} hideChevron />
                </Card>
            </View>
        );
    }
}