import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, Image, View } from 'react-native';
import { Link } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import {styles} from './styles'
const menu = require('../assets/menu_items.json');

export default function index() {

  const [selectedLanguage, setSelectedLanguage] = useState("bengali");
  const [currentMenu, setcurrentMenu] = useState(menu[0])
  useEffect(() => {
    const new_menu = menu.filter(m => m.language == selectedLanguage)[0]
    setcurrentMenu(new_menu)
  }, [selectedLanguage]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/kaba_50x63.png')}
        />
        <Link style={styles.head} href={{ pathname: "./"}}>
        <Text>{currentMenu.title}</Text>
        </Link>
      </View>
      <View style={styles.contentContainer}>
        <Text style={{textAlign: 'center', paddingLeft: 10, fontSize: 25}}>بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</Text>
        <Text style={styles.head}>{currentMenu.select_language}</Text>
        <Picker style={styles.picker} itemStyle={{textAlign:'center', fontWeights:200, backgroundColor: '#f2f6f3', paddingLeft: 30}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Bangla" value="bengali" />
          <Picker.Item label="English" value="english" />
        </Picker>
      </View>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Link href={{ pathname: "./main_page", params: { "sel_language": selectedLanguage, "title" :currentMenu.title , "back":currentMenu.back} }}>
          <Text style={styles.head}>{currentMenu.continue}</Text>
        </Link>
      </View>
    </View>
  );
}



