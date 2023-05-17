import { StatusBar } from 'expo-status-bar';
import { useState,  } from 'react';
import { StyleSheet, FlatList, Text, Image, View } from 'react-native';
import { Link } from "expo-router";
import {Picker} from '@react-native-picker/picker';


const customData = require('../assets/surah_names.json');
const language = "bengali"



export default function index() {
  const [selectedLanguage, setSelectedLanguage] = useState("bengali");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/mosque.png')}
        />
        <Text style={styles.title}>  নামায শিক্ষা</Text>
      </View>
      <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Bengali" value="bengali" />
  <Picker.Item label="English" value="english" />
</Picker>
      <FlatList
        data={
          customData
        }

        renderItem={({ item }) =>
          <View style={styles.row}>
            <Link style={styles.para} href={{ pathname: "./surah_details", params: { "surah_name": item.name } }}>
              <Text>{(selectedLanguage == "bengali") ? item.bengali_name : item.name}</Text>
            </Link>
          </View>}
      />
      <StatusBar style="auto" />
      <Link href="./surah_details">Link to surah</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginTop: 20,
    backgroundColor: '#adff2f',
    paddingLeft: 20,
    flexDirection: 'row',
    textAlign: 'center'
  },
  tinyLogo: {
    marginTop: 10,
    width: 40,
    height: 40,
  },
  title: {
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500'
  },
  row: {
    marginTop: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    textAlign: 'center'
  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '300',
  },
});

