import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, Image, View } from 'react-native';
import { Link } from "expo-router";
import { Picker } from '@react-native-picker/picker';

const menu = require('../assets/menu_items.json');

export default function index() {

  const [selectedLanguage, setSelectedLanguage] = useState("bengali");
  console.log(selectedLanguage)
  const [currentMenu, setcurrentMenu] = useState(menu[0])
  useEffect(() => {
    const new_menu = menu.filter(m => m.language == selectedLanguage)[0]
    console.log(new_menu)
    setcurrentMenu(new_menu)
  }, selectedLanguage);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/mosque.png')}
        />
        <Text style={styles.title}>{currentMenu.title}</Text>
      </View>
      <View>
        <Text style={styles.para}>{currentMenu.select_language}</Text>
        <Picker style={styles.para}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Bangla" value="bengali" />
          <Picker.Item label="English" value="english" />
        </Picker>
      </View>
      <View style={styles.row}>
        <Link style={styles.para} href={{ pathname: "./main_page", params: { "sel_language": selectedLanguage, "title" :currentMenu.title } }}>
          <Text style={styles.para}>{currentMenu.continue}</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
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

