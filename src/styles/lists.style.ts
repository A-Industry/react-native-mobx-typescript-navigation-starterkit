import { StyleSheet, Platform } from 'react-native';

export const listStyleTouchable = {
    activeBackGround: '#eee'
};

export const listStyle = StyleSheet.create({
    list: {
        marginBottom: 20
    } as React.ViewStyle,

    item: {
        paddingTop: 16,

        ...Platform.select({
            ios: {
                paddingLeft: 30
            },
            android: {
                paddingLeft: 0
            },
        })
    } as React.ViewStyle,

    itemTouch: {

    } as React.ViewStyle,

    itemFirstRow: {
        marginRight: 16,

        ...Platform.select({
            ios: {
                marginLeft: 0,
            },
            android: {
                marginLeft: 16,
            },
        })
    } as React.ViewStyle,

    itemSecondRow: {
        marginTop: 8,
        marginRight: 16,
        flex: 1,
        flexDirection: 'row',

        ...Platform.select({
            ios: {
                marginLeft: 0,
            },
            android: {
                marginLeft: 16,
            },
        })
    } as React.ViewStyle,

    itemHeader: {
        fontSize: 17,
        color: '#000'
    } as React.TextStyle,

    itemText: {
        color: '#000'
    } as React.TextStyle,

    itemNote: {
        color: '#666'
    } as React.TextStyle,

    itemDivider: {
        height: 1,
        backgroundColor: '#ddd',
        marginTop: 10,

    } as React.ViewStyle
});