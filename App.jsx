import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/page/HomeScreen';
import AboutScreen from './src/page/AboutScreen';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {/* <ToDoList tasks={tasks} addTask={addTask} /> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
