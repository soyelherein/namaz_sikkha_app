import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { Link } from "expo-router";
import { styles } from './styles.js'


const customData = require('../assets/niyath_text.json');

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
                    <Text style={styles.para}>{customData.heading[sel_language]}</Text>
                    <Text style={styles.para}>{customData.introduction1[sel_language]}</Text>

                    </View>
                <View style={styles.row}>
                    <Text style={styles.subheading}>{customData.heading1[sel_language]}</Text>
                    </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.line1["arabic"].text}</Text>
                    <Text style={styles.para}>{customData.line1[sel_language].text}</Text>
                    <Text style={styles.para}>{customData.line1[sel_language].meaning}</Text>
                    </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.line2["arabic"].text}</Text>
                    <Text style={styles.para}>{customData.line2[sel_language].text}</Text>
                    <Text style={styles.para}>{customData.line2[sel_language].meaning}</Text>
                    </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.line3["arabic"].text}</Text>
                    <Text style={styles.para}>{customData.line3[sel_language].text}</Text>
                    <Text style={styles.para}>{customData.line3[sel_language].meaning}</Text>
                    </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.line4["arabic"].text}</Text>
                    <Text style={styles.para}>{customData.line4[sel_language].text}</Text>
                    <Text style={styles.para}>{customData.line4[sel_language].meaning}</Text>
                    </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.line5["arabic"].text}</Text>
                    <Text style={styles.para}>{customData.line5[sel_language].text}</Text>
                    <Text style={styles.para}>{customData.line5[sel_language].meaning}</Text>
                    </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.line6["arabic"].text}</Text>
                    <Text style={styles.para}>{customData.line6[sel_language].text}</Text>
                    <Text style={styles.para}>{customData.line6[sel_language].meaning}</Text>
                </View>
                <View style={styles.row}>
                <Text style={styles.subheading}>{customData.heading2[sel_language]}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{customData.addon1[sel_language].text}</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.para}>{customData.addon2[sel_language].text}</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.para}>{customData.addon3[sel_language].text}</Text>
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


