import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import {Provider} from './src/context/TaskContext';
import { Colors } from 'react-native-paper';

import Header from './src/components/Header';

const navigator = createStackNavigator(
  {
    Index:{
      screen:IndexScreen,
      navigationOptions:{
        headerRight:()=><Header title="Index"/>,
        title:"Tasks"
      }
    },
    Show:{
      screen:ShowScreen,
      navigationOptions:{
        headerRight:()=><Header title="Show"/>,
        title:"Task"
      }
    },
    Create:{
      screen:CreateScreen,
      navigationOptions:{
        title:"Add Task"
      }
    },
    Edit:{
      screen:EditScreen,
      navigationOptions:{
        title:"Edit Task"
      }
    }
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: 
    {
      title: "Tasks",
      headerStyle: {
        backgroundColor: Colors.blue500
      },
    }
  }
);

const App= createAppContainer(navigator);

export default ()=>{
  return <Provider> 
    <App/>
  </Provider>
}