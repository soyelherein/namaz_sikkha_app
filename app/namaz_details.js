import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { Link } from "expo-router";
import { styles } from './styles.js'


const customData = require('../assets/namaz_details.json');

export default function namaz_details() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useSearchParams();
  const { sel_language, title, back , name, type, rakat, namaz_name} = params;
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
                    <Text style={styles.para}>1st Rakat</Text>
                    </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.niyat[sel_language]}</Text>
                    <Text style={styles.para}>{customData.tahrima[sel_language]}</Text>
                    <Text style={styles.para}>{customData.before_sana[sel_language]}</Text>
                    <Text style={styles.para}>{customData.sana["arabic"]}</Text>
                    <Text style={styles.para}>{customData.sana[sel_language]}</Text>
                    <Text style={styles.para}>{customData.sana_meaning[sel_language]}</Text>
                    <Text style={styles.para}>{customData.rakat_1[sel_language]}</Text>
                    <Text style={styles.para}>{customData.ruku[sel_language]}</Text>
                    <Text style={styles.para}>{customData.ruku_dua["arabic"]}</Text>
                    <Text style={styles.para}>{customData.ruku_dua[sel_language]}</Text>
                    <Text style={styles.para}>{customData.ruku_dua_meaning[sel_language]}</Text>
                    <Text style={styles.para}>{customData.post_ruku[sel_language]}</Text>
                    <Text style={styles.para}>{customData.pre_sijda[sel_language]}</Text>
                    <Text style={styles.para}>{customData.sijda[sel_language]}</Text>
                    <Text style={styles.para}>{customData.sijda_dua["arabic"]}</Text>
                    <Text style={styles.para}>{customData.sijda_dua[sel_language]}</Text>
                    <Text style={styles.para}>{customData.sijda_meaning[sel_language]}</Text>
                    <Text style={styles.para}>{customData.between_sijdas[sel_language]}</Text>
                    <Text style={styles.para}>{customData.between_sijdas_dua[sel_language]}</Text>
                    <Text style={styles.para}>{customData.between_sijdas_meaning[sel_language]}</Text>
                </View>
            </ScrollView>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Link href={{ pathname: "./main_page", params: { "sel_language": sel_language, "title": title, "back": back } }}>
          <Text style={styles.head}>{back}</Text></Link>
      </View>
    </View>
  );
}


