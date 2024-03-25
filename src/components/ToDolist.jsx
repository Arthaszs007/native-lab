/**
 * My To Do List App
 *
 * @format
 */
import React, {useState} from 'react';
import {Mystyles} from './ToDoForm';

import {
  SafeAreaView,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

const ToDoList = ({tasks, addTask}) => {
  const [context, setContext] = useState('');

  return (
    <SafeAreaView style={Mystyles.container}>
      <ScrollView>
        <Pressable>
          <View style={[Mystyles.task, Mystyles.completed]}>
            <Text style={Mystyles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[Mystyles.task]}>
            <Text style={Mystyles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[Mystyles.task, Mystyles.completed]}>
            <Text style={Mystyles.taskText}>Walk dog</Text>
          </View>
        </Pressable>
        {tasks.map(item => (
          <View style={[Mystyles.task, Mystyles.completed]} key={item}>
            <Text style={Mystyles.taskText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={Mystyles.form}>
        <TextInput
          style={Mystyles.input}
          placeholder="Add a new task..."
          onChangeText={text => setContext(text)}
          value={context}
        />
        <Button onPress={() => addTask(context)} title="Add" />
      </View>
    </SafeAreaView>
  );
};

export default ToDoList;
