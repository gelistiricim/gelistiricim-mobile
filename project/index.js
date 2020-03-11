/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './screens/rootscreen/App';
import LoginMain from './screens/loginscreen/LoginMain/LoginMain';
import LoginScreen from './screens/loginscreen/LoginScreen/LoginScreen';
import CreateScreen from './screens/loginscreen/CreateScreen/CreateScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginMain);
