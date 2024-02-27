// App.js

import React from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import ToDoList from './ToDoForm';
import ToDoForm from './ToDoList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;