import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FilterButtons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.active]}>
        <Text style={[styles.text, styles.activeText]}>ทั้งหมด</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>เพลง</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>พอดแคสต์</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  active: {
    backgroundColor: '#1DB954',
  },
  text: {
    color: '#ccc',
    fontWeight: '600',
  },
  activeText: {
    color: '#000',
  },
});
