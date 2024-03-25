import React from 'react';
import {View, Text, Button} from 'react-native';
import {useState} from 'react';
import ToDoList from '../components/ToDolist';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'watch TV',
  ]);
  const addTask = task => {
    setTasks([...tasks, task]);
  };
  return (
    <MainLayout>
      <Text>HomeScreen</Text>
      <ToDoList tasks={tasks} addTask={addTask} />
      <Button
        title="Go To About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;
