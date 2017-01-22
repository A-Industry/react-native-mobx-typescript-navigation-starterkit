import React, { Component } from "react";
import {Text, View, TouchableHighlight } from 'react-native';
import {User} from '../domain/test/user.model';
import {listStyle, listStyleTouchable} from '../styles/lists.style';

interface Props {
    user: User;
    onUserPressed: () => void
}

export class UserItem extends Component<Props, any> {
    render() {
        return (
            <TouchableHighlight style={listStyle.itemTouch} underlayColor={listStyleTouchable.activeBackGround} onPress={() => this.props.onUserPressed()}>
                <View style={listStyle.item}>
                    <View style={listStyle.itemFirstRow}>
                        <Text style={listStyle.itemHeader}>{this.props.user.name}</Text>
                    </View>

                    <View style={listStyle.itemSecondRow}>
                        <Text style={listStyle.itemText}>{this.props.user.address.city}</Text>
                        <Text style={listStyle.itemNote}> - {this.props.user.company.bs}</Text>
                    </View>

                    <View style={listStyle.itemDivider}></View>
                </View>
            </TouchableHighlight>
        )
    }
}