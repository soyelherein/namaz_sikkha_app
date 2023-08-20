import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, FlatList, Text, Image, View } from 'react-native';
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { Link } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles.js'


const customData = require('../assets/special_namaz_names.json');

export default function special_namaz() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useSearchParams();
  const { sel_language, title, back } = params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/kaba_50x63.png')}
        />
        <Link style={styles.head} href={{ pathname: "./" }}>
          <Text style={styles.head}>{title}</Text>
        </Link>
      </View>
      <FlatList
        data={
          customData
        }

        renderItem={({ item }) =>
          <View>
            <Link style={styles.para} href={{ pathname: item.link, params: { "dua_name": item.name, "sel_language": sel_language, "title": title, "back": back } }}>
              <Text>{item[sel_language]}</Text>
            </Link>
          </View>}
      />
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Link href={{ pathname: "./main_page", params: { "sel_language": sel_language, "title": title, "back": back } }}>
          <Text style={styles.head}>{back}</Text></Link>
      </View>
    </View>
  );
}


