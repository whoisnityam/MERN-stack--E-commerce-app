import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, NavigationHelpersContext} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homepage from './src/pages/homepage';
import COLORS from './src/const/colors';
import detailpage from './src/pages/detailpage';
import login from "./src/pages/login";
import register from "./src/pages/register";
import accounts from './src/pages/accounts';
import updatepage from './src/pages/updatepage';
import order from './src/pages/order'
import cartpage from './src/pages/cartpage'
// import { useSelector } from 'react-redux';
// import { Provider } from 'react-redux';

// import AppNavigator from './src/navigations/Navigator';
// import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';


const Stack = createStackNavigator();
const App = () => {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  return (

    <NavigationContainer>
       {/* {
        userInfo?(()=>Navigate('homepage')):(()=>Navigate('login'))
      }  */}

      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="homepage" component={homepage} />
        <Stack.Screen name="login" component={login}/> 
        <Stack.Screen name="accounts" component={accounts}/>
        <Stack.Screen name="updatepage" component={updatepage}/>
        <Stack.Screen name="detailpage" component={detailpage} />
        <Stack.Screen name="cartpage" component={cartpage}/>
        <Stack.Screen name="order" component={order}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;