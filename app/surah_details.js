import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { Link } from "expo-router";
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { useState, useEffect } from 'react';
import { styles } from './styles';

const surah = require('../assets/surah_text.json');
const menu = require('../assets/surah_details_menu.json');

export default function surah_details() {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useSearchParams();
    const { surah_name, sel_language, title, back } = params;

    const [currentSurah, setcurrentSurah] = useState(surah[0])

    useEffect(() => {
        const new_surah = surah.filter(s => s.name == surah_name)[0]
        // console.log(surah)
        setcurrentSurah(new_surah)
    }, [surah_name]);

    const [currentMenu, setcurrentMenu] = useState(menu[0])

    useEffect(() => {
        const new_menu = menu.filter(s => s.language == sel_language)[0]
        // console.log(surah)
        setcurrentMenu(new_menu)
    }, [sel_language]);

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
                    <Text style={styles.para}>{currentSurah.text["arabic"]}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{currentMenu.pronunciation}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{currentSurah.text[sel_language]}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{currentMenu.meaning}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.para}>{currentSurah.meaning[sel_language]}</Text>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
            <View style={styles.footer}>
                <Link href={{ pathname: "./surah_mainpage", params: { "sel_language": sel_language, "title": title, "back": back } }}>
                    <Text style={styles.head}>{back}</Text></Link>
            </View>
        </View>
    );
}

