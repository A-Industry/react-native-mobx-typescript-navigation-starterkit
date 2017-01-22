import './ioc/ioc';
import './translations/i18n.configuration';
import {Navigation} from 'react-native-navigation';
import {Screens, registerScreens} from './screens/screen.registry';
import I18n from 'react-native-i18n';

const Icon = require('react-native-vector-icons/Ionicons');

export default class App  {
    constructor() {
        registerScreens();

        Icon.getImageSource('ios-contacts-outline', 30).then((icon: any) =>
            Navigation.startTabBasedApp({
                tabs: [
                    {
                        label: I18n.t('contacts'),
                        screen: Screens.UserList, // this is a registered name for a screen
                        icon: icon,
                        // selectedIcon: require('../img/one_selected.png'),
                        title: I18n.t('contacts')
                    }
                    // {
                    //     label: 'Two',
                    //     screen: 'example.SecondTabScreen',
                    //     icon: require('../img/two.png'),
                    //     selectedIcon: require('../img/two_selected.png'),
                    //     title: 'Screen Two'
                    // }
                ],

                animationType: 'none'
            })
        );
    }
}