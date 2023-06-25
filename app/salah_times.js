import {
    Coordinates,
    CalculationMethod,
    PrayerTimes,
    SunnahTimes,
    Prayer,
    Qibla
} from "adhan";
import moment from "moment-timezone";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, Image, View } from 'react-native';
import { useNavigation, useRouter, useSearchParams, Link } from "expo-router";
import React, { useState, useEffect } from 'react';
import { styles } from './styles'
import * as Location from 'expo-location';
const menu = require('../assets/salah_times.json');


export default function salah_times() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigation = useNavigation();
    const router = useRouter();
    const defaults = useSearchParams();
    const { sel_language, title, back } = defaults;

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = <View style={styles.container}>
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
                    <Text style={styles.para}>{menu.waiting_for_location[sel_language]}</Text>
                    </View>
                </ScrollView>
                <StatusBar style="auto" />
                <View style={styles.footer}>
                    <Link href={{ pathname: "./main_page", params: { "sel_language": sel_language, "title": title, "back": back } }}>
                        <Text style={styles.head}>{back}</Text></Link>
                </View>
            </View>;
    if (errorMsg) {
        text = <View style={styles.container}>
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
            <Text style={styles.para}>{menu.errorMsg[sel_language]}</Text>
            </View>
        </ScrollView>
        <StatusBar style="auto" />
        <View style={styles.footer}>
            <Link href={{ pathname: "./main_page", params: { "sel_language": sel_language, "title": title, "back": back } }}>
                <Text style={styles.head}>{back}</Text></Link>
        </View>
    </View>;
    } else if (location) {

        const params = CalculationMethod.MuslimWorldLeague();
        const date = new Date();
        console.log(date.toLocaleDateString(undefined, {day:'2-digit',timeZoneName: 'long' }).substring(4));
        const prayerTimes = new PrayerTimes(location.coords, date, params);
        const sunnahTimes = new SunnahTimes(prayerTimes);
        text = <View style={styles.container}>
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
            <Text style={styles.para}>{JSON.stringify(location)}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.para}>{menu.fajr[sel_language]}: {moment(prayerTimes.fajr).format("MMMM DD, YYYY h:mm A")}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.para}>{menu.sunrise[sel_language]}: {moment(prayerTimes.sunrise).format("MMMM DD, YYYY h:mm A")}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.para}>{menu.dhur[sel_language]}: {moment(prayerTimes.dhuhr).format("MMMM DD, YYYY h:mm A")}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.para}>{menu.asr[sel_language]}: {moment(prayerTimes.asr).format("MMMM DD, YYYY h:mm A")}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.para}>{menu.magrib[sel_language]}: {moment(prayerTimes.maghrib).format("MMMM DD, YYYY h:mm A")}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.para}>{menu.isha[sel_language]}: {moment(prayerTimes.isha).format("MMMM DD, YYYY h:mm A")}</Text>
            </View>
        </ScrollView>
        <StatusBar style="auto" />
        <View style={styles.footer}>
            <Link href={{ pathname: "./main_page", params: { "sel_language": sel_language, "title": title, "back": back } }}>
                <Text style={styles.head}>{back}</Text></Link>
        </View>
    </View>;
    }

    return (
        text
    );
}



// import {
//     Coordinates,
//     CalculationMethod,
//     PrayerTimes,
//     SunnahTimes,
//     Prayer,
//     Qibla
// } from "adhan";
// import moment from "moment-timezone";
// import { StatusBar } from 'expo-status-bar';
// import { ScrollView, Text, Image, View } from 'react-native';
// import { Link } from "expo-router";
// import { useNavigation, useRouter, useSearchParams } from "expo-router";
// import React, { useState, useEffect } from 'react';
// import { styles } from './styles'

// export default function salah_times() {


//     // const coordinates = new Coordinates(35.7897507, -78.6912485);
//     // const params = CalculationMethod.MoonsightingCommittee();
//     // const date = new Date();
//     // const prayerTimes = new PrayerTimes(coordinates, date, params);
//     // const sunnahTimes = new SunnahTimes(prayerTimes);
//     // const navigation = useNavigation();
//     // const router = useRouter();
//     // const defaults = useSearchParams();
//     // const { sel_language, title, back } = defaults;

//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//         })();
//     }, []);

//     let text = 'Waiting..';
//     if (errorMsg) {
//         text = errorMsg;
//     } else if (location) {
//         text = JSON.stringify(location);
//     }

//     return (
//         <View>
//             <Text>{text}</Text>
//         </View>
//     );
// }

// //     return (
// //         <View style={styles.container}>
// //             <View style={styles.header}>
// //                 <Image
// //                     source={require('../assets/kaba_50x63.png')}
// //                 />
// //                 <Link style={styles.head} href={{ pathname: "./" }}>
// //                     <Text style={styles.head}>{title}</Text>
// //                 </Link>
// //             </View>
// //             <ScrollView>
// //                 <View style={styles.row}>
// //                     <Text style={styles.para}>Prayer times for ${moment(date).format("MMMM DD, YYYY")}</Text>
// //                 </View>
// //                 <View style={styles.row}>
// //                     <Text style={styles.para}>Fajr: ${moment(prayerTimes.fajr).tz("America/New_York").format("MMMM DD, YYYY h:mm A")}</Text>
// //                 </View>
// //             </ScrollView>
// //             <StatusBar style="auto" />
// //             <View style={styles.footer}>
// //                 <Link href={{ pathname: "./main_page", params: { "sel_language": sel_language, "title": title, "back": back } }}>
// //                     <Text style={styles.head}>{back}</Text></Link>
// //             </View>
// //         </View>
// //     );
// // }
