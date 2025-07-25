import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Your Top Songs',
    image: 'https://i.imgur.com/6uOahbP.png',
  },
  {
    id: '2',
    title: 'Study Vibes',
    image: 'https://i.imgur.com/9xXnRfL.png',
  },
  {
    id: '3',
    title: 'Chillhop Essentials',
    image: 'https://i.imgur.com/b3n7QFZ.jpg',
  },
  {
    id: '4',
    title: 'Workout Boost',
    image: 'https://i.imgur.com/TWFOvoG.jpg',
  },
];

export default function RecentPlayedGrid({ navigation }) {
  return (
    <View style={styles.grid}>
      {data.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#282828',
    borderRadius: 8,
    width: '48%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    flexShrink: 1,
  },
});
