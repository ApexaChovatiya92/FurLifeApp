/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/reducers/store';
import Login from './Login';
import Register from './Register';
import VerifyOTP from './VerifyOTP';
import ProfileDetail from './ProfileDetail';
import Vaccination from './Vaccination';
import Setting from './Setting';
import AddVaccination from './AddVaccination';
import Reminder from './Reminder';
import Tabbar from './Tabbar';
import CreateReminder from './CreateReminder';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabbar">
        <Stack.Screen name="Tabbar" component={Tabbar} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Vaccination" component={Vaccination} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="AddVaccination" component={AddVaccination} options={{ headerShown: false }} />        
        <Stack.Screen name="Reminder" component={Reminder} options={{ headerShown: false }} /> 
        <Stack.Screen name="CreateReminder" component={CreateReminder} options={{ headerShown: false }} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;