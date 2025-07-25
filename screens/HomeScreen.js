import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import FilterButtons from '../components/FilterButtons';
import RecentPlayedGrid from '../components/RecentPlayedGrid';
import SuggestedForYou from '../components/SuggestedForYou';
import PopularStations from '../components/PopularStations';



export default function HomeScreen({ navigation }) {
  
  return (
    <ScrollView style={styles.container}>
      {/* ปุ่ม Filter */}
      <FilterButtons />

      {/* เล่นล่าสุด */}
      <View style={styles.section}>
        <Text style={styles.title}>เล่นล่าสุด</Text>
        <RecentPlayedGrid navigation={navigation} />
      </View>

      {/* คัดสรรเพื่อคุณ */}
      <View style={styles.section}>
        <Text style={styles.title}>คัดสรรมาเพื่อคุณ</Text>
        <SuggestedForYou navigation={navigation} />
      </View>

      {/* สถานียอดนิยม */}
      <View style={styles.section}>
        <Text style={styles.title}>สถานียอดนิยม</Text>
        <PopularStations navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
  },
  section: {
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});
