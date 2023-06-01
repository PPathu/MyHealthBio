import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screen/Home';
import GetStarted from '../screen/GetStarted';
import Login from '../screen/Login';
import BottemTab from '../screen/BottomTab';
import CreateProfile from '../screen/CreateProfile';
import Goals from '../screen/Goals';

const screens = {
    Home: {
    screen: Home
},
GetStarted: {
    screen: GetStarted,
navigationOptions: {
    title: 'Sign Up'
}
},
Login: {
 screen: Login
 
},
BottemTab: {
    screen: BottemTab,
    navigationOptions: {
        title: ''
    },
    navigationOptions: { header: false }
},
CreateProfile: {
    screen: CreateProfile,
    navigationOptions: { header: false }
},
Goals: {
    screen: Goals,
    navigationOptions: { header: false }
   }



}



const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);