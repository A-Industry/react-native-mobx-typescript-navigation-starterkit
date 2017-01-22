# A starting point for rapid app development without al the Recdux stuff

Don't get me wrong here. I do think the architecture of Redux is great and superior in keeping your async app bugfree.
But I'm not working a product oriented organization and I need to get my projects done before time runs out. I hope this starting point 


Inspired by [ReactNativeTS](https://github.com/mrpatiwi/ReactNativeTS/)

> This project is mainly configured to work well with [Webstorm](https://www.jetbrains.com/webstorm/)

## Getting Started

* Requirements: [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com/)

Clone this repository:

```sh
git clone https://github.com/BSWG/react-native-mobx-typescript-navigation-starterkit
cd react-native-mobx-typescript-navigation-starterkit
```

Install dependencies:

```sh
yarn install
```

Start React Native server:

```sh
yarn start
```

### iOS

```sh
yarn watch-ios
```

### Android

```sh
yarn watch-android
```
 

This starter kit comes with a few batteries included:

* RXJS: For async streams
* Axios: Configuring and executing network calls
* InversifyJS: Dependency Injection with support for React Components
* Mobx: Observable stores
* react-native-navigation: Native navigation for iOS and Android
* react0native-vector-icons: Use icon fonts with React Native
* react-native-i18n: Handle translations based on device language.
* react-native-animatable: Ready to go animations. For an example see the render function of the user list.
* react-native-elements: Additional elements
* Serializr: Use domain classes instead of JS plain objects. Use the ApiGateway class to fetch and deserialize data.

## TODO
 * Currently tsc --watch is not killed when yarn watch-ios or android is stopped.
 * Production/Release builds
 * Rename project