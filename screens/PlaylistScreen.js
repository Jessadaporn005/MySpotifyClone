import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlaylistScreen() {
  return (

    <View style={styles.container}>
      <Text>🎧 Playlist Screen (กำลังพัฒนา)</Text>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});
