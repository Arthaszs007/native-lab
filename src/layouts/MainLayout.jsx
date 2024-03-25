import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
        <Text>this is a common header</Text>
        {children}
        <Text>this is a common footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
