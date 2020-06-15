import React from 'react';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Loginscreen';
import Signup from './screens/SignUp';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}
const navigator =createStackNavigator({
  signup : {
    screen: Signup,
    navigationOptions:{
      headerShown:false,
      headerTransparent:true
    },
  },
login:{
  screen: Login,
  navigationOptions:{
    headerShown:false,
    headerTransparent:true,
  },
},
})
const AppContainer= createAppContainer(navigator);