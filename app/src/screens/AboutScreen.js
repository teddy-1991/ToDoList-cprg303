import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const handleNamePress = () => {
    Alert.alert('Easter Egg', 'You found the hidden message!');
  };

  return (
    <MainLayout>
      <Text style={styles.title}>ToDo List</Text>
      <TouchableOpacity onPress={handleNamePress}>
        <Text style={styles.name}>Developed by: Jooyoung Kim</Text>
      </TouchableOpacity>
      <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
});

export default AboutScreen;
