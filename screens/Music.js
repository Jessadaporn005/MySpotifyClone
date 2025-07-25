import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const musicList = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image: require('../assets/image/song1.png'),
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    image: require('../assets/image/song2.png'),
  },
  {
    id: '3',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
  {
    id: '4',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
  {
    id: '6',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
  {
    id: '7',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
  {
    id: '8',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
   {
    id: '9',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
   {
    id: '10',
    title: 'Stay',
    artist: 'Justin Bieber & The Kid LAROI',
    image: require('../assets/image/song1.png'),
  },
];

export default function MusicScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Music</Text>

      {/* 🔽 เพิ่มลิสต์เพลงตรงนี้ */}
      <Text style={styles.subHeader}>My Album</Text>
      <FlatList
  data={musicList}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.image} />
      
      {/* 💡 ย้าย Text มาอยู่ข้างรูป */}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
        <Text style={styles.artist}numberOfLines={1} ellipsizeMode="tail">{item.artist}</Text>
      </View>
    </TouchableOpacity>
  )}
  showsVerticalScrollIndicator={false}
/>
    </View>
  );
}

//stylec//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 25,
    backgroundColor: '#183906ff',
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#040605ff',
    marginBottom: 15,
    textShadowRadius:2.5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    alignContent:'space-around',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 15,
  
    justifyContent: 'center', // ✅ เอาให้ตรงกลางแนวดิ่งกับรูป
    
  },
  title: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'auto',
  },
  artist: {
    fontSize: 14,
    color: '#B3B3B3',
    marginTop: 3,
  },
});
