import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

import MusicScreen from '../screens/Music';
import Playlistscreen from '../screens/Playlist';
import Allmusic from '../screens/Allmusic';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Music" component={MusicScreen} />
         <Stack.Screen name="Playlist" component={Playlistscreen}/>
         <Stack.Screen name="Allmusic" component={Allmusic}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
