import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { playlists } from '../data/mockData';
import PlaylistCard from '../components/PlaylistCard';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎵 Playlist</Text>
      
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlaylistCard playlist={item} onPress={() => navigation.navigate('Playlist', { playlist: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
