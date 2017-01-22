// It is necessary to add the typings of imported oomponents

declare module "react-native-button" {
    import React, { Component } from "react";

    interface Props {
        style?: React.ViewStyle;
        styleDisabled?: React.ViewStyle;
        onPress?: () => any;
    }

    export default class Button extends Component<Props, any> {}
}

declare module "react-native-i18n" {
    interface I18nSignature {
        fallbacks: boolean;
        translations: any;
        t: (key: string) => string;
        readonly locale: string;
    }

    const I18n: I18nSignature;
    export default I18n;
}

declare module 'react-native-navigation' {
    interface NavigationSignature {
        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Top-Level-API
         * @param options
         */
        startTabBasedApp(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Top-Level-API
         * @param options
         */
        startSingleScreenApp(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Top-Level-API
         * @param options
         */
        registerComponent(name: string, screenFactory: () => any): void;
    }

    export interface Navigator {
        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        push(options: PushOptions): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        pop(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        popToRoot(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        resetTo(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        showModal(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        dismissModal(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        dismissAllModals(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        showLightBox(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        dismissLightBox(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        handleDeepLink(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        setOnNavigatorEvent(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        setOnNavigatorEvent(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        setButtons(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        setTitle(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        toggleDrawer(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        toggleTabs(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        setTabBadge(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        switchToTab(options: any): void;

        /**
         * See for docs: https://github.com/wix/react-native-navigation/wiki/Screen-API
         * @param options
         */
        toggleNavBar(options: any): void;
    }

    export interface PushOptions {
        screen: string;
        title?: string;
        titleImage?: any;
        passProps?: any;
        animated?: boolean;
        backButtonTitle?: string;
        backButtonHidden?: boolean;
        navigatorStyle?: any;
        navigatorButtons?: any;
    }

    export let Navigation: NavigationSignature;
}

declare module 'react-native-animatable' {
    import React, { Component } from "react";

    interface AnimatableProps {
        /**
         * See for possbile values https://github.com/oblador/react-native-animatable#animations-2
         */
        animation: string;

        /**
         * For how long the animation will run (milliseconds).	1000
         */
        duration?: number;

        /**
         * 	Optionally delay animation (milliseconds).	0
         */
        delay?: number;

        /**
         * 	Direction of animation, especially useful for repeating animations. Valid values: normal, reverse, alternate, alternate-reverse.	normal
         */
        direction?: string;

        /**
         * 	Timing function for the animation. Valid values: custom function or linear, ease, ease-in, ease-out, ease-in-out, ease-in-cubic, ease-out-cubic, ease-in-out-cubic, ease-in-circ, ease-out-circ, ease-in-out-circ, ease-in-expo, ease-out-expo, ease-in-out-expo, ease-in-quad, ease-out-quad, ease-in-out-quad, ease-in-quart, ease-out-quart, ease-in-out-quart, ease-in-quint, ease-out-quint, ease-in-out-quint, ease-in-sine, ease-out-sine, ease-in-out-sine, ease-in-back, ease-out-back, ease-in-out-back.	ease
         */
        easing?: string;

        /**
         * 	How many times to run the animation, use infinite for looped animations.	1
         */
        iterationCount?: number;

        /**
         * 	What style property to transition, for example opacity, rotate or fontSize. Use array for multiple properties.	None
         */
        transition?: string|string[];

        /**
         * 	A function that is called when the animation has been started.	None
         */
        onAnimationBegin?: () => void;

        /**
         * 	A function that is called when the animation has been completed successfully or cancelled. Function is called with an endState argument, refer to endState.finished to see if the animation completed or not.	None
         */
        onAnimationEnd?: (endState: any) => void;

        /**
         * Whether to use native or JavaScript animation driver. Native driver can help with performance but cannot handle all types of styling and requires you to integrate that module on iOS.  false
         */
        useNativeDriver?: boolean;
    }


    export function createAnimatableComponent<P>(component: new() => Component<P, any>):  new() => Component<AnimatableProps & P, any>
}

declare module "react-native-elements" {
    import React, { Component } from "react";
    import {View, TouchableHighlight} from "react-native";

    interface CardProps {
        /**
         * 	column	string	flex direction (row or column) (optional)
         */
        flexDirection?: string;

        /**
         * none	object (style)	outer container style (optional)
         */
        containerStyle?: any;

        /**
         * 	none	object (style)	inner container style (optional)
         */
        wrapperStyle?: any;

        /**
         * 	none	string	optional card title (optional)
         */
        title?: string;

        /**
         * 	none	object (style)	additional title styling (if title provided) (optional)
         */
        titleStyle?: any;

        /**
         * 	none	object (style)	additional divider styling (if title provided) (optional)
         */
        dividerStyle?: any;

        /**
         * 	System font bold (iOS), Roboto-Bold (android)	string	specify different font family
         */
        fontFamily?: any;

        /**
         * 	inherited styling	object(style)	specify image styling if image is provided
         */
        imageStyle?: any;

        /**
         * 	none	image uri or require pathh	add an image as the heading with the image prop (optional)
         */
        image?: any;
    }

    interface ListProps {
        /**
         * marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: #cbd2d9	object (style)	style the list container
         */
        containerStyle?: any;
    }

    interface ListItemProps {
        /**
         * 	none	object	left avatar (optional). Refer to React Native Image Source
         */
        avatar?: any;

        /**
         * 	none	object (style)	avatar styling (optional)
         */
        avatarStyle?: any;

        /**
         * 	#bdc6cf	string	set chevron color
         */
        chevronColor?: string;

        /**
         * 	View or TouchableHighlight if onPress method is added as prop	React Native element	replace element with custom element (optional)
         */
        component?: View|TouchableHighlight;

        /**
         * 	none	object (style)	additional main container styling (optional)
         */
        containerStyle?: any;

        /**
         * 	false	boolean	set if you do not want a chevron (optional)
         */
        hideChevron?: boolean;

        /**
         * 	none	object {name, color, style, type} (type defaults to material icons)	icon configuration for left icon (optional)
         */
        leftIcon?: any;

        /**
         * 	{name: 'chevron-right'}	object {name, color, style, type} (type defaults to material icons)	right icon (optional), will only show up if there is an onPress method attached (material icon name)
         */
        rightIcon?: any;

        /**
         * 	none	function	onPress method for link (optional)
         */
        onPress?: any;

        /**
         * 	none	function	onLongPress method for link (optional)
         */
        onLongPress?: any;

        /**
         * false	boolean	make left avatar round
         */
        roundAvatar?: any;

        /**
         * 	none	string or object	subtitle text or custom view (optional)
         */
        subtitle?: string|any;

        /**
         * none	style (object)	provide styling for subtitle container
         */
        subtitleContainerStyle?: any;

        /**
         * 	none	object (style)	additional subtitle styling (optional )
         */
        subtitleStyle?: any;

        /**
         * 	none	string	main title for list item (required)
         */
        title: string;

        /**
         * 	none	object (style)	additional title styling (optional)
         */
        titleStyle?: any;

        /**
         * 	none	object (style)	additional wrapper styling (optional)
         */
        wrapperStyle?: any;

        /**
         * 	white	string	define underlay color for TouchableHighlight (optional)
         */
        underlayColor?: string;

        /**
         * 	HelevticaNeue (iOS), Roboto (android)	string	specify different font family
         */
        fontFamily?: string;

        /**
         * 	none	string	provide a rightTitle to have a title show up on the right side of the button, will override any icon on the right
         */
        rightTitle?: string;

        /**
         * 	flex: 1, alignItems: 'flex-end', justifyContent: 'center'	object (style)	style the outer container of the rightTitle text
         */
        rightTitleContainerStyle?: any;

        /**
         * 	marginRight: 5, color: '#bdc6cf'	object (style)	style the text of the rightTitle text
         */
        rightTitleStyle?: any;

        /**
         * 	none	react native component	add a label with your own styling by providing a label={} prop to ListItem
         */
        label?: any;
}

    export class Card extends Component<CardProps, any> {}
    export class List extends Component<ListProps, any> {}
    export class ListItem extends Component<ListItemProps, any> {}
}