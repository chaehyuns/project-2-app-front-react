import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Edit from './src/pages/Settings/Edit';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabLayout({navigation}, route) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{title: '오더 목록'}}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{title: '배달 정보'}}
      />
      <Tab.Screen
        name="SettingLayout"
        component={SettingLayout}
        options={{title: '내 정보'}}
      />
    </Tab.Navigator>
  );
}
function SettingLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: '내 정보', headerShown: false}}
      />
      <Stack.Screen name="Edit" component={Edit} options={{title: '수정'}} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: '로그인'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: '회원가입'}}
        />
        <Stack.Screen
          name="TabLayout"
          component={TabLayout}
          options={{title: '메인화면', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
