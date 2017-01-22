import React, { Component } from "react";
import {Text, View, ListView} from 'react-native';
import {observer} from 'mobx-react/native';
import {ScreenProps} from '../screenprops.interface';
import {Inject} from '../../ioc/ioc';
import {Symbols} from '../../ioc/ioc.symbols';
import {UserDataSource} from '../../logic/datasources/user.datasource';
import {UserStore} from '../../logic/stores/user.store';
import {UserItem} from '../../components/useritem';
import {User} from '../../domain/test/user.model';
import I18n from 'react-native-i18n';

import * as Animatable from 'react-native-animatable';
import {Screens} from '../screen.registry';

let AnimatedUserItem = Animatable.createAnimatableComponent(UserItem);

@observer
export class UserList extends Component<ScreenProps, any> {

    @Inject(Symbols.UserDataSource)
    private _dataSource: UserDataSource;

    @Inject(Symbols.UserStore)
    private _userStore: UserStore;

    componentDidMount() {
        if(!this._userStore.usersInitialized) {
            this._userStore.fetchAllUsers().subscribe();
        }
    }

    userItemPressed(user: User) {
        this.props.navigator.push({
            screen: Screens.UserDetails,
            title: user.name,
            passProps: {
                userId: user.id
            }
        });
    }

    render() {
        let speed = 100;

     return (
         <View>
             <ListView
                 dataSource={this._dataSource.dataSource}
                 renderRow={row => {
                     speed += 100;
                    return <AnimatedUserItem
                        animation="fadeInDown"
                        duration={speed}
                        useNativeDriver
                        user={row}
                        onUserPressed={() => this.userItemPressed(row)} />
                    }
                 }


                 enableEmptySections={true}
             />

             {this._userStore.isLoading && <Text>{I18n.t('loading-users')}</Text>}
         </View>
     );
    }
}