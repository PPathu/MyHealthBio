import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//screens
import homeFeed from '../screen/Feed';
import homeProfile from '../screen/Profile';
import homeSocial from '../screen/Social';

//tab names
const Feed = 'Feed';
const Profile = 'Profile';
const Social = 'Social';

const Tab = createBottomTabNavigator();

export default function BottemTab() {
    return (
        <NavigationContainer>
            
          <Tab.Navigator

            initialRouteName={Feed}
            
            screenOptions={({ route }) => ({
                headerShown: false,
                
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
    
                if (rn === Feed) {
                    
                  iconName = focused ? 'grid' : 'grid-outline';
    
                } else if (rn === Profile) {
                  iconName = focused ? 'person' : 'person-outline';
    
                } else if (rn === Social) {
                  iconName = focused ? 'people' : 'people-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'grey',
              labelStyle: { paddingBottom: 10, fontSize: 10 },
              style: { padding: 10, height: 5}
            }}>
    
                <Tab.Screen name={Feed} component={homeFeed}/>
                <Tab.Screen name={Profile} component={homeProfile}/>
                <Tab.Screen name={Social} component={homeSocial}/>

    
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    
    