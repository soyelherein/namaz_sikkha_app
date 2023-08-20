import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { Link } from "expo-router";
import { styles } from './styles.js'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

const customData = require('../assets/namaz_details.json');
const dua = require('../assets/dua_text.json');
const fateah = require('../assets/surah_text.json')[0];
const fateah_header = require('../assets/surah_names.json')[0];
const surah1 = require('../assets/surah_text.json');
const surah1_header = require('../assets/surah_names.json');


export default function namaz_details() {
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
          <Text style={styles.para}>{customData.disclaimer[sel_language]}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subheading}>{customData.heading_1[sel_language]}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.para}>{customData.niyat[sel_language]}</Text>
          <Text style={styles.para}>{customData.tahrima[sel_language]}</Text>
          <Text style={styles.para}>{customData.before_sana[sel_language]}</Text>
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
          <Text style={styles.para}>{customData.rakat_1[sel_language]}</Text>
          </View>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{fateah_header[sel_language]} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{fateah["text"].arabic}</Text> */}
              <Text style={styles.para}>{fateah.text[sel_language]}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{surah1_header[1][sel_language]} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{fateah["text"].arabic}</Text> */}
              <Text style={styles.para}>{surah1[1].text[sel_language]}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <View style={styles.row}>
          <Text style={styles.para}>{customData.ruku[sel_language]}</Text>
          <Text style={styles.para}>{customData.ruku_dua["arabic"]}</Text>
          <Text style={styles.para}>{customData.ruku_dua[sel_language]}</Text>
          <Text style={styles.para}>{customData.ruku_dua_meaning[sel_language]}</Text>
          </View>
          <View style={styles.row}>
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
        <View style={styles.row}>
          <Text style={styles.subheading}>{customData.heading_2[sel_language]}</Text>          
          <Text style={styles.para}>{customData.second_rakat[sel_language]}</Text>
          <Text style={styles.para}>{customData.second_rakat_baithak[sel_language]}</Text>
        </View> 
        <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[1][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[1]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[1][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
          </View>
        <View style={styles.row}>
          <Text style={styles.subheading}>{customData.heading_3[sel_language]}</Text>          
          <Text style={styles.para}>{customData.third_rakat_beter[sel_language]}</Text>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[5][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[1]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[5][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <Text style={styles.para}>{customData.third_rakat_beter_ruku_and_sijdah[sel_language]}</Text>
          <Text style={styles.para}>{customData.last_rakat_postsijdah[sel_language]}</Text>
        </View> 
        <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[1][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[1]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[1][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[2][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[2]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[2][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <View style={styles.row}>
          <Collapse >
            <CollapseHeader>
              <View style={styles.row}>
                <Text style={styles.subheading}>{dua[3][sel_language].name} ⇅</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* <Text style={styles.para}>{dua[3]["arabic"].text}</Text> */}
              <Text style={styles.para}>{dua[3][sel_language].text}</Text>
            </CollapseBody>
          </Collapse>
          </View>
          <View style={styles.row}>
          <Text style={styles.para}>{customData.salam[sel_language]}</Text>
          <Text style={styles.para}>{customData.salam_text[sel_language]}</Text>
          <Text style={styles.para}>{customData.monajath[sel_language]}</Text>
        </View> 
      </ScrollView>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Link href={{ pathname: "./namaz_mainpage", params: { "sel_language": sel_language, "title": title, "back": back } }}>
          <Text style={styles.head}>{back}</Text></Link>
      </View>
    </View>
  );
}


