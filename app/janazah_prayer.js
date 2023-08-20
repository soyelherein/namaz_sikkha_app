import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { Link } from "expo-router";
import { styles } from './styles.js'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

const customData = require('../assets/janaja_namaz.json');
const dua = require('../assets/dua_text.json');
const fateah = require('../assets/surah_text.json')[0];
const fateah_header = require('../assets/surah_names.json')[0];
const surah1 = require('../assets/surah_text.json');
const surah1_header = require('../assets/surah_names.json');


export default function janaja_namaz() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useSearchParams();
  const { sel_language, title, back, name, type, rakat, namaz_name } = params;
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
          <Text style={styles.para}>{customData.intro[sel_language]}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subheading}>{customData.heading_1[sel_language]}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.para}>{customData.niyath[sel_language]}</Text>
          <Text style={styles.para}>{customData.niyath_diclaimer[sel_language]}</Text>
          <Text style={styles.para}>{customData.niyath_meaning[sel_language]}</Text>
          <Text style={styles.para}>{customData.tahrima[sel_language]}</Text>
          </View>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[0][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[0]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[0][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <View style={styles.row}>
          <Text style={styles.para}>{customData.darud[sel_language]}</Text>
          </View>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[2][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[0]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[2][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <View style={styles.row}>
          <Text style={styles.para}>{customData.third_takbir[sel_language]}</Text>
          </View>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[6][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[0]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[6][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
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


