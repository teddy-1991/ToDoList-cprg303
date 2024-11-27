import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // 배경색 설정 (필요 시 변경)
  },
});

export default MainLayout;
