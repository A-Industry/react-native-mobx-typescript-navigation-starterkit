import {Navigation} from 'react-native-navigation';
import {UserList} from './user/userlist';
import {UserDetails} from './user/userdetails';

export const Screens = {
    UserList: "UserList",
    UserDetails: "UserDetails"
};

export function registerScreens() {
    Navigation.registerComponent(Screens.UserList, () => UserList);
    Navigation.registerComponent(Screens.UserDetails, () => UserDetails);
}