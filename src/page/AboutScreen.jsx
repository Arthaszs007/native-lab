import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <MainLayout>
        <Text>IncredibleTodoListApp</Text>
        <Text>Qiyuan Liu</Text>
        <Text>{currentTime}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
