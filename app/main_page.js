import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, FlatList, Text, Image, View } from 'react-native';
import { Link } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import LangSel from "./language_selector.js"
import { useNavigation, useRouter, useSearchParams } from "expo-router";

const customData = require('../assets/index_items.json');

export default function mainPage() {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useSearchParams();
    const { sel_language, title } = params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/mosque.png')}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        data={
          customData
        }

        renderItem={({ item }) =>
          <View style={styles.row}>
            <Link style={styles.para} href={{ pathname: item.link }}>
              <Text>{(sel_language == "bengali") ? item.bengali_name : item.english_name}</Text>
            </Link>
          </View>}
      />
      <StatusBar style="auto" />
      <Link href="./surah_mainpage">Link to surah</Link>
      <Link href="./">Back</Link>
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

