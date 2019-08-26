/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import App from './App2';
// import App from "./DrawerNavigatorApp"
// import App from "./ScrollablesNavigatorApp"
import { name as appName } from './app.json';

if (!__DEV__) {
    global.console = {
        info: () => { },
        log: () => { },
        warn: () => { },
        debug: () => { },
        error: () => { }
    };
}

AppRegistry.registerComponent(appName, () => App);
