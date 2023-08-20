import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { Link } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles.js'


const customData = require('../assets/eid_text.json');

export default function eid_mainpage() {
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
      <ScrollView>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.niyat_heading[sel_language]}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.niyat[sel_language]}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.process_heading[sel_language]}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.process[sel_language]}</Text>
                    </View>
            </ScrollView>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Link href={{ pathname: "./special_namaz", params: { "sel_language": sel_language, "title": title, "back": back } }}>
          <Text style={styles.head}>{back}</Text></Link>
      </View>
    </View>
  );
}


