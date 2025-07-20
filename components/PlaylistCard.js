import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PlaylistCard({ playlist, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={playlist.image} style={styles.image} />
      <Text style={styles.name}>{playlist.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  }
});
