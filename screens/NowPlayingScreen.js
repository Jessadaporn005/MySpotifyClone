import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function NowPlayingScreen({ route }) {
  const { song } = route.params;

  return (
    <View style={styles.container}>
      <Image source={song.image} style={styles.image} />

      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>

      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playText}>▶️ Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#fff'
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 30
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10
  },
  artist: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 30
  },
  playButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30
  },
  playText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
});
