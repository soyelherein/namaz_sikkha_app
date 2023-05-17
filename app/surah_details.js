import StatusBar from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import Link from "expo-router";
import { useNavigation, useRouter, useSearchParams } from "expo-router";


const item = require('../assets/surah_text.json');


export default function surah_details() {
    const [selectedSurah, setselectedSurah] = useState("fateah");

  const navigation = useNavigation();
  const router = useRouter();
  const params = useSearchParams();
  const {surah_name } = params;

  console.log(params)
  for ( key in item){

    // console.log(item[key])
    if (item[key].name == surah_name)
    {
        selectedSurah = item[key]
        console.log(selectedSurah.bengali_meaning)
    }
  }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/mosque.png')}
                />
                <Text style={styles.title}>  নামায শিক্ষা</Text>
            </View>
            <ScrollView>
                <View style={styles.row}>
                    <Text style={styles.para}>{selectedSurah.arabic_text}</Text>
                </View>
                <View style={styles.row}>
                <Text style={styles.para}>{selectedSurah.bengali_text}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.para}>{selectedSurah.bengali_meaning}</Text>
            </View>
            </ScrollView>
            <StatusBar style="auto" />
            <Link href="./">Link to Home</Link>
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

